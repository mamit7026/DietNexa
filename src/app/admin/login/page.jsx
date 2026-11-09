"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Mail,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Users,
  Eye,
  EyeOff,
} from "lucide-react";
import { staffLogin, getCurrentStaffUser } from "@/lib/crmApi";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    const user = getCurrentStaffUser();
    if (user) {
      router.push("/admin");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      await staffLogin(email, password);
      router.push("/admin");
    } catch (err) {
      setErrorMessage(
        err.message || "Invalid credentials. Please verify your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = (type) => {
    if (type === "admin") {
      setEmail("admin@dietnexa.com");
      setPassword("admin123");
    } else {
      setEmail("sales@dietnexa.com");
      setPassword("sales123");
    }
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen bg-[#f4faf6] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
      {/* Background Decorative Rings & Gradient */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#10793f]/10 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(16,121,63,0.12)] border border-emerald-100/80 p-8 sm:p-10 relative z-10">
        {/* DietNexa Brand Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#edf8f1] border border-emerald-200/60 flex items-center justify-center text-[#10793f] mb-3 shadow-xs">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-[26px] font-extrabold text-[#0d3b1f] tracking-tight">
            DietNexa Staff CRM
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
            Administrative &amp; Sales Representative Access
          </p>

          {/* Notice: Public Registration is Disabled */}
          <div className="mt-4 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-800 text-[11.5px] leading-relaxed text-left flex items-start gap-2">
            <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Private Portal:</strong> Public account registration is disabled. Accounts are provisioned exclusively by administrators.
            </span>
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200/80 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Staff Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@dietnexa.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#10793f] focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#10793f] focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 px-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-200 hover:opacity-95 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
            style={{
              background: "#10793f",
              boxShadow: "0 6px 20px -3px rgba(16,121,63,0.38)",
            }}
          >
            <span>{loading ? "Verifying Credentials..." : "Access Staff CRM"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* 1-Click Quick Demo Login Shortcuts */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              1-Click Demo Accounts
            </span>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
              Instant Test
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => handleFillDemo("admin")}
              className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-100/70 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d3b1f]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10793f]" />
                <span>Admin Role</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-0.5">admin@dietnexa.com</p>
            </button>

            <button
              type="button"
              onClick={() => handleFillDemo("sales")}
              className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-100/70 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Sales Role</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-0.5">sales@dietnexa.com</p>
            </button>
          </div>
        </div>

        {/* Return to website link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs text-gray-500 hover:text-[#10793f] transition-colors font-medium inline-flex items-center gap-1"
          >
            ← Return to DietNexa Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}

