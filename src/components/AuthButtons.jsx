import Link from 'next/link';

export function AuthButtons({ className = '' }) {
  return (
    <div className={`gap-3 ${className}`}>
      <Link
        href='/login'
        className='rounded-md border border-gray-900 px-4 py-2 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-100'
      >
        Log in
      </Link>
      <Link
        href='/signup'
        className='rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-primary-dark'
      >
        Sign up for free delivery
      </Link>
    </div>
  );
}
