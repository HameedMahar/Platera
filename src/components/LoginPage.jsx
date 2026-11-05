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
    <div className='min-h-screen w-full flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#611F11]'>
      {/* Main Content Area */}
      <div className='relative w-full rounded-[28px] overflow-hidden flex justify-center min-h-[680px] '>
        <div>
          <Image
            src={'/images/login-image.jpeg'}
            width={2100}
            height={1300}
            alt='image'
            className='w-[600px] h-full object-cover hidden md:block'
          />
        </div>
        {/* RIGHT SIDE: Crisp White Card for Authentication */}
        {/* Note: The white background is preserved exactly as requested (#ffffff) */}
        <div className='lg:col-span-6 xl:col-span-5 bg-[#ffffff] p-8 sm:p-12 md:p-14 flex flex-col justify-between'>
          <div>
            {/* Brand Header inside White Card */}
            <div className='flex items-center justify-between mb-8'>
              <div className='flex items-center gap-2.5'>
                <Image
                  src='/images/logo.png'
                  alt='Platera Logo'
                  width={70}
                  height={70}
                  className='object-contain -mr-4'
                />
                <span className='text-xl font-bold tracking-tight text-[#611F11]'>
                  Platera
                </span>
              </div>

              {/* Mode Pill Toggle (Log In / Create Account) */}
              <div className='flex items-center bg-zinc-100 p-1 rounded-full text-xs font-semibold'>
                <button
                  type='button'
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
                  type='button'
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
            <div className='mb-8'>
              <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-[#611F11]'>
                {isLogin ? 'Welcome back' : 'Create account'}
              </h1>
              <p className='text-sm text-zinc-500 mt-2'>
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
                  <svg
                    className='w-5 h-5 flex-shrink-0 text-emerald-600'
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
                ) : (
                  <svg
                    className='w-5 h-5 flex-shrink-0 text-red-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                    />
                  </svg>
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            {/* Authentication Form */}
            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Full Name field (in Register mode) */}
              {!isLogin && (
                <div>
                  <label className='block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5'>
                    Full Name
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400'>
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
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='John Doe'
                      className='w-full pl-10 pr-4 py-3 bg-[#ffffff] border border-zinc-200 rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#CE410C] focus:ring-2 focus:ring-[#CE410C]/20 transition-all'
                    />
                  </div>
                </div>
              )}

              {/* Email Address */}
              <div>
                <label className='block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5'>
                  Email address
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400'>
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
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                  </div>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='name@platera.com'
                    required
                    className='w-full pl-10 pr-4 py-3 bg-[#ffffff] border border-zinc-200 rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#CE410C] focus:ring-2 focus:ring-[#CE410C]/20 transition-all'
                  />
                </div>
              </div>

              {/* Password Input with Visibility Toggle */}
              <div>
                <div className='flex items-center justify-between mb-1.5'>
                  <label className='block text-xs font-semibold uppercase tracking-wider text-zinc-600'>
                    Password
                  </label>
                  {isLogin && (
                    <a
                      href='#forgot-password'
                      onClick={(e) => {
                        e.preventDefault();
                        alert(
                          'Password reset link sent to your registered email.',
                        );
                      }}
                      className='text-xs font-medium text-[#CE410C] hover:underline'
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400'>
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
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                      />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='••••••••'
                    required
                    className='w-full pl-10 pr-11 py-3 bg-[#ffffff] border border-zinc-200 rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#CE410C] focus:ring-2 focus:ring-[#CE410C]/20 transition-all'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors'
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? (
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
                          d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18'
                        />
                      </svg>
                    ) : (
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
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Primary Action Button (#CE410C) */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full mt-2 py-3.5 px-6 rounded-full bg-[#CE410C] hover:bg-[#b53709] active:scale-[0.99] text-[#ffffff] font-semibold text-sm shadow-md shadow-[#CE410C]/25 hover:shadow-lg hover:shadow-[#CE410C]/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70'
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className='animate-spin -ml-1 mr-2 h-4 w-4 text-[#ffffff]'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      />
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      />
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>{isLogin ? 'Log in' : 'Create account'}</span>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className='relative my-7'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-zinc-200' />
              </div>
              <div className='relative flex justify-center text-xs text-zinc-400'>
                <span className='bg-[#ffffff] px-3 font-medium'>
                  {isLogin ? 'or sign in with' : 'or sign up with'}
                </span>
              </div>
            </div>

            {/* Social Login Options (matching reference icons) */}
            <div className='flex items-center justify-center gap-4'>
              {/* Google */}
              <button
                type='button'
                title='Continue with Google'
                onClick={() => alert('Google authentication connected')}
                className='h-12 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm w-full gap-2'
              >
                <svg className='w-5 h-5' viewBox='0 0 24 24'>
                  <path
                    fill='#4285F4'
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  />
                  <path
                    fill='#34A853'
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  />
                  <path
                    fill='#FBBC05'
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z'
                  />
                  <path
                    fill='#EA4335'
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z'
                  />
                </svg>
                <p>Google Login</p>
              </button>
            </div>
          </div>

          {/* Bottom Footer Switcher */}
          <div className='mt-8 pt-4 border-t border-zinc-100 text-center'>
            <p className='text-xs text-zinc-500'>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                type='button'
                onClick={() => {
                  setIsLogin(!isLogin);
                  setStatusMessage(null);
                }}
                className='font-bold text-[#CE410C] hover:text-[#611F11] transition-colors ml-1'
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
