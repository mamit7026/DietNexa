"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Inbox,
  CalendarClock,
  Users,
  UserCheck,
  ShieldCheck,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Headphones,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { getCurrentStaffUser, clearStaffSession } from "@/lib/crmApi";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If on login page, render children without sidebar layout
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-gray-600">Verifying DietNexa Staff Session...</p>
        </div>
      </div>
    );
  }

  const isAdmin = currentUser.role === "admin";

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      roles: ["admin", "sales"],
    },
    {
      name: "Leads & Inquiries",
      href: "/admin/leads",
      icon: Inbox,
      roles: ["admin", "sales"],
    },
    {
      name: "Follow-up Schedule",
      href: "/admin/followups",
      icon: CalendarClock,
      roles: ["admin", "sales"],
    },
    {
      name: "Clients (CRM)",
      href: "/admin/clients",
      icon: UserCheck,
      roles: ["admin", "sales"],
    },
    {
      name: "Sales Team",
      href: "/admin/team",
      icon: Users,
      roles: ["admin"], // Admin only
    },
  ];

  const visibleNav = navigation.filter((item) => item.roles.includes(currentUser.role));

  return (
    <div className="min-h-screen bg-[#f8faf9] flex flex-col lg:flex-row font-sans text-gray-900 antialiased">
      {/* ─────────────────────────────────────────────────────────────
          1. MOBILE TOP APP BAR (< lg)
      ───────────────────────────────────────────────────────────── */}
      <header className="lg:hidden bg-white border-b border-gray-200/80 px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-xs">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#0c3820] text-lg tracking-tight">
              DietNexa<span className="text-[#10793f]">CRM</span>
            </span>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                isAdmin
                  ? "bg-emerald-100 text-[#0c4728]"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {currentUser.role}
            </span>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="p-2 rounded-xl text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
          title="Sign Out"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. SIDEBAR BACKDROP FOR MOBILE
      ───────────────────────────────────────────────────────────── */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 lg:hidden"
        />
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. SIDEBAR NAVIGATION (Desktop & Mobile Drawer)
      ───────────────────────────────────────────────────────────── */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-72 bg-white border-r border-gray-200/80 z-50 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Logo & Brand Section */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10793f] to-[#0b4d29] flex items-center justify-center text-white shadow-sm shadow-emerald-900/10">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-black text-lg text-[#0c3820] leading-none tracking-tight">
                  DietNexa
                </div>
                <div className="text-[11px] font-semibold text-[#10793f] tracking-wide mt-0.5">
                  Healthcare CRM
                </div>
              </div>
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Current User Card */}
          <div className="mx-4 my-4 p-3.5 rounded-2xl bg-[#f2faf5] border border-emerald-100 flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm text-white shrink-0 shadow-xs ${
                isAdmin
                  ? "bg-[#10793f]"
                  : "bg-blue-600"
              }`}
            >
              {currentUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2)
                .toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-gray-900 truncate">
                {currentUser.name}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span
                  className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                    isAdmin
                      ? "bg-emerald-200/80 text-emerald-900"
                      : "bg-blue-200/80 text-blue-900"
                  }`}
                >
                  {currentUser.role}
                </span>
                <span className="text-[11px] text-gray-500 truncate">
                  {currentUser.email}
                </span>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <div className="px-3 py-2">
            <div className="px-3 pb-2 text-[10.5px] font-extrabold uppercase tracking-wider text-gray-400">
              {isAdmin ? "Admin & Management" : "Sales Representative CRM"}
            </div>
            <nav className="space-y-1">
              {visibleNav.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#10793f] text-white shadow-xs font-bold"
                        : "text-gray-700 hover:bg-[#edf8f1] hover:text-[#10793f]"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-100 space-y-2">
          {/* Public site link */}
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-gray-400" />
              <span>Public Website</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          </Link>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ─────────────────────────────────────────────────────────────
          4. MAIN CONTENT AREA
      ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

