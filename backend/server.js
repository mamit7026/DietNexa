const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const fastify = require("fastify")({
  logger: true,
});

const cors = require("@fastify/cors");
const jwt = require("@fastify/jwt");
const { connectDB } = require("./db");
const User = require("./models/User");
const Lead = require("./models/Lead");

// Seed default Admin & Sales accounts if none exist
async function seedInitialUsers() {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      console.log("🌱 Database is empty. Seeding initial staff accounts...");

      const adminEmail = (process.env.ADMIN_INITIAL_EMAIL || "admin@dietnexa.com").toLowerCase();
      const adminPass = process.env.ADMIN_INITIAL_PASSWORD || "admin123";

      const adminUser = await User.create({
        name: process.env.ADMIN_INITIAL_NAME || "DietNexa Administrator",
        email: adminEmail,
        password: adminPass,
        role: "admin",
        phone: process.env.ADMIN_INITIAL_PHONE || "+919876543210",
        isActive: true,
      });

      console.log(`✅ Default Admin created: ${adminEmail} (password: ${adminPass})`);

      const salesEmail = (process.env.SALES_INITIAL_EMAIL || "sales@dietnexa.com").toLowerCase();
      const salesPass = process.env.SALES_INITIAL_PASSWORD || "sales123";

      const salesUser = await User.create({
        name: process.env.SALES_INITIAL_NAME || "Rahul Verma",
        email: salesEmail,
        password: salesPass,
        role: "sales",
        phone: process.env.SALES_INITIAL_PHONE || "+919876543211",
        isActive: true,
      });

      console.log(`✅ Default Sales Rep created: ${salesEmail} (password: ${salesPass})`);

      // Seed 2 sample demo leads for instant CRM preview
      const sampleLead1 = await Lead.create({
        fullName: "Pooja Sharma",
        email: "pooja.sharma@example.com",
        phone: "+919876501234",
        subject: "Weight Loss Nutrition Plan",
        message: "Looking for a sustainable diet plan to reduce weight and manage thyroid.",
        source: "contact_page",
        status: "followup_scheduled",
        priority: "high",
        assignedTo: salesUser._id,
        assignedToName: salesUser.name,
        followUpDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // in 2 hours
        followUpNotes: "Customer requested afternoon call to discuss 3-month weight loss program.",
        callLogs: [
          {
            contactedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
            contactedBy: salesUser._id,
            contactedByName: salesUser.name,
            channel: "phone",
            outcome: "connected_followup_needed",
            notes: "Spoke for 5 mins. Very interested in personalized dietitian weekly calls.",
          },
        ],
        notes: [
          {
            authorName: "System",
            text: "Inquiry received via Contact Page",
          },
        ],
      });

      const sampleLead2 = await Lead.create({
        fullName: "Amit Patel",
        email: "amit.patel@example.com",
        phone: "+919876505678",
        subject: "Diabetes & Gut Health Consultation",
        message: "Need diet support for managing pre-diabetes without strict crash dieting.",
        source: "consultation_modal",
        status: "converted",
        priority: "medium",
        assignedTo: salesUser._id,
        assignedToName: salesUser.name,
        clientProfile: {
          isClient: true,
          convertedAt: new Date(),
          convertedBy: salesUser._id,
          planName: "Disease Management Plan (Diabetes)",
          durationMonths: 6,
          amountPaid: 12500,
          paymentStatus: "paid",
          startDate: new Date(),
          targetGoal: "Control HbA1c below 6.0 and improve digestion",
          assignedDietitian: "Dr. Ananya Sen",
        },
        notes: [
          {
            authorName: salesUser.name,
            text: "Client completed onboarding payment for 6-month diabetes package.",
          },
        ],
      });

      console.log("✅ Seeded sample CRM lead and active client.");
    }
  } catch (error) {
    console.warn("⚠️ Could not seed default users (MongoDB may be offline):", error.message);
  }
}

async function start() {
  try {
    // 1. Connect MongoDB
    await connectDB();

    // 2. Register CORS
    await fastify.register(cors, {
      origin: true, // Allow frontend during development
      methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    });

    // 3. Register JWT
    await fastify.register(jwt, {
      secret: process.env.JWT_SECRET || "dietnexa_default_super_secret_jwt_key_2026",
    });

    // 4. Seed accounts
    await seedInitialUsers();

    // 5. Health Check
    fastify.get("/", async () => {
      return {
        service: "DietNexa CRM & Fastify Backend API",
        status: "operational",
        timestamp: new Date().toISOString(),
        version: "1.0.0",
      };
    });

    fastify.get("/health", async () => {
      return { status: "ok", uptime: process.uptime() };
    });

    // 6. Register API Routes
    fastify.register(require("./routes/authRoutes"), { prefix: "/api/auth" });
    fastify.register(require("./routes/leadRoutes"), { prefix: "/api/leads" });

    // 7. Start listening
    const port = Number(process.env.PORT) || 5000;
    const host = process.env.HOST || "0.0.0.0";

    await fastify.listen({ port, host });
    console.log(`\n🚀 DietNexa Fastify Server is running on http://${host}:${port}`);
    console.log(`📡 Public Lead Submission: http://localhost:${port}/api/leads/public`);
    console.log(`🔐 Admin / Sales Login:     http://localhost:${port}/api/auth/login\n`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
