"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Building2,
  Handshake,
  Calendar,
  CheckSquare,
  BarChart3,
  ShieldCheck,
  Settings,
  Search,
  Plus,
  Bell,
  HelpCircle,
  Menu,
  X,
  ChevronDown,
  LogOut,
  ExternalLink,
  Leaf,
} from "lucide-react";
import { getCurrentStaffUser, clearStaffSession } from "@/lib/crmApi";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [createDropdownOpen, setCreateDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setIsLoaded(true);
      return;
    }

    const user = getCurrentStaffUser();
    if (!user) {
      router.push("/admin/login");
    } else {
      setCurrentUser(user);
      setIsLoaded(true);
    }
  }, [isLoginPage, pathname, router]);

  const handleSignOut = () => {
    clearStaffSession();
    router.push("/admin/login");
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!isLoaded || !currentUser) {
    return (
      <div className="min-h-screen bg-[#f4f7f5] flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-gray-700">Loading CRM Portal...</p>
        </div>
      </div>
    );
  }

  const isAdmin = currentUser.role === "admin";

  // Clean, non-redundant sidebar menu items with best names matching screenshots
  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Leads", href: "/admin/leads", icon: Users },
    { name: "Contacts", href: "/admin/clients", icon: UserCheck },
    {
      name: "Deals",
      href: "/admin/pipeline",
      icon: Handshake,
      subItems: [
        { name: "Kanban", href: "/admin/pipeline" },
        { name: "List View", href: "/admin/leads" },
        { name: "Pipeline", href: "/admin/pipeline" },
      ],
    },
    { name: "Activities", href: "/admin/followups", icon: Calendar },
    {
      name: "Reports",
      href: "/admin/reports",
      icon: BarChart3,
      hasSub: true,
      subItems: [
        { name: "Deal Report", href: "/admin/reports?tab=deals" },
        { name: "Lead Report", href: "/admin/reports?tab=leads" },
        { name: "Activity Report", href: "/admin/reports?tab=activities" },
        { name: "Account Report", href: "/admin/reports?tab=accounts" },
        { name: "User Performance", href: "/admin/reports?tab=performance" },
      ],
    },
    ...(isAdmin
      ? [{ name: "Users & Roles", href: "/admin/team", icon: ShieldCheck }]
      : []),
    { name: "Settings", href: "/admin", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f5] flex flex-col lg:flex-row font-sans text-gray-900 antialiased">
      {/* ─────────────────────────────────────────────────────────────
          1. MOBILE SIDEBAR BACKDROP
      ───────────────────────────────────────────────────────────── */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 lg:hidden"
        />
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. DEEP DARK GREEN SIDEBAR (MATCHES SCREENSHOT)
      ───────────────────────────────────────────────────────────── */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-64 bg-gradient-to-b from-[#062413] via-[#052111] to-[#02180c] text-white z-50 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto shadow-2xl ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative z-10 flex-1 flex flex-col overflow-y-auto no-scrollbar">
          {/* Brand / Logo */}
          <div className="px-5 py-5 flex items-center justify-between border-b border-white/5">
            <Link href="/admin" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e] border border-[#22c55e]/30 group-hover:scale-105 transition-transform">
                <Leaf className="w-5 h-5 fill-[#22c55e] text-[#22c55e]" />
              </div>
              <div className="leading-tight">
                <div className="text-xl font-extrabold text-white tracking-wide flex items-center gap-1">
                  CRM
                </div>
                <div className="text-[9.5px] text-emerald-200/70 font-normal tracking-tight">
                  Customer Relationship Management
                </div>
              </div>
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-emerald-200/70 hover:text-white hover:bg-white/10 cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isDeals = item.name === "Deals";
              const isReports = item.name === "Reports";
              const isActive =
                item.name === "Dashboard"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href) && item.href !== "/admin";

              return (
                <div key={item.name} className="space-y-1">
                  <Link
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                      isActive
                        ? "bg-[#22c55e] text-white font-bold shadow-md shadow-emerald-950/40"
                        : "text-emerald-100/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 ${
                          isActive ? "text-white" : "text-emerald-300/80"
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>
                    {item.hasSub && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 ${
                          isActive ? "text-white" : "text-emerald-300/60"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Sub-items under Deals or Reports matching screenshot */}
                  {((isDeals && isActive) || (isReports && isActive)) && item.subItems && (
                    <div className="pl-6 pr-2 py-1 space-y-1">
                      {item.subItems.map((sub, sIdx) => {
                        const isSubActive = sIdx === 0; // Default first subitem active like in screenshots
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                              isSubActive
                                ? "text-white font-bold bg-white/10"
                                : "text-emerald-200/70 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isSubActive
                                  ? "bg-[#22c55e] ring-2 ring-[#22c55e]/40"
                                  : "border border-emerald-300/60"
                              }`}
                            />
                            <span>{sub.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom wave graphic & Quick actions */}
        <div className="relative p-4 border-t border-white/5 z-10 bg-gradient-to-t from-black/20 to-transparent">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <svg
              className="absolute -bottom-6 -left-10 w-80 h-32 text-emerald-400"
              viewBox="0 0 200 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            >
              <path d="M-20 80 C 40 40, 100 90, 180 50 C 220 30, 260 70, 300 40" />
              <path d="M-20 60 C 50 30, 120 70, 190 40 C 230 20, 270 50, 310 30" />
              <path d="M-20 95 C 60 65, 110 95, 200 65" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 text-emerald-200/80 hover:text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>DietNexa Site</span>
            </Link>

            <button
              onClick={handleSignOut}
              className="flex items-center gap-1 text-rose-300/80 hover:text-rose-200 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN COLUMN (TOP APP BAR + DASHBOARD CONTENT)
      ───────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-200/70 px-4 sm:px-6 py-2.5 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 max-w-xl">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative flex-1 max-w-md hidden sm:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search leads, contacts, deals, accounts..."
                className="w-full pl-4 pr-10 py-1.5 text-xs sm:text-[13px] bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] text-gray-800 placeholder-gray-400 transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <button
                onClick={() => setCreateDropdownOpen(!createDropdownOpen)}
                className="bg-[#16a34a] hover:bg-[#15803d] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>Create</span>
                <ChevronDown className="w-3 h-3 text-emerald-100" />
              </button>

              {createDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 text-xs font-medium text-gray-700 animate-in fade-in-50"
                  onClick={() => setCreateDropdownOpen(false)}
                >
                  <Link
                    href="/admin/leads?create=true"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-emerald-50 hover:text-[#16a34a] transition-colors"
                  >
                    <Users className="w-4 h-4 text-[#16a34a]" />
                    <span>New Lead</span>
                  </Link>
                  <Link
                    href="/admin/pipeline"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-emerald-50 hover:text-[#16a34a] transition-colors"
                  >
                    <Handshake className="w-4 h-4 text-[#16a34a]" />
                    <span>New Deal</span>
                  </Link>
                  <Link
                    href="/admin/followups"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-emerald-50 hover:text-[#16a34a] transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-[#16a34a]" />
                    <span>Schedule Activity</span>
                  </Link>
                  <Link
                    href="/admin/clients"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-emerald-50 hover:text-[#16a34a] transition-colors"
                  >
                    <UserCheck className="w-4 h-4 text-[#16a34a]" />
                    <span>New Contact</span>
                  </Link>
                </div>
              )}
            </div>

            <button
              className="relative p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
            </button>

            <button
              className="p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Help & Documentation"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 pl-1.5 pr-2 py-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-200 flex items-center justify-center text-xs font-bold text-emerald-800">
                  <Image
                    src="/image/dr_arjun_mehta.jpg"
                    alt={currentUser?.name || "Amit Mondal"}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span>
                    {(currentUser?.name || "Amit Mondal")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)
                      .toUpperCase()}
                  </span>
                </div>
                <div className="text-left hidden md:block">
                  <div className="text-xs font-bold text-gray-900 leading-tight">
                    {currentUser?.name || "Amit Mondal"}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium capitalize">
                    {currentUser?.role || "Admin"}
                  </div>
                </div>
              </button>

              {userDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 text-xs text-gray-700 animate-in fade-in-50"
                  onClick={() => setUserDropdownOpen(false)}
                >
                  <div className="px-3.5 py-2 border-b border-gray-100">
                    <p className="font-bold text-gray-900">{currentUser?.name}</p>
                    <p className="text-[11px] text-gray-500 truncate">{currentUser?.email}</p>
                  </div>
                  <Link
                    href="/admin/team"
                    className="flex items-center gap-2 px-3.5 py-2 hover:bg-gray-50"
                  >
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span>Manage Staff & Roles</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2 px-3.5 py-2 text-rose-600 hover:bg-rose-50 text-left cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
