const User = require("../models/User");

// Fastify preHandler hook to verify JWT authentication
async function authenticate(request, reply) {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return reply.code(401).send({
        success: false,
        message: "Authentication token missing or invalid format (Bearer token required)",
      });
    }

    const token = authHeader.split(" ")[1];

    // Decode and verify with Fastify JWT
    const decoded = await request.jwtVerify();

    // Verify user still exists and is active in database
    const user = await User.findById(decoded.id || decoded.userId).select("-password");
    if (!user) {
      return reply.code(401).send({
        success: false,
        message: "User account no longer exists",
      });
    }

    if (!user.isActive) {
      return reply.code(403).send({
        success: false,
        message: "This account has been deactivated. Please contact your administrator.",
      });
    }

    request.user = user;
  } catch (error) {
    return reply.code(401).send({
      success: false,
      message: "Invalid, expired, or malformed authentication token",
      error: error.message,
    });
  }
}

// Role authorization preHandler generator
function authorizeRoles(...allowedRoles) {
  return async function (request, reply) {
    if (!request.user) {
      return reply.code(401).send({
        success: false,
        message: "Unauthenticated request",
      });
    }

    if (!allowedRoles.includes(request.user.role)) {
      return reply.code(403).send({
        success: false,
        message: `Forbidden: Access restricted to [${allowedRoles.join(", ")}] roles. Your role is '${request.user.role}'`,
      });
    }
  };
}

module.exports = {
  authenticate,
  authorizeRoles,
};

