const leadController = require("../controllers/leadController");
const { authenticate } = require("../middleware/auth");

async function leadRoutes(fastify, options) {
  // 1. PUBLIC: Lead submission from contact page & consultation modals
  fastify.post("/public", leadController.createPublicLead);

  // 2. PROTECTED: All CRM operations below require Staff Authentication (Admin or Sales)
  fastify.get(
    "/",
    {
      preHandler: [authenticate],
    },
    leadController.getAllLeads
  );

  fastify.get(
    "/stats",
    {
      preHandler: [authenticate],
    },
    leadController.getDashboardStats
  );

  fastify.get(
    "/clients",
    {
      preHandler: [authenticate],
    },
    leadController.getClients
  );

  fastify.get(
    "/followups",
    {
      preHandler: [authenticate],
    },
    leadController.getFollowUps
  );

  fastify.get(
    "/:id",
    {
      preHandler: [authenticate],
    },
    leadController.getLeadById
  );

  fastify.patch(
    "/:id",
    {
      preHandler: [authenticate],
    },
    leadController.updateLead
  );

  // Sales Contact Action (Call, WhatsApp, Email log)
  fastify.post(
    "/:id/contact-log",
    {
      preHandler: [authenticate],
    },
    leadController.addContactLog
  );

  // Set Follow-up Date/Time
  fastify.post(
    "/:id/followup",
    {
      preHandler: [authenticate],
    },
    leadController.setFollowUp
  );

  // Convert Lead to Client
  fastify.post(
    "/:id/convert",
    {
      preHandler: [authenticate],
    },
    leadController.convertToClient
  );
}

module.exports = leadRoutes;

