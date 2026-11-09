const mongoose = require("mongoose");

const callLogSchema = new mongoose.Schema(
  {
    contactedAt: {
      type: Date,
      default: Date.now,
    },
    contactedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    contactedByName: {
      type: String,
      default: "Sales Representative",
    },
    channel: {
      type: String,
      enum: ["phone", "whatsapp", "email", "in_person", "meeting"],
      default: "phone",
    },
    outcome: {
      type: String,
      default: "connected_interested",
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: true }
);

const noteSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    authorName: {
      type: String,
      default: "Team Member",
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: true }
);

const clientProfileSchema = new mongoose.Schema(
  {
    isClient: {
      type: Boolean,
      default: false,
    },
    convertedAt: {
      type: Date,
    },
    convertedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    planName: {
      type: String,
      default: "General Wellness Nutrition Plan",
    },
    durationMonths: {
      type: Number,
      default: 3,
    },
    amountPaid: {
      type: Number,
      default: 0,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "partially_paid"],
      default: "paid",
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    targetGoal: {
      type: String,
      default: "",
    },
    assignedDietitian: {
      type: String,
      default: "Dr. Ananya Sen",
    },
  },
  { _id: false }
);

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    dealName: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    subject: {
      type: String,
      trim: true,
      default: "Dietitian Consultation",
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
    source: {
      type: String,
      default: "contact_page",
    },
    status: {
      type: String,
      default: "new",
    },
    stage: {
      type: String,
      default: "new",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium",
    },
    expectedValue: {
      type: Number,
      default: 7500, // Estimated deal size in INR
    },
    expectedClose: {
      type: Date,
      default: () => new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    },
    pipeline: {
      type: String,
      default: "Sales Pipeline",
    },
    project: {
      type: String,
      default: "DietNexa Core",
    },
    stageOrder: {
      type: Number,
      default: 0,
    },
    // Sales Assignment
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    assignedToName: {
      type: String,
      default: "Amit Mondal",
    },
    ownerAvatar: {
      type: String,
      default: "/image/dr_arjun_mehta.jpg",
    },
    // Follow-up details
    followUpDate: {
      type: Date,
      default: null,
    },
    followUpNotes: {
      type: String,
      default: "",
    },
    followUpCompleted: {
      type: Boolean,
      default: false,
    },
    // Contact history & Notes
    callLogs: [callLogSchema],
    notes: [noteSchema],
    // Client CRM section
    clientProfile: clientProfileSchema,
  },
  {
    timestamps: true,
  }
);

leadSchema.index({ status: 1 });
leadSchema.index({ stage: 1 });
leadSchema.index({ source: 1 });
leadSchema.index({ assignedTo: 1 });
leadSchema.index({ followUpDate: 1 });
leadSchema.index({ "clientProfile.isClient": 1 });
leadSchema.index({ createdAt: -1 });

module.exports = mongoose.models.Lead || mongoose.model("Lead", leadSchema);
