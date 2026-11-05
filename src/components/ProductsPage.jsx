'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

/* ─── Static product catalogue ─────────────────────────────────── */
const PRODUCTS = [
  /* Foods */
  {
    id: 1, category: 'food',
    name: 'Grilled Salmon Bowl', price: 18.99,
    desc: 'Tender Atlantic salmon over jasmine rice with seasonal greens.',
    badge: 'Chef\'s Pick',
    emoji: '🐟',
    tags: ['Protein', 'Healthy'],
  },
  {
    id: 2, category: 'food',
    name: 'Truffle Mushroom Pasta', price: 16.50,
    desc: 'Hand-rolled pappardelle with wild mushrooms & black truffle oil.',
    badge: 'Popular',
    emoji: '🍝',
    tags: ['Vegetarian'],
  },
  {
    id: 3, category: 'food',
    name: 'Smash Burger Duo', price: 14.99,
    desc: 'Double smash patties, cheddar, caramelised onions, house sauce.',
    badge: null,
    emoji: '🍔',
    tags: ['Bestseller'],
  },
  {
    id: 4, category: 'food',
    name: 'Mezze Platter', price: 12.00,
    desc: 'Hummus, baba ganoush, falafel, pita & pickled veg for two.',
    badge: 'Share',
    emoji: '🫙',
    tags: ['Vegan', 'Sharing'],
  },
  {
    id: 5, category: 'food',
    name: 'Avocado Toast Deluxe', price: 10.50,
    desc: 'Sourdough, smashed avocado, poached egg, chilli flakes & micro herbs.',
    badge: null,
    emoji: '🥑',
    tags: ['Brunch', 'Healthy'],
  },
  {
    id: 6, category: 'food',
    name: 'Wagyu Steak Frites', price: 34.00,
    desc: '200g Wagyu sirloin, garlic butter, hand-cut fries & béarnaise.',
    badge: 'Premium',
    emoji: '🥩',
    tags: ['Premium'],
  },
  /* Drinks */
  {
    id: 7, category: 'drink',
    name: 'Cold Brew Espresso', price: 5.50,
    desc: 'Slow-steeped 20-hour cold brew with a double espresso float.',
    badge: 'Fan Fav',
    emoji: '☕',
    tags: ['Caffeine'],
  },
  {
    id: 8, category: 'drink',
    name: 'Tropical Smoothie', price: 7.00,
    desc: 'Mango, pineapple, coconut milk, banana & a hint of ginger.',
    badge: null,
    emoji: '🥭',
    tags: ['Fresh', 'Vegan'],
  },
  {
    id: 9, category: 'drink',
    name: 'Artisan Lemonade', price: 4.75,
    desc: 'Freshly squeezed lemon, lavender syrup & sparkling water.',
    badge: 'New',
    emoji: '🍋',
    tags: ['Refreshing'],
  },
  {
    id: 10, category: 'drink',
    name: 'Matcha Latte', price: 6.00,
    desc: 'Ceremonial-grade matcha with oat milk, lightly sweetened.',
    badge: 'Popular',
    emoji: '🍵',
    tags: ['Healthy'],
  },
  {
    id: 11, category: 'drink',
    name: 'Berry Kombucha', price: 5.25,
    desc: 'Wild-fermented blend of mixed berries and hibiscus.',
    badge: null,
    emoji: '🫐',
    tags: ['Probiotic', 'Vegan'],
  },
  {
    id: 12, category: 'drink',
    name: 'Sparkling Sangria', price: 9.00,
    desc: 'Chilled red wine, brandy, citrus, and seasonal fruits.',
    badge: 'Seasonal',
    emoji: '🍷',
    tags: ['Alcoholic'],
  },
];

/* ─── Badge colour map ─────────────────────────────────────────── */
const BADGE_STYLES = {
  "Chef's Pick": 'bg-[#CE410C] text-white',
  'Popular':     'bg-[#611F11] text-white',
  'Fan Fav':     'bg-[#611F11] text-white',
  'New':         'bg-emerald-600 text-white',
  'Share':       'bg-blue-600 text-white',
  'Premium':     'bg-zinc-800 text-white',
  'Seasonal':    'bg-purple-600 text-white',
};

/* ─── Cart icon ─────────────────────────────────────────────────── */
function CartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

/* ─── Trash icon ─────────────────────────────────────────────────── */
function TrashIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}

/* ─── Search icon ───────────────────────────────────────────────── */
function SearchIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

