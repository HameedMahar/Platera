"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

function Address({ text }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
      <span className="truncate">{text}</span>
    </div>
  );
}

function AuthButtons({ className = "" }) {
  return (
    <div className={`gap-3 ${className}`}>
      <Link
        href="/login"
        className="rounded-md border border-gray-900 px-4 py-2 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-100"
      >
        Log in
      </Link>
      <Link
        href="/signup"
        className="rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-primary-dark"
      >
        Sign up for free delivery
      </Link>
    </div>
  );
}

export default function Navbar({
  address = "New address 3rd Commercial Lane Karachi",
  cartCount = 0,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Restaurant logo"
            width={140}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Address (desktop) */}
        <div className="hidden min-w-0 md:block">
          <Address text={address} />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Auth + language (desktop) */}
          <AuthButtons className="hidden md:flex" />
          <div className="hidden md:block">
            <LanguageSelector />
          </div>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 7h12l-1 12H7L6 7z" />
              <path d="M9 7a3 3 0 016 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md text-gray-900 hover:bg-gray-100 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="space-y-4 border-t border-gray-200 px-4 py-4 sm:px-6 md:hidden">
          <Address text={address} />
          <AuthButtons className="flex flex-col" />
          <LanguageSelector />
        </div>
      )}
    </header>
  );
}