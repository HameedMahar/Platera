'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, SearchCodeIcon } from 'lucide-react';

/* ─── Static product catalogue ─────────────────────────────────── */
const PRODUCTS = [
  /* Foods */
  {
    id: 1,
    category: 'food',
    name: 'Grilled Salmon Bowl',
    price: 18.99,
    desc: 'Tender Atlantic salmon over jasmine rice with seasonal greens.',
    image: '/images/beef steak.png',
    tags: ['Protein', 'Healthy'],
  },
  {
    id: 2,
    category: 'food',
    name: 'Truffle Mushroom Pasta',
    price: 16.5,
    desc: 'Hand-rolled pappardelle with wild mushrooms & black truffle oil.',
    image: '/images/beef steak.png',
    tags: ['Vegetarian'],
  },
  {
    id: 3,
    category: 'food',
    name: 'Smash Burger Duo',
    price: 14.99,
    desc: 'Double smash patties, cheddar, caramelised onions, house sauce.',
    image: '/images/beef steak.png',
    tags: ['Bestseller'],
  },
  {
    id: 4,
    category: 'food',
    name: 'Mezze Platter',
    price: 12.0,
    desc: 'Hummus, baba ganoush, falafel, pita & pickled veg for two.',
    image: '/images/beef steak.png',
    tags: ['Vegan', 'Sharing'],
  },
  {
    id: 5,
    category: 'food',
    name: 'Avocado Toast Deluxe',
    price: 10.5,
    desc: 'Sourdough, smashed avocado, poached egg, chilli flakes & micro herbs.',
    image: '/images/beef steak.png',
    tags: ['Brunch', 'Healthy'],
  },
  {
    id: 6,
    category: 'food',
    name: 'Wagyu Steak Frites',
    price: 34.0,
    desc: '200g Wagyu sirloin, garlic butter, hand-cut fries & béarnaise.',
    image: '/images/beef steak.png',
    tags: ['Premium'],
  },
  /* Drinks */
  {
    id: 7,
    category: 'drink',
    name: 'Cold Brew Espresso',
    price: 5.5,
    desc: 'Slow-steeped 20-hour cold brew with a double espresso float.',
    image: '/images/beef steak.png',
    tags: ['Caffeine'],
  },
  {
    id: 8,
    category: 'drink',
    name: 'Tropical Smoothie',
    price: 7.0,
    desc: 'Mango, pineapple, coconut milk, banana & a hint of ginger.',
    image: '/images/beef steak.png',
    tags: ['Fresh', 'Vegan'],
  },
  {
    id: 9,
    category: 'drink',
    name: 'Artisan Lemonade',
    price: 4.75,
    desc: 'Freshly squeezed lemon, lavender syrup & sparkling water.',
    image: '/images/beef steak.png',
    tags: ['Refreshing'],
  },
  {
    id: 10,
    category: 'drink',
    name: 'Matcha Latte',
    price: 6.0,
    desc: 'Ceremonial-grade matcha with oat milk, lightly sweetened.',
    image: '/images/beef steak.png',
    tags: ['Healthy'],
  },
  {
    id: 11,
    category: 'drink',
    name: 'Berry Kombucha',
    price: 5.25,
    desc: 'Wild-fermented blend of mixed berries and hibiscus.',
    image: '/images/beef steak.png',
    tags: ['Probiotic', 'Vegan'],
  },
  {
    id: 12,
    category: 'drink',
    name: 'Sparkling Sangria',
    price: 9.0,
    desc: 'Chilled red wine, brandy, citrus, and seasonal fruits.',
    image: '/images/beef steak.png',
    tags: ['Alcoholic'],
  },
];

/* ─── Badge colour map ─────────────────────────────────────────── */
const BADGE_STYLES = {
  "Chef's Pick": 'bg-[#CE410C] text-white',
  Popular: 'bg-[#611F11] text-white',
  'Fan Fav': 'bg-[#611F11] text-white',
  New: 'bg-emerald-600 text-white',
  Share: 'bg-blue-600 text-white',
  Premium: 'bg-zinc-800 text-white',
  Seasonal: 'bg-purple-600 text-white',
};

/* ─── Cart icon ─────────────────────────────────────────────────── */
function CartIcon() {
  return (
    <svg
      className='w-5 h-5'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
      />
    </svg>
  );
}

