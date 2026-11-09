// Server-side auth verification utility
export function verifyToken(req) {
  try {
    const authHeader = req?.headers?.get?.("authorization") || req?.headers?.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return null;
    }
    const token = authHeader.split(" ")[1];
    // Simple base64 token payload decode for Next.js edge or Node
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf8"));
    return payload;
  } catch (err) {
    return null;
  }
}

export function isStaffAuthorized(user, allowedRoles = ["admin", "sales"]) {
  if (!user || !user.role) return false;
  return allowedRoles.includes(user.role);
}

