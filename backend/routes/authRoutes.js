const authController = require("../controllers/authController");
const { authenticate, authorizeRoles } = require("../middleware/auth");

async function authRoutes(fastify, options) {
  // Public Login Endpoint (Admin & Sales only, NO public registration)
  fastify.post("/login", authController.login);

  // Authenticated Profile
  fastify.get(
    "/me",
    {
      preHandler: [authenticate],
    },
    authController.getMe
  );

  // Admin-only: Create Sales / Staff accounts
  fastify.post(
    "/users",
    {
      preHandler: [authenticate, authorizeRoles("admin")],
    },
    authController.createUser
  );

  // Admin & Sales: List Team Members (for lead assignment dropdowns)
  fastify.get(
    "/team",
    {
      preHandler: [authenticate],
    },
    authController.getTeamMembers
  );

  // Admin-only: Toggle user activation
  fastify.patch(
    "/users/:id/status",
    {
      preHandler: [authenticate, authorizeRoles("admin")],
    },
    authController.toggleUserStatus
  );
}

module.exports = authRoutes;

