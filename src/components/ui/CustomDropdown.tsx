"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface DropdownGroup {
  label: string;
  options: readonly string[];
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options?: readonly string[];
  groups?: readonly DropdownGroup[];
  required?: boolean;
  icon?: React.ReactNode;
}

export default function CustomDropdown({
  value,
  onChange,
  placeholder,
  options,
  groups,
  required,
  icon,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Hidden native input for form validation */}
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
        {icon && <span className="text-primary flex-shrink-0">{icon}</span>}
        <span className="flex-1 truncate">{value || placeholder}</span>
        <ChevronDown
          className={`w-4 h-4 text-text-light flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute z-40 top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-xl shadow-black/8 overflow-hidden max-h-64 overflow-y-auto"
          >
            {options &&
              options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors cursor-pointer ${
                    value === option
                      ? "bg-primary/5 text-primary font-medium"
                      : "text-text hover:bg-gray-50"
                  }`}
                >
                  <span className="flex-1">{option}</span>
                  {value === option && <Check className="w-4 h-4 text-primary flex-shrink-0" />}
                </button>
              ))}

            {groups &&
              groups.map((group) => (
                <div key={group.label}>
                  <div className="px-4 py-2 text-xs font-semibold text-text-light uppercase tracking-wider bg-gray-50 border-t border-gray-100 first:border-t-0">
                    {group.label}
                  </div>
                  {group.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors cursor-pointer ${
                        value === option
                          ? "bg-primary/5 text-primary font-medium"
                          : "text-text hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex-1">{option}</span>
                      {value === option && <Check className="w-4 h-4 text-primary flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
