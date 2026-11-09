const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const mongoose = require("mongoose");
const User = require("./models/User");
const Lead = require("./models/Lead");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dietnexa_crm");
    console.log("Connected to MongoDB for real data seeding...");

    // Create staff users
    const staffList = [
      { name: "Amit Mondal", email: "admin@dietnexa.com", role: "admin", password: "admin123", phone: "+91 98765 43210" },
      { name: "Priya Sen", email: "priya.sen@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43211" },
      { name: "Rohit Das", email: "rohit.das@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43212" },
      { name: "Ananya Roy", email: "ananya.roy@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43213" },
      { name: "Sourav Pal", email: "sourav.pal@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43214" },
      { name: "Sima Ghosh", email: "sima.ghosh@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43215" },
      { name: "Arindam Dutta", email: "arindam.dutta@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43216" },
      { name: "Madhuri Das", email: "madhuri.das@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43217" },
      { name: "Subhajit Roy", email: "subhajit.roy@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43218" },
      { name: "Ritika Paul", email: "ritika.paul@dietnexa.com", role: "sales", password: "sales123", phone: "+91 98765 43219" },
    ];

    const userMap = {};
    for (const s of staffList) {
      let existing = await User.findOne({ email: s.email });
      if (!existing) {
        existing = await User.create(s);
      }
      userMap[s.name] = existing;
    }

    console.log("✅ Staff accounts verified.");

    // Real deals matching the reports and kanban screenshots
    const realDeals = [
      {
        fullName: "Street Lighting Project",
        dealName: "Street Lighting Project",
        company: "GreenInfra Ltd.",
        email: "contact@greeninfra.com",
        phone: "+91 98201 11223",
        subject: "Smart Street Light Infrastructure CCMS",
        expectedValue: 4820000,
        status: "proposal",
        stage: "proposal",
        pipeline: "Sales Pipeline",
        project: "Smart Cities",
        assignedTo: userMap["Amit Mondal"]?._id,
        assignedToName: "Amit Mondal",
        expectedClose: new Date("2026-11-25"),
        createdAt: new Date("2026-11-01T09:00:00Z"),
        updatedAt: new Date("2026-11-09T10:15:00Z"),
      },
      {
        fullName: "IoT Deployment",
        dealName: "IoT Deployment",
        company: "CityCorp",
        email: "tenders@citycorp.gov.in",
        phone: "+91 98201 44556",
        subject: "Citywide Municipal IoT Telemetry",
        expectedValue: 7250000,
        status: "negotiation",
        stage: "negotiation",
        pipeline: "Sales Pipeline",
        project: "Urban Tech",
        assignedTo: userMap["Priya Sen"]?._id,
        assignedToName: "Priya Sen",
        expectedClose: new Date("2026-11-30"),
        createdAt: new Date("2026-11-02T10:30:00Z"),
        updatedAt: new Date("2026-11-08T16:00:00Z"),
      },
      {
        fullName: "ERP Implementation",
        dealName: "ERP Implementation",
        company: "TechNova Systems",
        email: "operations@technova.io",
        phone: "+91 98300 55667",
        subject: "Enterprise Resource Planning & Nutrition CRM",
        expectedValue: 12000000,
        status: "qualified",
        stage: "qualified",
        pipeline: "Sales Pipeline",
        project: "Enterprise Core",
        assignedTo: userMap["Rohit Das"]?._id,
        assignedToName: "Rohit Das",
        expectedClose: new Date("2026-12-10"),
        createdAt: new Date("2026-11-03T11:00:00Z"),
        updatedAt: new Date("2026-11-09T09:20:00Z"),
      },
      {
        fullName: "CCMS Cloud Setup",
        dealName: "CCMS Cloud Setup",
        company: "SmartCity Corp.",
        email: "admin@smartcitycorp.org",
        phone: "+91 98400 99887",
        subject: "Central Cloud Monitoring System",
        expectedValue: 2800000,
        status: "negotiation",
        stage: "negotiation",
        pipeline: "Sales Pipeline",
        project: "Smart Cities",
        assignedTo: userMap["Ananya Roy"]?._id,
        assignedToName: "Ananya Roy",
        expectedClose: new Date("2026-11-26"),
        createdAt: new Date("2026-11-03T14:00:00Z"),
        updatedAt: new Date("2026-11-08T18:00:00Z"),
      },
      {
        fullName: "OEE Solution Rollout",
        dealName: "OEE Solution Rollout",
        company: "Infratech Pvt. Ltd.",
        email: "plant@infratech.com",
        phone: "+91 97654 32109",
        subject: "Factory Floor Equipment Analytics",
        expectedValue: 2000000,
        status: "proposal",
        stage: "proposal",
        pipeline: "Sales Pipeline",
        project: "Industrial IoT",
        assignedTo: userMap["Sourav Pal"]?._id,
        assignedToName: "Sourav Pal",
        expectedClose: new Date("2026-11-28"),
        createdAt: new Date("2026-11-04T09:30:00Z"),
        updatedAt: new Date("2026-11-09T11:00:00Z"),
      },
      {
        fullName: "Asset Management System",
        dealName: "Asset Management System",
        company: "BuildTron",
        email: "asset@buildtron.net",
        phone: "+91 98111 22334",
        subject: "Heavy Machinery Asset Lifecycle CRM",
        expectedValue: 1500000,
        status: "qualified",
        stage: "qualified",
        pipeline: "Sales Pipeline",
        project: "Infrastructure",
        assignedTo: userMap["Sima Ghosh"]?._id,
        assignedToName: "Sima Ghosh",
        expectedClose: new Date("2026-12-02"),
        createdAt: new Date("2026-11-04T12:00:00Z"),
        updatedAt: new Date("2026-11-07T14:30:00Z"),
      },
      {
        fullName: "Smart Lighting Phase II",
        dealName: "Smart Lighting Phase II",
        company: "EcoLight Systems",
        email: "orders@ecolight.in",
        phone: "+91 98222 11122",
        subject: "Solar LED Phase II Grid Controller",
        expectedValue: 2450000,
        status: "negotiation",
        stage: "negotiation",
        pipeline: "Sales Pipeline",
        project: "Renewables",
        assignedTo: userMap["Arindam Dutta"]?._id,
        assignedToName: "Arindam Dutta",
        expectedClose: new Date("2026-11-27"),
        createdAt: new Date("2026-11-05T10:15:00Z"),
        updatedAt: new Date("2026-11-09T13:40:00Z"),
      },
      {
        fullName: "IoT Platform Integration",
        dealName: "IoT Platform Integration",
        company: "SafeCity",
        email: "integrations@safecity.in",
        phone: "+91 99887 76655",
        subject: "Emergency Command Center Gateway",
        expectedValue: 1200000,
        status: "qualified",
        stage: "qualified",
        pipeline: "Sales Pipeline",
        project: "Public Safety",
        assignedTo: userMap["Madhuri Das"]?._id,
        assignedToName: "Madhuri Das",
        expectedClose: new Date("2026-11-21"),
        createdAt: new Date("2026-11-05T15:00:00Z"),
        updatedAt: new Date("2026-11-08T11:20:00Z"),
      },
      {
        fullName: "City Infra Monitoring",
        dealName: "City Infra Monitoring",
        company: "NexaInfra",
        email: "contracts@nexainfra.com",
        phone: "+91 99000 88776",
        subject: "Multi-utility Smart Sensor Network",
        expectedValue: 1800000,
        status: "won",
        stage: "won",
        pipeline: "Sales Pipeline",
        project: "Smart Cities",
        assignedTo: userMap["Subhajit Roy"]?._id,
        assignedToName: "Subhajit Roy",
        expectedClose: new Date("2026-11-01"),
        createdAt: new Date("2026-11-01T08:00:00Z"),
        updatedAt: new Date("2026-11-05T17:00:00Z"),
      },
      {
        fullName: "CCMS – Nepal Rollout",
        dealName: "CCMS – Nepal Rollout",
        company: "AlphaInfra",
        email: "international@alphainfra.com",
        phone: "+91 98888 77665",
        subject: "Highway Lighting Gateway System",
        expectedValue: 1760000,
        status: "won",
        stage: "won",
        pipeline: "Sales Pipeline",
        project: "Cross Border Infra",
        assignedTo: userMap["Ritika Paul"]?._id,
        assignedToName: "Ritika Paul",
        expectedClose: new Date("2026-11-05"),
        createdAt: new Date("2026-11-01T11:00:00Z"),
        updatedAt: new Date("2026-11-05T18:30:00Z"),
      },
    ];

    // Remove existing test leads and insert real deals
    await Lead.deleteMany({});
    await Lead.insertMany(realDeals);

    console.log(`✅ Successfully stored ${realDeals.length} actual deals into MongoDB 'leads' collection!`);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();