/* ─── Product Card ──────────────────────────────────────────────── */
function ProductCard({ product, onAdd }) {
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    setAdding(true);
    onAdd(product);
    setTimeout(() => setAdding(false), 600);
  };

  return (
    <div className="group bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-[#CE410C]/30 transition-all duration-200 flex flex-col overflow-hidden">
      {/* Illustrated colour panel */}
      <div className="relative h-36 bg-gradient-to-br from-[#eedfd8] via-[#e5cfc5] to-[#c7a496] flex items-center justify-center overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#CE410C]/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-4 right-0 w-20 h-20 rounded-full bg-[#611F11]/20 blur-2xl pointer-events-none" />
        <span className="relative text-6xl select-none drop-shadow">{product.emoji}</span>

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${BADGE_STYLES[product.badge] ?? 'bg-zinc-700 text-white'}`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="font-bold text-[#1e2022] text-sm leading-tight">{product.name}</h3>
        <p className="text-xs text-zinc-500 leading-relaxed flex-1">{product.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-1">
          {product.tags.map(t => (
            <span key={t} className="text-[10px] font-semibold tracking-wide bg-[#611F11]/8 text-[#611F11] px-2 py-0.5 rounded-full border border-[#611F11]/15">
              {t}
            </span>
          ))}
        </div>

        {/* Price + Add button */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-base font-extrabold text-[#611F11]">
            \${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm
              ${adding
                ? 'bg-emerald-600 text-white scale-95'
                : 'bg-[#CE410C] hover:bg-[#b53709] text-white hover:shadow-[#CE410C]/30 hover:shadow-md'
              }`}
          >
            {adding ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────── */
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);      // [{ product, qty }]
  const [cartOpen, setCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  /* Filtered products */
  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory;
      const q = search.toLowerCase();
      const searchMatch = !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q));
      return catMatch && searchMatch;
    });
  }, [activeCategory, search]);

  /* Cart helpers */
  const addToCart = (product) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { product, qty: 1 }];
    });
    setOrderPlaced(false);
  };

  const removeFromCart = (id) =>
    setCart(prev => prev.filter(i => i.product.id !== id));

  const changeQty = (id, delta) =>
    setCart(prev => {
      return prev
        .map(i => i.product.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0);
    });

  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  /* ─── Render ───────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen w-full flex items-start justify-center p-3 sm:p-6 md:p-10 bg-[#f7ede7]">
      {/* Outer shell — mirrors login page */}
      <div className="w-full max-w-[1240px] bg-[#1e2022] rounded-[36px] p-3 sm:p-5 md:p-6 shadow-[0_25px_60px_-15px_rgba(97,31,17,0.35)] border border-[#2b2e33]">
        <div className="relative w-full rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">

          {/* ── LEFT PANEL: illustrated brand sidebar ── */}
          <div className="relative lg:col-span-3 xl:col-span-3 bg-gradient-to-br from-[#eedfd8] via-[#e5cfc5] to-[#c7a496] flex flex-col p-6 sm:p-8 overflow-hidden">
            {/* Glows */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#CE410C]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-[#611F11]/25 blur-3xl pointer-events-none" />

            {/* Brand */}
            <div className="relative z-10 flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center border border-[#611F11]/10">
                <Image src="/images/logo.png" alt="Platera Logo" width={34} height={34} className="object-contain" priority />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-[#611F11]">Platera</span>
                <span className="block text-xs font-medium text-[#611F11]/70 tracking-wider uppercase">Food & Drinks</span>
              </div>
            </div>

            {/* Illustrated food scene SVG */}
            <div className="relative z-10 flex-1 flex items-center justify-center py-4">
              <svg viewBox="0 0 260 340" className="w-full max-w-[220px] h-auto drop-shadow-xl select-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="tableGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#41150c" />
                    <stop offset="100%" stopColor="#280c07" />
                  </linearGradient>
                  <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f0e8e3" />
                  </linearGradient>
                  <radialGradient id="foodGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#CE410C" />
                    <stop offset="100%" stopColor="#7a2412" />
                  </radialGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#1a0603" floodOpacity="0.3" />
                  </filter>
                </defs>

                {/* Table surface */}
                <ellipse cx="130" cy="230" rx="110" ry="28" fill="url(#tableGrad)" filter="url(#shadow)" />
                <ellipse cx="130" cy="225" rx="110" ry="22" fill="#4a170d" />
                {/* Table rim highlight */}
                <ellipse cx="130" cy="221" rx="106" ry="17" fill="none" stroke="#7a2715" strokeWidth="2" opacity="0.6" />

                {/* Table legs */}
                <line x1="58" y1="245" x2="48" y2="320" stroke="#280c07" strokeWidth="8" strokeLinecap="round" />
                <line x1="202" y1="245" x2="212" y2="320" stroke="#280c07" strokeWidth="8" strokeLinecap="round" />

                {/* Main plate */}
                <ellipse cx="130" cy="195" rx="68" ry="20" fill="#e8ddd5" filter="url(#shadow)" />
                <ellipse cx="130" cy="192" rx="68" ry="18" fill="url(#plateGrad)" />
                <ellipse cx="130" cy="192" rx="52" ry="13" fill="#f8f4f0" />

                {/* Food on plate: colourful pile */}
                <ellipse cx="130" cy="183" rx="42" ry="11" fill="url(#foodGrad)" />
                {/* Pasta loops */}
                <ellipse cx="118" cy="178" rx="12" ry="5" fill="#e05010" opacity="0.85" />
                <ellipse cx="143" cy="176" rx="10" ry="4" fill="#b83d0c" opacity="0.85" />
                <ellipse cx="130" cy="174" rx="14" ry="4" fill="#CE410C" opacity="0.9" />
                {/* Herb garnish */}
                <circle cx="128" cy="170" r="4" fill="#3a7a4a" />
                <circle cx="135" cy="168" r="3" fill="#2d6038" />
                {/* Sauce drizzle */}
                <path d="M 112 182 Q 120 178 130 183 Q 140 188 148 182" stroke="#f8c88a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />

                {/* Wine glass */}
                <g transform="translate(190, 155)">
                  <path d="M 12 70 L 12 50 Q -4 40 -6 20 Q -8 5 12 0 Q 32 5 30 20 Q 28 40 12 50 Z"
                    fill="none" stroke="#c9a66b" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M -6 20 Q -8 5 12 0 Q 32 5 30 20 Z" fill="#c9516030" />
                  <line x1="12" y1="70" x2="2" y2="78" stroke="#c9a66b" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="12" y1="70" x2="22" y2="78" stroke="#c9a66b" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="2" y1="78" x2="22" y2="78" stroke="#c9a66b" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Coffee cup */}
                <g transform="translate(42, 170)">
                  <rect x="0" y="8" width="30" height="26" rx="6" fill="#5834c7" />
                  <path d="M 30 14 Q 38 20 30 27" fill="none" stroke="#5834c7" strokeWidth="4" strokeLinecap="round" />
                  <ellipse cx="15" cy="8" rx="15" ry="4.5" fill="#3b208c" />
                  <path d="M 10 2 Q 7 -4 11 -9" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                  <path d="M 18 0 Q 21 -6 17 -11" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Fork & Knife */}
                <g transform="translate(76, 148)" opacity="0.9">
                  <line x1="0" y1="0" x2="0" y2="55" stroke="#b8a08a" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M -4 0 L -4 18 Q 0 22 4 18 L 4 0" stroke="#b8a08a" strokeWidth="2" fill="none" />
                </g>
                <g transform="translate(90, 148)" opacity="0.9">
                  <line x1="0" y1="0" x2="0" y2="55" stroke="#b8a08a" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="-4" y1="0" x2="-4" y2="22" stroke="#b8a08a" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="4" y1="0" x2="4" y2="22" stroke="#b8a08a" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M -4 22 Q 0 28 4 22" stroke="#b8a08a" strokeWidth="2" fill="none" />
                </g>

                {/* Stars / sparkles */}
                {[[210,80],[38,120],[140,80],[60,70]].map(([x,y], i) => (
                  <g key={i} transform={`translate(${x},${y})`} opacity="0.55">
                    <line x1="0" y1="-5" x2="0" y2="5" stroke="#CE410C" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="-5" y1="0" x2="5" y2="0" stroke="#CE410C" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                ))}
              </svg>
            </div>

            {/* Stats */}
            <div className="relative z-10 grid grid-cols-2 gap-3 mt-4">
              {[
                { label: 'Menu Items', value: `${PRODUCTS.length}` },
                { label: 'Categories', value: '2' },
                { label: 'Avg. Rating', value: '4.9★' },
                { label: 'Delivery', value: '25 min' },
              ].map(s => (
                <div key={s.label} className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-[#611F11]/10">
                  <div className="text-lg font-extrabold text-[#611F11]">{s.value}</div>
                  <div className="text-[10px] font-medium text-[#611F11]/70 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-xs font-medium text-[#611F11]/80 pt-4 mt-4 border-t border-[#611F11]/15">
              <span>Fresh daily</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#CE410C] animate-pulse" />
                Kitchen Open
              </span>
            </div>
          </div>

          {/* ── RIGHT PANEL: product catalogue ── */}
          <div className="lg:col-span-9 xl:col-span-9 bg-[#ffffff] flex flex-col overflow-hidden">

            {/* Top bar */}
            <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-zinc-100">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Title */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#611F11]">Our Menu</h1>
                  <p className="text-sm text-zinc-400 mt-0.5">Hand-crafted flavours, made fresh every day</p>
                </div>

                {/* Cart button */}
                <button
                  onClick={() => setCartOpen(o => !o)}
                  className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#611F11]/5 hover:bg-[#611F11]/10 border border-[#611F11]/15 text-[#611F11] font-semibold text-sm transition-all"
                >
                  <CartIcon />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#CE410C] text-white text-[10px] font-bold flex items-center justify-center shadow">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Search + Category tabs */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative flex-1 min-w-[180px] max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search menu…"
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#CE410C] focus:ring-2 focus:ring-[#CE410C]/20 transition-all"
                  />
                </div>

                {/* Category pills */}
                <div className="flex items-center bg-zinc-100 p-1 rounded-full text-xs font-semibold gap-0.5">
                  {[
                    { key: 'all',   label: '🍽 All' },
                    { key: 'food',  label: '🍔 Food' },
                    { key: 'drink', label: '🥤 Drinks' },
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveCategory(tab.key)}
                      className={`px-4 py-1.5 rounded-full transition-all ${
                        activeCategory === tab.key
                          ? 'bg-white text-[#611F11] shadow-sm font-bold'
                          : 'text-zinc-500 hover:text-zinc-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content: catalogue + optional cart sidebar */}
            <div className="flex flex-1 overflow-hidden relative">

              {/* Product grid */}
              <div className={`flex-1 overflow-y-auto p-6 sm:p-8 transition-all duration-300 ${cartOpen ? 'pr-3' : ''}`}>
                {filtered.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-zinc-400">
                    <span className="text-5xl mb-4">🍽</span>
                    <p className="font-semibold text-zinc-500">No items match your search.</p>
                    <button onClick={() => { setSearch(''); setActiveCategory('all'); }}
                      className="mt-4 text-xs text-[#CE410C] font-bold hover:underline">
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filtered.map(p => (
                      <ProductCard key={p.id} product={p} onAdd={addToCart} />
                    ))}
                  </div>
                )}
              </div>

              {/* Cart sidebar (slide-in) */}
              {cartOpen && (
                <div className="w-72 shrink-0 border-l border-zinc-100 bg-zinc-50 flex flex-col">
                  <div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between">
                    <h2 className="font-bold text-[#611F11] text-sm">Your Order</h2>
                    <button onClick={() => setCartOpen(false)} className="text-zinc-400 hover:text-zinc-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Order placed banner */}
                  {orderPlaced && (
                    <div className="mx-4 mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Order placed! Estimated delivery: 25 min.
                    </div>
                  )}

                  <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                    {cart.length === 0 && !orderPlaced && (
                      <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                        <span className="text-4xl mb-3">🛒</span>
                        <p className="text-xs text-center">Your cart is empty.<br />Add items from the menu!</p>
                      </div>
                    )}
                    {cart.map(item => (
                      <div key={item.product.id} className="bg-white rounded-xl p-3 border border-zinc-200 shadow-sm flex items-start gap-3">
                        <span className="text-2xl">{item.product.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-zinc-800 leading-tight truncate">{item.product.name}</p>
                          <p className="text-xs text-[#CE410C] font-semibold mt-0.5">\${(item.product.price * item.qty).toFixed(2)}</p>
                          {/* Qty stepper */}
                          <div className="flex items-center gap-2 mt-2">
                            <button onClick={() => changeQty(item.product.id, -1)}
                              className="w-5 h-5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs flex items-center justify-center transition-colors">
                              −
                            </button>
                            <span className="text-xs font-bold text-zinc-700 w-4 text-center">{item.qty}</span>
                            <button onClick={() => changeQty(item.product.id, 1)}
                              className="w-5 h-5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs flex items-center justify-center transition-colors">
                              +
                            </button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.product.id)}
                          className="text-zinc-300 hover:text-red-500 transition-colors mt-0.5 shrink-0">
                          <TrashIcon />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Summary footer */}
                  <div className="px-4 py-4 border-t border-zinc-100 space-y-3">
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>Subtotal</span>
                      <span className="font-semibold text-zinc-700">\${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>Delivery fee</span>
                      <span className="font-semibold text-emerald-600">Free</span>
                    </div>
                    <div className="flex justify-between text-sm font-extrabold text-[#611F11] border-t border-zinc-100 pt-2">
                      <span>Total</span>
                      <span>\${cartTotal.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={cart.length === 0}
                      className="w-full py-3 rounded-full bg-[#CE410C] hover:bg-[#b53709] disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-[#CE410C]/25 hover:shadow-lg hover:shadow-[#CE410C]/35 transition-all active:scale-[0.98]"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
