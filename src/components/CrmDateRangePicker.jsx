"use client";

import { useState } from "react";
import { Calendar, ChevronDown, Check, X } from "lucide-react";

export default function CrmDateRangePicker({
  fromDate,
  toDate,
  onApply,
  align = "right",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempFromDate, setTempFromDate] = useState(fromDate);
  const [tempToDate, setTempToDate] = useState(toDate);
  const [activePreset, setActivePreset] = useState("Past 30 Days");

  const formatDateLabel = (dStr) => {
    if (!dStr) return "";
    const d = new Date(dStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const applyPreset = (preset) => {
    setActivePreset(preset);
    const end = new Date();
    const start = new Date();

    if (preset === "Today") {
      // today
    } else if (preset === "Yesterday") {
      start.setDate(end.getDate() - 1);
      end.setDate(end.getDate() - 1);
    } else if (preset === "This Week") {
      const day = end.getDay() || 7;
      start.setDate(end.getDate() - day + 1);
    } else if (preset === "This Month") {
      start.setDate(1);
    } else if (preset === "Past 30 Days") {
      start.setDate(end.getDate() - 30);
    } else if (preset === "Past 90 Days") {
      start.setDate(end.getDate() - 90);
    } else if (preset === "Year to Date") {
      start.setMonth(0, 1);
    } else if (preset === "All Time") {
      start.setFullYear(2020, 0, 1);
    }

    const f = start.toISOString().split("T")[0];
    const t = end.toISOString().split("T")[0];
    setTempFromDate(f);
    setTempToDate(t);
  };

  const handleApply = () => {
    onApply(tempFromDate, tempToDate);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left font-sans">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 bg-white border border-gray-200/90 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-gray-500" />
        <span>
          {formatDateLabel(fromDate)} – {formatDateLabel(toDate)}
        </span>
        <ChevronDown className="w-3 h-3 text-gray-400" />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-in fade-in-50 text-xs text-gray-800`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <span className="font-bold text-gray-900 text-sm">Select Date Range</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div className="py-3 border-b border-gray-100">
            <div className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-2">
              Quick Presets
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Today",
                "This Week",
                "This Month",
                "Past 30 Days",
                "Past 90 Days",
                "Year to Date",
                "All Time",
              ].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => applyPreset(p)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    activePreset === p
                      ? "bg-[#16a34a] text-white shadow-2xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Date Inputs (From Date & To Date) */}
          <div className="py-3 space-y-3">
            <div className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider">
              Custom Range (Calendar Pickers)
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">
                  From Date
                </label>
                <input
                  type="date"
                  value={tempFromDate}
                  onChange={(e) => {
                    setTempFromDate(e.target.value);
                    setActivePreset("Custom");
                  }}
                  className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold focus:bg-white focus:outline-none focus:border-[#16a34a]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">
                  To Date
                </label>
                <input
                  type="date"
                  value={tempToDate}
                  onChange={(e) => {
                    setTempToDate(e.target.value);
                    setActivePreset("Custom");
                  }}
                  className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold focus:bg-white focus:outline-none focus:border-[#16a34a]"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-medium">
              {tempFromDate && tempToDate
                ? `${formatDateLabel(tempFromDate)} ➔ ${formatDateLabel(tempToDate)}`
                : "Choose dates"}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApply}
                className="px-3.5 py-1.5 rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-bold shadow-xs cursor-pointer"
              >
                Apply Range
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

