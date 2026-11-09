const leadController = require("../controllers/leadController");
const { authenticate, authorizeRoles } = require("../middleware/auth");

async function leadRoutes(fastify, options) {
  // 1. PUBLIC: Lead submission from contact page, consultation modals, or custom lead generator
  fastify.post("/public", leadController.createPublicLead);

  // 2. PROTECTED: All CRM operations below require Staff Authentication (Admin or Sales)
  fastify.get(
    "/",
    {
      preHandler: [authenticate],
    },
    leadController.getAllLeads
  );

  // Kanban Pipeline View
  fastify.get(
    "/pipeline",
    {
      preHandler: [authenticate],
    },
    leadController.getPipeline
  );

  // Move Lead Kanban Stage
  fastify.patch(
    "/:id/stage",
    {
      preHandler: [authenticate],
    },
    leadController.moveStage
  );

  // Bulk Leads Import (CSV / JSON)
  fastify.post(
    "/import",
    {
      preHandler: [authenticate],
    },
    leadController.importLeads
  );

  // Reports & Analytics
  fastify.get(
    "/reports",
    {
      preHandler: [authenticate],
    },
    leadController.getReports
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

  // Delete Lead
  fastify.delete(
    "/:id",
    {
      preHandler: [authenticate],
    },
    leadController.deleteLead
  );
}

module.exports = leadRoutes;
