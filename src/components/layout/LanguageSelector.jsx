"use client";

import { useEffect, useRef, useState } from "react";

const LANGUAGES = ["EN", "UR"];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const ref = useRef(null);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100"
      >
        {/* Globe icon */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
        </svg>
        <span>{language}</span>
        {/* Chevron icon */}
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 text-primary transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-24 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                role="option"
                aria-selected={lang === language}
                onClick={() => {
                  setLanguage(lang);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                  lang === language ? "font-semibold text-primary" : "text-gray-900"
                }`}
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}