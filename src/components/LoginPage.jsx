'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    // Simulate client-side validation and response without backend
    setTimeout(() => {
      setIsSubmitting(false);
      if (!email || !password || (!isLogin && !name)) {
        setStatusMessage({
          type: 'error',
          text: 'Please fill in all required fields.',
        });
        return;
      }

      setStatusMessage({
        type: 'success',
        text: isLogin
          ? 'Welcome back to Platera! Authentication successful.'
          : 'Account created successfully! Welcome to Platera.',
      });
    }, 700);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#f7ede7]">
      {/* Outer Device / Canvas Shell matching reference frame */}
      <div className="w-full max-w-[1240px] bg-[#1e2022] rounded-[36px] p-3 sm:p-5 md:p-6 shadow-[0_25px_60px_-15px_rgba(97,31,17,0.35)] border border-[#2b2e33]">
        {/* Main Content Area */}
        <div className="relative w-full rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
          
          {/* LEFT SIDE: 3D-Style Illustrated Workspace Scene */}
          <div className="relative lg:col-span-6 xl:col-span-7 bg-gradient-to-br from-[#eedfd8] via-[#e5cfc5] to-[#c7a496] flex flex-col justify-between p-6 sm:p-10 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#CE410C]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-[#611F11]/25 blur-3xl pointer-events-none" />

            {/* Top Brand Tag */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center border border-[#611F11]/10">
                <Image
                  src="/images/logo.png"
                  alt="Platera Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-[#611F11]">
                  Platera
                </span>
                <span className="block text-xs font-medium text-[#611F11]/70 tracking-wider uppercase">
                  Workspace Portal
                </span>
              </div>
            </div>

            {/* Rich 3D Workspace Scene Illustration matching reference */}
            <div className="relative z-10 my-auto py-6 flex items-center justify-center">
              <svg
                viewBox="0 0 620 480"
                className="w-full max-w-[560px] h-auto drop-shadow-2xl select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Floor and Wall Gradients */}
                  <linearGradient id="wallGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ede1da" />
                    <stop offset="100%" stopColor="#dfcac0" />
                  </linearGradient>
                  <linearGradient id="floorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#611F11" />
                    <stop offset="100%" stopColor="#3d120a" />
                  </linearGradient>
                  
                  {/* Desk Gradients */}
                  <linearGradient id="deskTop" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#41150c" />
                    <stop offset="100%" stopColor="#280c07" />
                  </linearGradient>
                  <linearGradient id="deskRim" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7a2715" />
                    <stop offset="100%" stopColor="#4a170d" />
                  </linearGradient>

                  {/* Character Clothing */}
                  <linearGradient id="sweaterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CE410C" />
                    <stop offset="100%" stopColor="#982e07" />
                  </linearGradient>
                  <linearGradient id="pantsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2b3a55" />
                    <stop offset="100%" stopColor="#1a2538" />
                  </linearGradient>
                  <linearGradient id="shoeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5b48d9" />
                    <stop offset="100%" stopColor="#3c2eb0" />
                  </linearGradient>

                  {/* Planter and Plant */}
                  <linearGradient id="plantLight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#387053" />
                    <stop offset="100%" stopColor="#1c3e2d" />
                  </linearGradient>
                  <linearGradient id="plantDark" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2c5c43" />
                    <stop offset="100%" stopColor="#152f22" />
                  </linearGradient>

                  {/* Soft Drop Shadow Filter */}
                  <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#1a0603" floodOpacity="0.3" />
                  </filter>
                  <filter id="gentleShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.2" />
                  </filter>
                </defs>

                {/* Back Wall */}
                <rect x="0" y="0" width="620" height="310" fill="url(#wallGradient)" />

                {/* Perspective Floor */}
                <polygon points="0,310 620,310 620,480 0,480" fill="url(#floorGradient)" />
                {/* Subtle Floor Accent Line */}
                <line x1="0" y1="310" x2="620" y2="310" stroke="#87301c" strokeWidth="2.5" opacity="0.6" />

                {/* Wall Clock */}
                <g transform="translate(370, 75)" filter="url(#gentleShadow)">
                  <circle cx="0" cy="0" r="24" fill="#222" />
                  <circle cx="0" cy="0" r="20" fill="#ffffff" />
                  <circle cx="0" cy="0" r="2.5" fill="#222" />
                  {/* Clock hands showing approx 1:50 */}
                  <line x1="0" y1="0" x2="6" y2="-12" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="0" y1="0" x2="-10" y2="-4" stroke="#CE410C" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Left Cabinet / Drawer with Succulent */}
                <g transform="translate(10, 160)" filter="url(#gentleShadow)">
                  {/* Cabinet Body */}
                  <rect x="0" y="0" width="60" height="150" rx="8" fill="#ffffff" />
                  <rect x="5" y="10" width="50" height="38" rx="4" fill="#f8f9fa" stroke="#e5e7eb" strokeWidth="1" />
                  <rect x="24" y="27" width="12" height="4" rx="2" fill="#d1d5db" />
                  
                  <rect x="5" y="55" width="50" height="38" rx="4" fill="#f8f9fa" stroke="#e5e7eb" strokeWidth="1" />
                  <rect x="24" y="72" width="12" height="4" rx="2" fill="#d1d5db" />

                  <rect x="5" y="100" width="50" height="38" rx="4" fill="#f8f9fa" stroke="#e5e7eb" strokeWidth="1" />
                  <rect x="24" y="117" width="12" height="4" rx="2" fill="#d1d5db" />

                  {/* Mini Potted Plant on Cabinet */}
                  <g transform="translate(20, -25)">
                    <rect x="5" y="12" width="16" height="14" rx="2" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                    <ellipse cx="13" cy="12" rx="7" ry="2" fill="#5c3826" />
                    {/* Cactus */}
                    <path d="M 13 12 Q 13 0 13 -3 Q 17 -3 17 4" stroke="#487a5b" strokeWidth="5" strokeLinecap="round" fill="none" />
                    <path d="M 13 6 Q 8 6 9 1" stroke="#487a5b" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </g>
                </g>

                {/* Cast Shadows on Floor */}
                <ellipse cx="230" cy="405" rx="140" ry="22" fill="#150502" opacity="0.65" filter="url(#softShadow)" />
                <ellipse cx="455" cy="425" rx="42" ry="14" fill="#150502" opacity="0.6" filter="url(#softShadow)" />

                {/* Modern Workspace Desk */}
                <g filter="url(#softShadow)">
                  {/* Desk Legs (White modern minimal legs) */}
                  <line x1="88" y1="260" x2="78" y2="395" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
                  <line x1="152" y1="260" x2="148" y2="360" stroke="#e0e0e0" strokeWidth="6" strokeLinecap="round" />
                  <line x1="318" y1="260" x2="332" y2="360" stroke="#e0e0e0" strokeWidth="6" strokeLinecap="round" />
                  <line x1="268" y1="260" x2="280" y2="395" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />

                  {/* Desk Surface (Deep polished terracotta / dark brown) */}
                  <polygon points="62,250 338,250 326,276 50,276" fill="url(#deskTop)" />
                  <polygon points="50,276 326,276 324,286 48,286" fill="url(#deskRim)" />

                  {/* Objects on Desk */}
                  {/* Paper notepad */}
                  <polygon points="58,254 94,254 90,266 54,266" fill="#fdfdfd" opacity="0.9" />
                  <line x1="88" y1="255" x2="108" y2="259" stroke="#CE410C" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Cup with hot steam */}
                  <g transform="translate(300, 246)">
                    <rect x="0" y="4" width="18" height="20" rx="4" fill="#5834c7" />
                    <path d="M 18 8 Q 24 13 18 19" fill="none" stroke="#5834c7" strokeWidth="3" strokeLinecap="round" />
                    <ellipse cx="9" cy="4" rx="9" ry="3" fill="#3b208c" />
                    {/* Steam */}
                    <path d="M 6 -2 Q 4 -8 8 -12" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
                    <path d="M 12 -4 Q 14 -10 10 -15" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  </g>

                  {/* Smartphone */}
                  <rect x="254" y="258" width="28" height="15" rx="3" fill="#18181b" />
                  <rect x="256" y="260" width="24" height="11" rx="2" fill="#27272a" />

                  {/* Small smart speaker */}
                  <rect x="238" y="260" width="10" height="12" rx="3" fill="#2d2d30" />
                </g>

                {/* Office Chair Base behind character */}
                <g transform="translate(235, 300)">
                  <path d="M -25 -50 Q -30 -10 0 0 Q 30 -10 25 -50 Z" fill="#9ca3af" />
                  <line x1="0" y1="0" x2="0" y2="40" stroke="#4b5563" strokeWidth="9" strokeLinecap="round" />
                  {/* Wheels */}
                  <line x1="0" y1="36" x2="-35" y2="46" stroke="#374151" strokeWidth="5" strokeLinecap="round" />
                  <line x1="0" y1="36" x2="35" y2="46" stroke="#374151" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="-36" cy="47" r="4" fill="#111827" />
                  <circle cx="36" cy="47" r="4" fill="#111827" />
                </g>

                {/* Stylized 3D Character sitting and working */}
                <g id="character">
                  {/* Legs and Blue Pants */}
                  <g>
                    {/* Left Leg */}
                    <path d="M 218 310 Q 212 360 196 385" stroke="url(#pantsGradient)" strokeWidth="26" strokeLinecap="round" fill="none" />
                    {/* Right Leg */}
                    <path d="M 252 310 Q 260 360 274 390" stroke="url(#pantsGradient)" strokeWidth="26" strokeLinecap="round" fill="none" />

                    {/* Left Shoe */}
                    <g transform="translate(182, 386)">
                      <rect x="0" y="0" width="30" height="18" rx="8" fill="url(#shoeGradient)" />
                      <rect x="-2" y="14" width="34" height="7" rx="3" fill="#ffffff" />
                      {/* Laces */}
                      <line x1="6" y1="6" x2="16" y2="6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                      <line x1="7" y1="9" x2="15" y2="9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    </g>

                    {/* Right Shoe */}
                    <g transform="translate(262, 390)">
                      <rect x="0" y="0" width="30" height="18" rx="8" fill="url(#shoeGradient)" />
                      <rect x="-2" y="14" width="34" height="7" rx="3" fill="#ffffff" />
                      {/* Laces */}
                      <line x1="8" y1="6" x2="18" y2="6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                      <line x1="9" y1="9" x2="17" y2="9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  </g>

                  {/* Character Body / Orange Terracotta Sweater */}
                  <g transform="translate(230, 230)">
                    {/* Torso */}
                    <path d="M -32 20 Q -36 -45 0 -45 Q 36 -45 32 20 Z" fill="url(#sweaterGradient)" />
                    {/* Neck / Collar */}
                    <path d="M -12 -45 Q 0 -38 12 -45" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
                    
                    {/* Arms reaching to laptop */}
                    {/* Left arm */}
                    <path d="M -30 -30 Q -65 -10 -40 2" stroke="url(#sweaterGradient)" strokeWidth="18" strokeLinecap="round" fill="none" />
                    {/* Left hand */}
                    <ellipse cx="-38" cy="4" rx="7" ry="5" fill="#e8b897" />

                    {/* Right arm */}
                    <path d="M 28 -30 Q -10 -15 -18 4" stroke="url(#sweaterGradient)" strokeWidth="18" strokeLinecap="round" fill="none" />
                    {/* Right hand */}
                    <ellipse cx="-16" cy="4" rx="7" ry="5" fill="#e8b897" />
                  </g>

                  {/* Character Head */}
                  <g transform="translate(230, 160)">
                    {/* Ears */}
                    <ellipse cx="-24" cy="5" rx="5" ry="7" fill="#e8b897" />
                    <ellipse cx="24" cy="5" rx="5" ry="7" fill="#e8b897" />
                    
                    {/* Head Base */}
                    <ellipse cx="0" cy="0" rx="23" ry="26" fill="#f3c9aa" />

                    {/* Stylized Hair */}
                    <path d="M -23 -10 Q -24 -32 0 -32 Q 24 -32 23 -10 Q 18 -18 0 -18 Q -18 -18 -23 -10 Z" fill="#4a2c1b" />
                    
                    {/* Glasses */}
                    <rect x="-19" y="-4" width="16" height="11" rx="3" fill="none" stroke="#262626" strokeWidth="2.5" />
                    <rect x="3" y="-4" width="16" height="11" rx="3" fill="none" stroke="#262626" strokeWidth="2.5" />
                    <line x1="-3" y1="1" x2="3" y2="1" stroke="#262626" strokeWidth="2.5" />

                    {/* Eyes */}
                    <circle cx="-11" cy="2" r="2.5" fill="#1c1917" />
                    <circle cx="11" cy="2" r="2.5" fill="#1c1917" />

                    {/* Nose */}
                    <path d="M 0 4 Q 2 8 0 10" stroke="#d59b75" strokeWidth="2" fill="none" strokeLinecap="round" />

                    {/* Beard and Smile */}
                    <path d="M -16 10 Q -16 28 0 28 Q 16 28 16 10 Q 10 16 0 16 Q -10 16 -16 10 Z" fill="#4a2c1b" />
                    <path d="M -6 14 Q 0 19 6 14" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </g>

                  {/* Laptop on desk facing character */}
                  <g transform="translate(130, 218)">
                    {/* Laptop Screen Lid */}
                    <polygon points="10,5 110,12 115,70 12,65" fill="#9ca3af" />
                    {/* Screen Bezel & Display */}
                    <polygon points="13,8 107,15 112,67 15,62" fill="#18181b" />
                    <polygon points="16,11 104,17 109,64 18,59" fill="#2d3748" />
                    {/* Glowing Platera Monogram / Code lines on laptop display */}
                    <circle cx="62" cy="38" r="10" fill="#CE410C" opacity="0.9" />
                    <text x="62" y="42" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">P</text>
                    {/* Laptop Base */}
                    <polygon points="0,64 125,69 110,76 -10,72" fill="#cbd5e1" />
                  </g>
                </g>

                {/* Large Indoor Potted Plant (Sansevieria / Snake Plant) */}
                <g transform="translate(425, 230)">
                  {/* Leaves */}
                  <path d="M 30 115 Q 15 20 22 -30 Q 30 20 30 115 Z" fill="url(#plantLight)" />
                  <path d="M 24 -30 Q 22 20 26 115" stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.7" />

                  <path d="M 12 115 Q -10 40 4 5 Q 12 50 16 115 Z" fill="url(#plantDark)" />
                  <path d="M 4 5 Q 10 50 14 115" stroke="#fef08a" strokeWidth="1.2" fill="none" opacity="0.6" />

                  <path d="M 45 115 Q 65 30 52 -15 Q 45 35 40 115 Z" fill="url(#plantLight)" />
                  <path d="M 52 -15 Q 46 35 42 115" stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.7" />

                  <path d="M 35 115 Q 40 60 38 15 Q 32 60 30 115 Z" fill="url(#plantDark)" />

                  {/* Modern Faceted Geometric Planter Pot */}
                  <g transform="translate(8, 105)" filter="url(#gentleShadow)">
                    <polygon points="12,0 38,0 48,15 42,65 8,65 2,15" fill="#f8fafc" />
                    {/* Facet Shading */}
                    <polygon points="12,0 25,0 25,65 8,65 2,15" fill="#e2e8f0" />
                    <polygon points="25,0 38,0 48,15 42,65 25,65" fill="#ffffff" />
                    {/* Soil */}
                    <ellipse cx="25" cy="2" rx="14" ry="4" fill="#3b2219" />
                  </g>
                </g>
              </svg>
            </div>

            {/* Bottom Slogan / Trust Notice */}
            <div className="relative z-10 flex items-center justify-between text-xs font-medium text-[#611F11]/80 pt-4 border-t border-[#611F11]/15">
              <span>Secure Cloud Experience</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#CE410C] animate-pulse" />
                Live Systems Online
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Crisp White Card for Authentication */}
          {/* Note: The white background is preserved exactly as requested (#ffffff) */}
          <div className="lg:col-span-6 xl:col-span-5 bg-[#ffffff] p-8 sm:p-12 md:p-14 flex flex-col justify-between">
            <div>
              {/* Brand Header inside White Card */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#611F11]/5 flex items-center justify-center p-1 border border-[#611F11]/10">
                    <Image
                      src="/images/logo.png"
                      alt="Platera Logo"
                      width={26}
                      height={26}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-[#611F11]">
                    Platera
                  </span>
                </div>

                {/* Mode Pill Toggle (Log In / Create Account) */}
                <div className="flex items-center bg-zinc-100 p-1 rounded-full text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(true);
                      setStatusMessage(null);
                    }}
                    className={`px-3 py-1.5 rounded-full transition-all ${
                      isLogin
                        ? 'bg-[#ffffff] text-[#611F11] shadow-sm font-bold'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(false);
                      setStatusMessage(null);
                    }}
                    className={`px-3 py-1.5 rounded-full transition-all ${
                      !isLogin
                        ? 'bg-[#ffffff] text-[#611F11] shadow-sm font-bold'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>

              {/* Form Title & Subtitle */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#611F11]">
                  {isLogin ? 'Welcome back' : 'Create account'}
                </h1>
                <p className="text-sm text-zinc-500 mt-2">
                  {isLogin
                    ? 'Enter your credentials to access your Platera dashboard.'
                    : 'Get started with your free Platera developer account.'}
                </p>
              </div>

              {/* Status Alert Banner */}
              {statusMessage && (
                <div
                  className={`mb-6 p-3.5 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-all ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <svg className="w-5 h-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Authentication Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name field (in Register mode) */}
                {!isLogin && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 bg-[#ffffff] border border-zinc-200 rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#CE410C] focus:ring-2 focus:ring-[#CE410C]/20 transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@platera.com"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#ffffff] border border-zinc-200 rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#CE410C] focus:ring-2 focus:ring-[#CE410C]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Password Input with Visibility Toggle */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600">
                      Password
                    </label>
                    {isLogin && (
                      <a
                        href="#forgot-password"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Password reset link sent to your registered email.');
                        }}
                        className="text-xs font-medium text-[#CE410C] hover:underline"
                      >
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-11 py-3 bg-[#ffffff] border border-zinc-200 rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#CE410C] focus:ring-2 focus:ring-[#CE410C]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-zinc-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded text-[#CE410C] focus:ring-[#CE410C] border-zinc-300 accent-[#CE410C]"
                    />
                    <span>Remember me on this device</span>
                  </label>
                </div>

                {/* Primary Action Button (#CE410C) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#CE410C] hover:bg-[#b53709] active:scale-[0.99] text-[#ffffff] font-semibold text-sm shadow-md shadow-[#CE410C]/25 hover:shadow-lg hover:shadow-[#CE410C]/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#ffffff]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>{isLogin ? 'Log in' : 'Create account'}</span>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-7">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-200" />
                </div>
                <div className="relative flex justify-center text-xs text-zinc-400">
                  <span className="bg-[#ffffff] px-3 font-medium">
                    {isLogin ? 'or sign in with' : 'or sign up with'}
                  </span>
                </div>
              </div>

              {/* Social Login Options (matching reference icons) */}
              <div className="flex items-center justify-center gap-4">
                {/* Google */}
                <button
                  type="button"
                  title="Continue with Google"
                  onClick={() => alert('Google authentication connected')}
                  className="w-12 h-12 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </button>

                {/* Microsoft */}
                <button
                  type="button"
                  title="Continue with Microsoft"
                  onClick={() => alert('Microsoft authentication connected')}
                  className="w-12 h-12 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                    <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
                    <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
                    <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
                  </svg>
                </button>

                {/* GitHub */}
                <button
                  type="button"
                  title="Continue with GitHub"
                  onClick={() => alert('GitHub authentication connected')}
                  className="w-12 h-12 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <svg className="w-5 h-5 fill-zinc-800" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </button>
              </div>

              {/* Legal Disclaimer */}
              <p className="mt-8 text-center text-xs text-zinc-400 leading-relaxed">
                By creating an account you agree to Platera&apos;s{' '}
                <a href="#terms" className="font-semibold text-[#611F11] hover:text-[#CE410C] underline decoration-[#611F11]/30 underline-offset-2 transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" className="font-semibold text-[#611F11] hover:text-[#CE410C] underline decoration-[#611F11]/30 underline-offset-2 transition-colors">
                  Privacy Policy
                </a>.
              </p>
            </div>

            {/* Bottom Footer Switcher */}
            <div className="mt-8 pt-4 border-t border-zinc-100 text-center">
              <p className="text-xs text-zinc-500">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setStatusMessage(null);
                  }}
                  className="font-bold text-[#CE410C] hover:text-[#611F11] transition-colors ml-1"
                >
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
