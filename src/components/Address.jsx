export function Address({ text }) {
  return (
    <div className='flex items-center gap-2 text-sm font-medium text-gray-900'>
      <svg
        viewBox='0 0 24 24'
        className='h-5 w-5 shrink-0'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.8'
      >
        <path d='M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z' />
        <circle cx='12' cy='10' r='2.5' />
      </svg>
      <span className='truncate'>{text}</span>
    </div>
  );
}
