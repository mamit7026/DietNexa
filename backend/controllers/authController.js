const User = require("../models/User");

// Login for Admin and Sales users (NO PUBLIC SIGNUP)
async function login(request, reply) {
  try {
    const { email, password } = request.body || {};

    if (!email || !password) {
      return reply.code(400).send({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return reply.code(401).send({
        success: false,
        message: "Invalid credentials. Please verify your email and password.",
      });
    }

    if (!user.isActive) {
      return reply.code(403).send({
        success: false,
        message: "Your account is deactivated. Please contact the administrator.",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return reply.code(401).send({
        success: false,
        message: "Invalid credentials. Please verify your email and password.",
      });
    }

    // Update lastLogin
    user.lastLogin = new Date();
    await user.save();

    // Sign JWT using Fastify's jwt plugin
    const token = await reply.jwtSign(
      {
        id: user._id.toString(),
        userId: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
      {
        expiresIn: "7d",
      }
    );

    return reply.send({
      success: true,
      message: `Welcome back, ${user.name}!`,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({
      success: false,
      message: "Server error during login",
      error: error.message,
    });
  }
}

// Current logged in user profile
async function getMe(request, reply) {
  return reply.send({
    success: true,
    user: request.user,
  });
}

// Admin only: create a new Sales or Admin user (Internal account provisioning only)
async function createUser(request, reply) {
  try {
    const { name, email, password, role = "sales", phone = "" } = request.body || {};

    if (!name || !email || !password) {
      return reply.code(400).send({
        success: false,
        message: "Name, email and password are required to create a staff account",
      });
    }

    if (!["admin", "sales"].includes(role)) {
      return reply.code(400).send({
        success: false,
        message: "Role must be either 'admin' or 'sales'",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      return reply.code(409).send({
        success: false,
        message: "An account with this email address already exists",
      });
    }

    const newUser = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password,
      role,
      phone: phone.trim(),
      isActive: true,
    });

    return reply.code(201).send({
      success: true,
      message: `Successfully created ${role} account for ${newUser.name}`,
      user: newUser,
    });
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
}

// Get list of sales and admin team members (for assignment and management)
async function getTeamMembers(request, reply) {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    return reply.send({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    return reply.code(500).send({
      success: false,
      message: "Failed to fetch team members",
      error: error.message,
    });
  }
}

// Toggle user active status (Admin only)
async function toggleUserStatus(request, reply) {
  try {
    const { id } = request.params;
    const user = await User.findById(id);

    if (!user) {
      return reply.code(404).send({ success: false, message: "User not found" });
    }

    // Prevent deactivating own account
    if (request.user._id.toString() === id) {
      return reply.code(400).send({
        success: false,
        message: "You cannot deactivate your own administrative account",
      });
    }

    user.isActive = !user.isActive;
    await user.save();

    return reply.send({
      success: true,
      message: `User ${user.name} is now ${user.isActive ? "Active" : "Inactive"}`,
      user,
    });
  } catch (error) {
    return reply.code(500).send({
      success: false,
      message: "Failed to update user status",
      error: error.message,
    });
  }
}

module.exports = {
  login,
  getMe,
  createUser,
  getTeamMembers,
  toggleUserStatus,
};

