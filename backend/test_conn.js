const mongoose = require('mongoose');
require('dotenv').config();

async function run() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/dietnexa_crm');
    console.log('MONGO_SUCCESS:', conn.connection.name);
    const cols = await conn.connection.db.listCollections().toArray();
    console.log('COLLECTIONS:', cols.map(c => c.name));
    const User = require('./models/User');
    const Lead = require('./models/Lead');
    const userCount = await User.countDocuments();
    const leadCount = await Lead.countDocuments();
    console.log('USERS_COUNT:', userCount);
    console.log('LEADS_COUNT:', leadCount);
    process.exit(0);
  } catch (e) {
    console.error('MONGO_ERROR:', e);
    process.exit(1);
  }
}
run();