/* ─── Trash icon ─────────────────────────────────────────────────── */
function TrashIcon() {
  return (
    <svg
      className='w-4 h-4'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
      />
    </svg>
  );
}

/* ─── Search icon ───────────────────────────────────────────────── */
function SearchIcon() {
  return (
    <svg
      className='w-4 h-4'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
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
    <div className='group bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-[#CE410C]/30 transition-all duration-200 flex flex-col overflow-hidden max-w-90'>
      <div className='relative text-6xl select-none drop-shadow'>
        <Image src={product.image} alt='product' width={500} height={500} />
      </div>

      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${BADGE_STYLES[product.badge] ?? 'bg-zinc-700 text-white'}`}
        >
          {product.badge}
        </span>
      )}

      {/* Content */}
      <div className='flex flex-col flex-1 p-4 gap-2'>
        <h3 className='font-bold text-[#1e2022] text-sm leading-tight'>
          {product.name}
        </h3>
        <p className='text-xs text-zinc-500 leading-relaxed flex-1'>
          {product.desc}
        </p>

        {/* Tags */}
        <div className='flex flex-wrap gap-1 mt-1'>
          {product.tags.map((t) => (
            <span
              key={t}
              className='text-[10px] font-semibold tracking-wide bg-[#611F11]/8 text-[#611F11] px-2 py-0.5 rounded-full border border-[#611F11]/15'
            >
              {t}
            </span>
          ))}
        </div>

        {/* Price + Add button */}
        <div className='flex items-center justify-between mt-3'>
          <span className='text-base font-extrabold text-[#611F11]'>
            \${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm
              ${
                adding
                  ? 'bg-emerald-600 text-white scale-95'
                  : 'bg-[#CE410C] hover:bg-[#b53709] text-white hover:shadow-[#CE410C]/30 hover:shadow-md'
              }`}
          >
            {adding ? (
              <>
                <svg
                  className='w-3.5 h-3.5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={3}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg
                  className='w-3.5 h-3.5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2.5}
                    d='M12 4v16m8-8H4'
                  />
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
  const [cart, setCart] = useState([]); // [{ product, qty }]
  const [cartOpen, setCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  /* Filtered products */
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const catMatch =
        activeCategory === 'all' || p.category === activeCategory;
      const q = search.toLowerCase();
      const searchMatch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return catMatch && searchMatch;
    });
  }, [activeCategory, search]);

  /* Cart helpers */
  const addToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
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
    setCart((prev) => prev.filter((i) => i.product.id !== id));

  const changeQty = (id, delta) =>
    setCart((prev) => {
      return prev
        .map((i) => (i.product.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0);
    });

  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  /* ─── Render ───────────────────────────────────────────────────── */
  return (
    <div className='relative w-full  overflow-hidden grid grid-cols-1 lg:grid-cols-8 place-items-center'>
      {/* ── RIGHT PANEL: product catalogue ── */}
      <div className='lg:col-span-9 xl:col-span-9 bg-[#ffffff] flex flex-col overflow-hidden'>
        {/* Top bar */}
        <div className='px-6 sm:px-8 pt-7 pb-5 border-b border-zinc-100 relative mt-8'>
          <div>
            <h1 className='text-2xl text-center sm:text-5xl font-extrabold tracking-tight text-[#611F11]'>
              Our Menu
            </h1>
            <p className='text-sm text-zinc-400 mt-0.5 text-center'>
              Hand-crafted flavours, made fresh every day
            </p>
          </div>
          <div className='flex  gap-4 absolute right-10 top-10'>
            {/* Title */}

            {/* Cart button */}
            <button
              onClick={() => setCartOpen((o) => !o)}
              className='relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#611F11]/5 hover:bg-[#611F11]/10 border border-[#611F11]/15 text-[#611F11] font-semibold text-sm transition-all'
            >
              <CartIcon />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#CE410C] text-white text-[10px] font-bold flex items-center justify-center shadow'>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Search + Category tabs */}
          <div className='mt-5 flex flex-col flex-wrap items-center gap-3'>
            {/* Search */}
            <div className='relative flex-1 min-w-[180px] w-lg'>
              <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400'>
                <Search />
              </div>
              <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search menu…'
                className='w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-full text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#CE410C] focus:ring-2 focus:ring-[#CE410C]/20 transition-all'
              />
            </div>

            {/* Category pills */}
            <div className='flex items-center bg-zinc-100 p-2 rounded-full text-xs font-semibold gap-3 mt-3'>
              {[
                { key: 'all', label: 'All' },
                { key: 'food', label: 'Food' },
                { key: 'drink', label: 'Drinks' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-7 py-3 text-lg rounded-full transition-all ${
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
        <div className='flex flex-1 overflow-hidden relative'>
          {/* Product grid */}
          <div
            className={`flex-1 overflow-y-auto p-6 sm:p-8 transition-all duration-300 ${cartOpen ? 'pr-3' : ''}`}
          >
            {filtered.length === 0 ? (
              <div className='flex flex-col items-center justify-center py-20 text-zinc-400'>
                <span className='text-5xl mb-4'>🍽</span>
                <p className='font-semibold text-zinc-500'>
                  No items match your search.
                </p>
                <button
                  onClick={() => {
                    setSearch('');
                    setActiveCategory('all');
                  }}
                  className='mt-4 text-xs text-[#CE410C] font-bold hover:underline'
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 place-items-center'>
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} onAdd={addToCart} />
                ))}
              </div>
            )}
          </div>

          {/* Cart sidebar (slide-in) */}
          {cartOpen && (
            <div className='w-72 shrink-0 border-l border-zinc-100 bg-zinc-50 flex flex-col fixed top-0 right-4 min-w-100 h-full'>
              <div className='px-5 py-4 border-b border-zinc-100 flex items-center justify-between'>
                <h2 className='font-bold text-[#611F11] text-sm'>Your Order</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className='text-zinc-400 hover:text-zinc-700 transition-colors'
                >
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              {/* Order placed banner */}
              {orderPlaced && (
                <div className='mx-4 mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-emerald-600 shrink-0'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Order placed! Estimated delivery: 25 min.
                </div>
              )}

              <div className='flex-1 overflow-y-auto px-4 py-3 space-y-3'>
                {cart.length === 0 && !orderPlaced && (
                  <div className='flex flex-col items-center justify-center py-12 text-zinc-400'>
                    <span className='text-4xl mb-3'>🛒</span>
                    <p className='text-xs text-center'>
                      Your cart is empty.
                      <br />
                      Add items from the menu!
                    </p>
                  </div>
                )}
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className='bg-white rounded-xl p-3 border border-zinc-200 shadow-sm flex items-start gap-3'
                  >
                    <span className='text-2xl'>{item.product.image}</span>
                    <div className='flex-1 min-w-0'>
                      <p className='text-xs font-bold text-zinc-800 leading-tight truncate'>
                        {item.product.name}
                      </p>
                      <p className='text-xs text-[#CE410C] font-semibold mt-0.5'>
                        \${(item.product.price * item.qty).toFixed(2)}
                      </p>
                      {/* Qty stepper */}
                      <div className='flex items-center gap-2 mt-2'>
                        <button
                          onClick={() => changeQty(item.product.id, -1)}
                          className='w-5 h-5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs flex items-center justify-center transition-colors'
                        >
                          −
                        </button>
                        <span className='text-xs font-bold text-zinc-700 w-4 text-center'>
                          {item.qty}
                        </span>
                        <button
                          onClick={() => changeQty(item.product.id, 1)}
                          className='w-5 h-5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs flex items-center justify-center transition-colors'
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className='text-zinc-300 hover:text-red-500 transition-colors mt-0.5 shrink-0'
                    >
                      <TrashIcon />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary footer */}
              <div className='px-4 py-4 border-t border-zinc-100 space-y-3'>
                <div className='flex justify-between text-xs text-zinc-500'>
                  <span>Subtotal</span>
                  <span className='font-semibold text-zinc-700'>
                    \${cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className='flex justify-between text-xs text-zinc-500'>
                  <span>Delivery fee</span>
                  <span className='font-semibold text-emerald-600'>Free</span>
                </div>
                <div className='flex justify-between text-sm font-extrabold text-[#611F11] border-t border-zinc-100 pt-2'>
                  <span>Total</span>
                  <span>\${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  disabled={cart.length === 0}
                  className='w-full py-3 rounded-full bg-[#CE410C] hover:bg-[#b53709] disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-[#CE410C]/25 hover:shadow-lg hover:shadow-[#CE410C]/35 transition-all active:scale-[0.98]'
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
