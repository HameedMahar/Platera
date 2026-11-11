'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GoogleBtn } from './GoogleBtn';
import { Eye, EyeClosed, LoaderCircle, Lock, Mail, User } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/toast';

const inputBase =
  'w-full py-3 bg-white border rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all';
const inputOk =
  'border-zinc-200 focus:border-[#CE410C] focus:ring-[#CE410C]/20';
const inputBad = 'border-red-400 focus:border-red-500 focus:ring-red-200';

const labelCls =
  'block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5';

function validate({ isLogin, name, email, password }) {
  const errors = {};
  if (!isLogin && !name.trim()) errors.name = 'Enter your full name.';
  if (!email.trim()) errors.email = 'Enter your email address.';
  else if (!/^\S+@\S+\.\S+$/.test(email))
    errors.email = 'Enter a valid email address.';
  if (!password) errors.password = 'Enter your password.';
  else if (!isLogin && password.length < 8)
    errors.password = 'Use at least 8 characters.';
  return errors;
}

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const switchMode = (login) => {
    setIsLogin(login);
    setErrors({});
    setStatusMessage(null);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const found = validate({ isLogin, name, email, password });
    setErrors(found);
    setStatusMessage(null);
    if (Object.keys(found).length) {
      setStatusMessage({
        type: 'error',
        text: 'Please fix the highlighted fields.',
      });
      return;
    }

    setIsSubmitting(true);
    // TODO: replace with your real auth call (Supabase, NextAuth, etc.)
    timer.current = setTimeout(() => {
      setIsSubmitting(false);
      toast.add({
        title: isLogin
          ? 'Welcome back to Platera!'
          : 'Account created. Welcome to Platera!',
        type: 'success',
      });
    }, 700);
  };

  const fieldCls = (key, pad) =>
    `${inputBase} ${pad} ${errors[key] ? inputBad : inputOk}`;

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#611F11]'>
      <div className='w-full max-w-5xl rounded-[28px] overflow-hidden flex bg-white min-h-[680px] shadow-2xl'>
        {/* LEFT: image (desktop only) */}
        <div className='relative hidden md:block md:w-1/2'>
          <Image
            src='/images/login-image.webp'
            alt=''
            fill
            priority
            sizes='(min-width: 768px) 50vw, 0vw'
            className='object-cover'
          />
        </div>

        {/* RIGHT: form card */}
        <div className='w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between'>
          <div>
            {/* Brand + mode toggle */}
            <div className='flex items-center justify-between gap-3 mb-8'>
              <div className='flex items-center'>
                <Image
                  src='/images/logo.png'
                  alt='Platera logo'
                  width={56}
                  height={56}
                  className='object-contain'
                />
                <span className='text-xl font-bold tracking-tight text-[#611F11]'>
                  Platera
                </span>
              </div>

              <div
                role='tablist'
                aria-label='Authentication mode'
                className='flex items-center bg-zinc-100 p-1 rounded-full text-xs font-semibold'
              >
                {[
                  { label: 'Log In', value: true },
                  { label: 'Register', value: false },
                ].map(({ label, value }) => (
                  <button
                    key={label}
                    type='button'
                    role='tab'
                    aria-selected={isLogin === value}
                    onClick={() => switchMode(value)}
                    className={`px-3 py-1.5 rounded-full transition-all ${
                      isLogin === value
                        ? 'bg-white text-[#611F11] shadow-sm font-bold'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
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

            {/* Form (noValidate so our validation + messages run, not the browser's) */}
            <form onSubmit={handleSubmit} noValidate className='space-y-7'>
              {!isLogin && (
                <div>
                  <label htmlFor='name' className={labelCls}>
                    Full name
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400'>
                      <User size={18} />
                    </div>
                    <input
                      id='name'
                      type='text'
                      autoComplete='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='John Doe'
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      className={fieldCls('name', 'pl-10 pr-4')}
                    />
                  </div>
                  {errors.name && (
                    <p id='name-err' className='mt-1 text-xs text-red-600'>
                      {errors.name}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor='email' className={labelCls}>
                  Email address
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400'>
                    <Mail size={16} />
                  </div>
                  <input
                    id='email'
                    type='email'
                    autoComplete='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='name@platera.com'
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                    className={fieldCls('email', 'pl-10 pr-4')}
                  />
                </div>
                {errors.email && (
                  <p id='email-err' className='mt-1 text-xs text-red-600'>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <div className='flex items-center justify-between mb-1.5'>
                  <label
                    htmlFor='password'
                    className='block text-xs font-semibold uppercase tracking-wider text-zinc-600'
                  >
                    Password
                  </label>
                  {isLogin && (
                    <button
                      type='button'
                      onClick={() =>
                        setStatusMessage({
                          type: 'success',
                          text: 'If that email is registered, a reset link is on its way.',
                        })
                      }
                      className='text-xs font-medium text-[#CE410C] hover:underline'
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400'>
                    <Lock size={14} />
                  </div>
                  <input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='••••••••'
                    aria-invalid={!!errors.password}
                    aria-describedby={
                      errors.password ? 'password-err' : undefined
                    }
                    className={fieldCls('password', 'pl-10 pr-11')}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword((s) => !s)}
                    className='absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors'
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p id='password-err' className='mt-1 text-xs text-red-600'>
                    {errors.password}
                  </p>
                )}
              </div>

              {isLogin && (
                <label className='flex items-center gap-2 text-xs text-zinc-600 cursor-pointer select-none -mt-4'>
                  <input
                    type='checkbox'
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className='h-4 w-4 rounded border-zinc-300 accent-[#CE410C]'
                  />
                  Remember me
                </label>
              )}

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full rounded-full py-5'
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className='animate-spin' />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>{isLogin ? 'Log in' : 'Create account'}</span>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className='relative my-7'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-zinc-200' />
              </div>
              <div className='relative flex justify-center text-xs text-zinc-400'>
                <span className='bg-white px-3 font-medium'>
                  {isLogin ? 'or log in with' : 'or sign up with'}
                </span>
              </div>
            </div>

            {/* Google */}
            <button
              type='button'
              onClick={() => {
                // TODO: wire up your OAuth provider
              }}
              className='w-full h-12 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center gap-2 text-sm font-medium text-zinc-700 transition-all active:scale-[0.99] shadow-sm'
            >
              <GoogleBtn />
              Continue with Google
            </button>
          </div>

          {/* Footer switcher */}
          <div className='mt-8 pt-4 border-t border-zinc-100 text-center'>
            <p className='text-xs text-zinc-500'>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                type='button'
                onClick={() => switchMode(!isLogin)}
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
