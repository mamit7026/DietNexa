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
