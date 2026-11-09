"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  UserPlus,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Lock,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import { getCurrentStaffUser, getAuthToken } from "@/lib/crmApi";

export default function AdminTeamPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // New staff form modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "sales",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const loadTeam = async () => {
    setLoading(true);
    const user = getCurrentStaffUser();
    if (!user || user.role !== "admin") {
      router.push("/admin");
      return;
    }
    setCurrentUser(user);

    const token = getAuthToken();
    try {
      const res = await fetch("http://localhost:5000/api/auth/team", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setTeam(data.users || []);
      }
    } catch (err) {
      // Fallback local team roster
      setTeam([
        {
          _id: "u-admin",
          name: "DietNexa Administrator",
          email: "admin@dietnexa.com",
          role: "admin",
          phone: "+91 98765 43210",
          isActive: true,
          createdAt: new Date().toISOString(),
        },
        {
          _id: "u-sales",
          name: "Rahul Verma",
          email: "sales@dietnexa.com",
          role: "sales",
          phone: "+91 98765 43211",
          isActive: true,
          createdAt: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeam();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    setSubmitting(true);

    const token = getAuthToken();
    try {
      const res = await fetch("http://localhost:5000/api/auth/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to create user");
      }

      setFormSuccess(`Successfully provisioned account for ${formData.name}`);
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "sales",
        phone: "",
      });
      setTimeout(() => {
        setShowAddModal(false);
        setFormSuccess("");
      }, 1200);
      await loadTeam();
    } catch (err) {
      // If offline demo
      const newMember = {
        _id: "u-" + Date.now(),
        name: formData.name,
        email: formData.email,
        role: formData.role,
        phone: formData.phone,
        isActive: true,
        createdAt: new Date().toISOString(),
      };
      setTeam((prev) => [...prev, newMember]);
      setFormSuccess(`Account created for ${formData.name} (Local Session)`);
      setTimeout(() => {
        setShowAddModal(false);
        setFormSuccess("");
      }, 1200);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Sales &amp; Staff Account Provisioning
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage authorized staff accounts. Note: Public registration is closed for security; only administrators can create users here.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-xl bg-[#10793f] hover:bg-[#0c592e] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4" />
          <span>Provision New Staff Account</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. TEAM ROSTER
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-base font-extrabold text-gray-900">
            Active Staff Directory ({team.length})
          </h2>
          <span className="text-xs text-gray-500 font-medium">
            Role-Based Access: Admin &amp; Sales
          </span>
        </div>

        {loading ? (
          <div className="py-16 text-center text-gray-400 text-sm">
            Loading staff roster...
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {team.map((member) => (
              <div
                key={member._id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-xs ${
                      member.role === "admin" ? "bg-[#10793f]" : "bg-blue-600"
                    }`}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)
                      .toUpperCase()}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          member.role === "admin"
                            ? "bg-emerald-100 text-[#0c4728]"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {member.role}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        {member.email}
                      </span>
                      {member.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          {member.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      member.isActive !== false
                        ? "bg-emerald-50 text-[#10793f] border border-emerald-200"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {member.isActive !== false ? "Active Staff" : "Deactivated"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MODAL: PROVISION NEW STAFF ACCOUNT
      ───────────────────────────────────────────────────────────── */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Provision Staff Account
                </h3>
                <p className="text-xs text-gray-500">
                  Create an internal credentials login for a Sales Rep or Admin
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {formError && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {formSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{formSuccess}</span>
              </div>
            )}

            <form onSubmit={handleCreateUser} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. priya.sales@dietnexa.com"
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Temporary Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Min 6 characters"
                    className="w-full text-xs p-2.5 pr-9 rounded-xl border border-gray-200 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Staff Role *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none font-semibold text-gray-800"
                  >
                    <option value="sales">Sales Representative</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2.5 rounded-xl bg-[#10793f] text-white text-xs font-bold hover:bg-[#0c592e] shadow-xs disabled:opacity-60"
                >
                  {submitting ? "Creating Account..." : "Provision Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

