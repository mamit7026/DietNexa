const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const mongoose = require("mongoose");
const User = require("./models/User");
const Lead = require("./models/Lead");

async function clearData() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dietnexa_crm", {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB for clearing all seed / static data...");

    // 1. Remove all seed / dummy leads and deals
    const deletedLeads = await Lead.deleteMany({});
    console.log(`✅ Cleared all leads/deals: ${deletedLeads.deletedCount} items removed.`);

    // 2. Remove all non-admin seed staff accounts created by seed scripts
    const deletedStaff = await User.deleteMany({
      email: { $nin: ["admin@dietnexa.com", "sales@dietnexa.com"] },
    });
    console.log(`✅ Cleared seed staff accounts: ${deletedStaff.deletedCount} accounts removed.`);

    console.log("🎉 All seed data & static mock data have been completely removed!");
    process.exit(0);
  } catch (err) {
    console.error("Error clearing seed data:", err.message);
    process.exit(1);
  }
}

clearData();

