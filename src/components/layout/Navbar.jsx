'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import { ShoppingBag } from 'lucide-react';
import { Address } from '../Address';
import { AuthButtons } from '../AuthButtons';

export default function Navbar({
  address = 'New address 3rd Commercial Lane Karachi',
  cartCount = 0,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-white'>
      <nav className='mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link href='/' className='shrink-0'>
          <Image
            src='/images/logo.png'
            alt='Restaurant logo'
            width={250}
            height={250}
            priority
            className='h-20 w-auto'
          />
        </Link>

        {/* Address (desktop) */}
        <div className='hidden min-w-0 md:block'>
          <Address text={address} />
        </div>

        {/* Right side */}
        <div className='flex items-center gap-3'>
          {/* Auth + language (desktop) */}
          <AuthButtons className='hidden md:flex' />
          <div className='hidden md:block'>
            <LanguageSelector />
          </div>

          {/* Cart */}
          <Link
            href='/cart'
            aria-label='Cart'
            className='relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200'
          >
            <ShoppingBag />
            {cartCount > 0 && (
              <span className='absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-semibold text-white'>
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger (mobile) */}
          <button
            type='button'
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
            className='flex h-10 w-10 items-center justify-center rounded-md text-gray-900 hover:bg-gray-100 md:hidden'
          >
            <svg
              viewBox='0 0 24 24'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              {menuOpen ? (
                <path d='M6 6l12 12M18 6L6 18' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='space-y-4 border-t border-gray-200 px-4 py-4 sm:px-6 md:hidden'>
          <Address text={address} />
          <AuthButtons className='flex flex-col' />
          <LanguageSelector />
        </div>
      )}
    </header>
  );
}
