'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ORDER = {
  customerName: 'Alex',
  orderNumber: 'PLT-20261105',
  date: 'November 5, 2026',
  shipping: {
    name: 'Alex Johnson',
    line1: '24 Spice Garden Avenue',
    line2: 'Lahore, PK 54000',
  },
  billing: {
    name: 'Alex Johnson',
    cardLast4: '4242',
    cardBrand: 'VISA',
  },
  items: [
    {
      id: 1,
      name: 'Grilled Salmon Bowl',
      detail1: 'Portion: Regular',
      detail2: 'Extras: Avocado',
      qty: 1,
      price: 18.99,
    },
    {
      id: 2,
      name: 'Cold Brew Espresso',
      detail1: 'Size: Large',
      detail2: 'Milk: Oat',
      qty: 2,
      price: 5.5,
    },
  ],
  deliveryFee: 0,
  tax: 2.49,
};

const serif = {
  fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", Palatino, serif',
};

const fmt = (n) => {
  const rounded = Math.round(n * 100) / 100;
  return Number.isInteger(rounded) ? `$${rounded}` : `$${rounded.toFixed(2)}`;
};

const subtotal = ORDER.items.reduce((sum, item) => sum + item.price * item.qty, 0);
const total = subtotal + ORDER.deliveryFee + ORDER.tax;

const NAV = [
  { label: 'Menu', href: '/products' },
  { label: 'Drinks', href: '/products' },
  { label: 'About', href: '#about' },
  { label: 'Get $5', href: '#offer' },
];

