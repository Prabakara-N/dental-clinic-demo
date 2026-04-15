"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface CustomCalendarProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function CustomCalendar({
  value,
  onChange,
  required,
  placeholder = "Select a date",
}: CustomCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const todayStr = toDateString(today);

  const initialMonth = value
    ? new Date(Number(value.split("-")[0]), Number(value.split("-")[1]) - 1, 1)
    : new Date(today.getFullYear(), today.getMonth(), 1);

  const [viewMonth, setViewMonth] = useState(initialMonth);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const calendarDays = useMemo(() => {
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: Array<{ date: Date; isCurrentMonth: boolean }> = [];

    // Previous month trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, daysInPrevMonth - i),
        isCurrentMonth: false,
      });
    }

    // Current month
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({ date: new Date(year, month, d), isCurrentMonth: true });
    }

    // Next month leading days to fill 6 rows
    const remaining = 42 - days.length;
    for (let d = 1; d <= remaining; d++) {
      days.push({ date: new Date(year, month + 1, d), isCurrentMonth: false });
    }

    return days;
  }, [viewMonth]);

  const canGoPrev = viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() > today.getMonth());

  const goToPrev = () => {
    if (!canGoPrev) return;
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1));
  };

  const goToNext = () => {
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1));
  };

  const handleSelect = (date: Date) => {
    const dateStr = toDateString(date);
    if (dateStr < todayStr) return;
    onChange(dateStr);
    setIsOpen(false);
  };

  const goToToday = () => {
    setViewMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    onChange(todayStr);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {required && (
        <input
          type="text"
          required
          value={value}
          onChange={() => {}}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all outline-none text-left ${
          isOpen
            ? "border-primary ring-2 ring-primary/20"
            : "border-gray-200 hover:border-gray-300"
        } ${value ? "text-text" : "text-text-light"} bg-white`}
      >
        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="flex-1 truncate">
          {value ? formatDisplayDate(value) : placeholder}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute z-40 top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl shadow-black/8 p-4 select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={goToPrev}
                disabled={!canGoPrev}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  canGoPrev
                    ? "hover:bg-gray-100 text-text"
                    : "text-gray-300 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-heading font-semibold text-text">
                {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
              </span>
              <button
                type="button"
                onClick={goToNext}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-text transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-text-light py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map(({ date, isCurrentMonth }, i) => {
                const dateStr = toDateString(date);
                const isPast = dateStr < todayStr;
                const isToday = dateStr === todayStr;
                const isSelected = dateStr === value;
                const isSunday = date.getDay() === 0;

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelect(date)}
                    disabled={isPast || !isCurrentMonth}
                    className={`relative w-full aspect-square rounded-lg text-sm font-medium flex items-center justify-center transition-all ${
                      !isCurrentMonth
                        ? "text-gray-200 cursor-default"
                        : isPast
                          ? "text-gray-300 cursor-not-allowed line-through"
                          : isSelected
                            ? "bg-primary text-white shadow-md shadow-primary/30 cursor-pointer"
                            : isToday
                              ? "bg-primary/10 text-primary font-bold ring-1 ring-primary/30 hover:bg-primary/20 cursor-pointer"
                              : isSunday
                                ? "text-orange-500 hover:bg-orange-50 cursor-pointer"
                                : "text-text hover:bg-gray-100 cursor-pointer"
                    }`}
                  >
                    {date.getDate()}
                    {isToday && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
              <button
                type="button"
                onClick={goToToday}
                className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Today
              </button>
              {value && (
                <span className="text-xs text-text-light">
                  {formatDisplayDate(value)}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
