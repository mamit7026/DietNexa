"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  UserCheck,
  Search,
  Filter,
  Phone,
  Mail,
  MessageCircle,
  IndianRupee,
  Calendar,
  Sparkles,
  ShieldCheck,
  Activity,
  FileText,
  User,
  ArrowRight,
} from "lucide-react";
import { fetchClientsApi, getCurrentStaffUser } from "@/lib/crmApi";

export default function AdminClientsPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const loadClients = async () => {
    setLoading(true);
    const user = getCurrentStaffUser();
    setCurrentUser(user);

    try {
      const data = await fetchClientsApi({
        search,
        planName: planFilter,
        paymentStatus: paymentFilter,
      });
      if (data && data.clients) {
        setClients(data.clients);
        setTotalRevenue(data.totalRevenue || 0);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, [search, planFilter, paymentFilter]);

  return (
    <div className="space-y-6">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & REVENUE STATS
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            DietNexa Active Clients (CRM)
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track converted patients, personalized diet programs, assigned clinical dietitians, and payment status.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
              Total Enrolled Clients
            </span>
            <span className="text-lg font-black text-[#10793f]">
              {clients.length} Active
            </span>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-[#edf8f1] border border-emerald-200 text-left">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
              Total Revenue
            </span>
            <span className="text-lg font-black text-[#0c3820]">
              ₹{totalRevenue.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. SEARCH & FILTER TOOLBAR
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search client name, email, phone, goal..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all"
            />
          </div>

          {/* Plan Filter */}
          <div>
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all font-medium text-gray-700"
            >
              <option value="all">All Nutrition Plans</option>
              <option value="Weight Loss Management Program">Weight Loss Management</option>
              <option value="Disease Management (Diabetes & BP)">Disease Management</option>
              <option value="Sports & Athletic Nutrition">Sports Nutrition</option>
              <option value="Pregnancy & Lactation Plan">Pregnancy & Lactation</option>
              <option value="Child & Teen Growth Plan">Child & Teen Growth</option>
              <option value="General Wellness & Gut Health">General Wellness</option>
            </select>
          </div>

          {/* Payment Status */}
          <div>
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#10793f] transition-all font-medium text-gray-700"
            >
              <option value="all">All Payment Statuses</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="partially_paid">Partially Paid</option>
            </select>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. CLIENTS GRID
      ───────────────────────────────────────────────────────────── */}
      {loading ? (
        <div className="py-16 text-center text-gray-400 text-sm">
          Loading client CRM records...
        </div>
      ) : clients.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#10793f] flex items-center justify-center mx-auto mb-4">
            <UserCheck className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">No Converted Clients Found</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            When a sales representative marks an inquiry as converted, the client profile with package and dietitian assignment will appear here.
          </p>
          <div className="mt-5">
            <Link
              href="/admin/leads"
              className="px-4 py-2 rounded-xl bg-[#10793f] text-white text-xs font-bold hover:bg-[#0c592e] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Go to Leads Pipeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clients.map((client) => {
            const profile = client.clientProfile || {};

            return (
              <div
                key={client._id}
                className="bg-white rounded-3xl border border-emerald-100 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Name & Payment badge */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-gray-100">
                    <div>
                      <h2 className="text-base font-extrabold text-gray-900">
                        {client.fullName}
                      </h2>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span>{client.email}</span>
                      </div>
                      {client.phone && (
                        <div className="flex items-center gap-2 text-xs text-gray-700 font-bold mt-0.5">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span>{client.phone}</span>
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full uppercase">
                        {profile.paymentStatus || "Paid"}
                      </span>
                      <div className="text-sm font-extrabold text-[#0c3820] mt-1">
                        ₹{(profile.amountPaid || 0).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Plan & Clinical Assignment Details */}
                  <div className="py-3.5 space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#edf8f1] border border-emerald-100">
                      <div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase block">
                          Enrolled Program
                        </span>
                        <span className="font-extrabold text-[#0c3820]">
                          {profile.planName || "Personalized Nutrition Plan"}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-800 bg-white px-2.5 py-0.5 rounded-md border border-emerald-200">
                        {profile.durationMonths || 3} Months
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 px-1">
                      <span className="text-gray-500 font-medium">Assigned Dietitian:</span>
                      <span className="font-bold text-gray-900">
                        {profile.assignedDietitian || "Dr. Ananya Sen"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 px-1">
                      <span className="text-gray-500 font-medium">Sales Account Rep:</span>
                      <span className="font-semibold text-gray-800">
                        {client.assignedToName || "General Sales"}
                      </span>
                    </div>

                    {profile.targetGoal && (
                      <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="text-[10px] font-bold text-gray-500 uppercase block">
                          Health Goal / Target
                        </span>
                        <p className="text-gray-700 font-medium mt-0.5">
                          {profile.targetGoal}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Bar: Action buttons */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-gray-400">
                    Enrolled {new Date(profile.convertedAt || client.createdAt).toLocaleDateString()}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {client.phone && (
                      <a
                        href={`https://wa.me/${client.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                          `Hello ${client.fullName}, checking in on your ${profile.planName} progress from DietNexa. How has your meal routine been going this week?`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 text-xs font-bold inline-flex items-center gap-1 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    )}

                    {client.phone && (
                      <a
                        href={`tel:${client.phone.replace(/\s+/g, "")}`}
                        className="p-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                        title="Call Client"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <a
                      href={`mailto:${client.email}`}
                      className="p-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                      title="Email Client"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