function ItemArt({ id }) {
  if (id === 2) {
    return (
      <svg width="72" height="58" viewBox="0 0 72 58" aria-hidden="true">
        <ellipse cx="34" cy="50" rx="18" ry="3.5" fill="#e3e3e3" />
        <path d="M20 22h28v16c0 7-6 12-14 12s-14-5-14-12V22z" fill="#f7f7f7" stroke="#d5d5d5" strokeWidth="1" />
        <path d="M22 22h24c0 6-2 10-5 12 4 1 7 4 7 8H24c0-4 2-7 6-8-3-2-5-6-8-12z" fill="#4b342c" />
        <path d="M48 26h6c4 0 7 3 7 7s-3 7-7 7h-6" fill="none" stroke="#c8c8c8" strokeWidth="2" />
        <path d="M28 14c1-4 2-6 2-6M34 12c1-4 1-7 1-7M40 14c0-4 1-6 1-6" stroke="#cfcfcf" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="78" height="58" viewBox="0 0 78 58" aria-hidden="true">
      <ellipse cx="39" cy="50" rx="22" ry="3.5" fill="#e4e4e4" />
      <path d="M16 30h46c-1 12-10 20-23 20S17 42 16 30z" fill="#fbfbfb" stroke="#dedede" strokeWidth="1" />
      <ellipse cx="39" cy="30" rx="20" ry="8" fill="#e7d3c4" />
      <path d="M24 29c4-4 10-5 16-3 5 2 10 1 14-2 1 3 1 6-1 8-6 4-16 6-24 3-4-2-6-4-5-6z" fill="#e07a62" />
      <ellipse cx="30" cy="28" rx="5" ry="2.4" fill="#7d9a6a" />
      <ellipse cx="46" cy="31" rx="3.5" ry="1.8" fill="#d98c3a" />
    </svg>
  );
}

function EnRouteMark() {
  return (
    <svg viewBox="0 0 640 54" className="mt-8 mb-3 block w-full h-auto" fill="none" aria-hidden="true">
      <path
        d="M6 32 C 72 33, 108 16, 168 23 C 214 28, 236 15, 292 19"
        stroke="#cfcfcf"
        strokeWidth="1.35"
        strokeDasharray="2.2 4.6"
        strokeLinecap="round"
      />
      <g transform="translate(304 6) rotate(-18 16 16)">
        <path
          d="M2.2 15.2 L30.5 3.2 L17.2 29.2 L13.6 17.4 Z"
          stroke="#bdbdbd"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M13.6 17.4 L30.5 3.2" stroke="#bdbdbd" strokeWidth="1.25" />
      </g>
      <path
        d="M368 16 C 430 10, 468 30, 528 22 C 574 16, 608 25, 634 20"
        stroke="#cfcfcf"
        strokeWidth="1.35"
        strokeDasharray="2.2 4.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OrderItem({ item }) {
  return (
    <div className="flex items-start gap-5 py-6">
      <div className="flex h-[86px] w-[112px] shrink-0 items-center justify-center bg-[#f2f2f2]">
        <ItemArt id={item.id} />
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-[15px] font-semibold leading-snug text-[#1a1a1a]">{item.name}</p>
        <p className="mt-1.5 text-[14px] leading-snug text-[#2a2a2a]">{item.detail1}</p>
        <p className="text-[14px] leading-snug text-[#2a2a2a]">{item.detail2}</p>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <p className="text-[14px] text-[#2a2a2a]">Quantity: {item.qty}</p>
          <p className="text-[15px] text-[#1a1a1a]">{fmt(item.price * item.qty)}</p>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  const [tracked, setTracked] = useState(false);

  return (
    <div
      className="min-h-screen w-full bg-white text-[#222]"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
    >
      <header className="relative h-[248px] overflow-hidden bg-black">
        <div className="absolute inset-x-0 top-0 flex h-[132px] items-center justify-center">
          <p className="pl-[0.46em] text-[34px] font-semibold uppercase leading-none tracking-[0.46em] text-white sm:text-[44px]">
            Platera
          </p>
        </div>
      </header>

      <article className="relative z-10 mx-auto -mt-[112px] w-full max-w-[600px] bg-white shadow-[0_18px_48px_-18px_rgba(0,0,0,0.28)]">
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 pb-2 pt-8">
          {NAV.map((item, index) => (
            <React.Fragment key={item.label}>
              <Link
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#3a3a3a] transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
              {index < NAV.length - 1 && (
                <span className="text-[11px] text-[#b5b5b5]" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="px-8 pb-12 pt-8 sm:px-12">
          <h1
            className="text-center text-[30px] font-bold leading-[1.15] tracking-[-0.015em] text-[#1c1c1c] sm:text-[34px]"
            style={serif}
          >
            Thanks for your order, {ORDER.customerName}.
          </h1>
          <p className="mt-2 text-center text-[14px] text-[#8a8a8a]" style={serif}>
            Order No. {ORDER.orderNumber}
          </p>

          <div className="mt-9 grid grid-cols-3 gap-4 text-left">
            <div>
              <p className="mb-2 text-[13px] italic text-[#9a9a9a]" style={serif}>
                Shipping to
              </p>
              <p className="text-[13.5px] leading-snug text-[#2c2c2c]">{ORDER.shipping.name}</p>
              <p className="text-[13.5px] leading-snug text-[#2c2c2c]">{ORDER.shipping.line1}</p>
              <p className="text-[13.5px] leading-snug text-[#2c2c2c]">{ORDER.shipping.line2}</p>
            </div>
            <div>
              <p className="mb-2 text-[13px] italic text-[#9a9a9a]" style={serif}>
                Billed to
              </p>
              <p className="text-[13.5px] leading-snug text-[#2c2c2c]">{ORDER.billing.name}</p>
              <p className="mt-0.5 text-[13.5px] leading-snug text-[#2c2c2c]">
                <span className="tracking-[0.14em] text-[#8d8d8d]">••••••••</span>
                {ORDER.billing.cardLast4}{' '}
                <span className="ml-0.5 text-[13px] font-bold italic text-[#1A1F71]" style={serif}>
                  {ORDER.billing.cardBrand}
                </span>
              </p>
            </div>
            <div>
              <p className="mb-2 text-[13px] italic text-[#9a9a9a]" style={serif}>
                Date ordered
              </p>
              <p className="text-[13.5px] leading-snug text-[#2c2c2c]">{ORDER.date}</p>
            </div>
          </div>

          <EnRouteMark />

          <p className="text-center text-[12px] text-[#9a9a9a]">
            Your order is on its way. We will be shipping it tomorrow.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              aria-pressed={tracked}
              onClick={() => setTracked(true)}
              className="cursor-pointer bg-[#3c3c3c] px-8 py-[11px] text-[14px] font-medium text-white transition-colors hover:bg-[#2f2f2f]"
            >
              {tracked ? 'Tracking your order' : 'Track your order'}
            </button>
          </div>

          <div className="mt-11 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e4e4e4]" />
            <p className="whitespace-nowrap text-[12px] text-[#8d8d8d]">Your Order Summary</p>
            <div className="h-px flex-1 bg-[#e4e4e4]" />
          </div>

          <div className="mt-2">
            {ORDER.items.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </div>

          <dl className="ml-auto mt-4 w-[220px] text-[15px] text-[#2a2a2a]">
            <div className="flex items-baseline justify-between py-[3px]">
              <dt>Subtotal</dt>
              <dd>{fmt(subtotal)}</dd>
            </div>
            <div className="flex items-baseline justify-between py-[3px]">
              <dt>Shipping</dt>
              <dd>{fmt(ORDER.deliveryFee)}</dd>
            </div>
            <div className="flex items-baseline justify-between py-[3px]">
              <dt>Tax</dt>
              <dd>{fmt(ORDER.tax)}</dd>
            </div>
            <div className="mt-5 flex items-baseline justify-between text-[22px] font-bold text-[#1a1a1a]">
              <dt>Total</dt>
              <dd>{fmt(total)}</dd>
            </div>
          </dl>
        </div>

        <footer className="bg-[#f5f5f5] px-8 py-8 text-center">
          <p className="text-[12px] font-bold text-[#2a2a2a]">
            <a href="#platera" className="hover:opacity-70">
              Platera
            </a>
            <span className="mx-1.5 font-normal text-[#c5c5c5]">|</span>
            <a href="#privacy" className="hover:opacity-70">
              Privacy Policy
            </a>
            <span className="mx-1.5 font-normal text-[#c5c5c5]">|</span>
            <a href="#terms" className="hover:opacity-70">
              Terms of Service
            </a>
          </p>
          <p className="mt-4 text-[11px] leading-5 text-[#9a9a9a]">
            24 Spice Garden Avenue, Lahore, PK 54000
            <br />
            © 2026 Platera, Inc. All Rights Reserved
          </p>
          <p className="mx-auto mt-3 max-w-[340px] text-[11px] leading-5 text-[#9a9a9a]">
            If you prefer not to receive emails like this from Platera,{' '}
            <a href="#unsubscribe" className="underline decoration-[#c8c8c8] underline-offset-2">
              you may unsubscribe
            </a>
          </p>
        </footer>
      </article>

      <div className="h-16 bg-white" />
    </div>
  );
}
