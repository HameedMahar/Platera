export function ItemArt({ id }) {
  if (id === 2) {
    return (
      <svg width='72' height='58' viewBox='0 0 72 58' aria-hidden='true'>
        <ellipse cx='34' cy='50' rx='18' ry='3.5' fill='#e3e3e3' />
        <path
          d='M20 22h28v16c0 7-6 12-14 12s-14-5-14-12V22z'
          fill='#f7f7f7'
          stroke='#d5d5d5'
          strokeWidth='1'
        />
        <path
          d='M22 22h24c0 6-2 10-5 12 4 1 7 4 7 8H24c0-4 2-7 6-8-3-2-5-6-8-12z'
          fill='#4b342c'
        />
        <path
          d='M48 26h6c4 0 7 3 7 7s-3 7-7 7h-6'
          fill='none'
          stroke='#c8c8c8'
          strokeWidth='2'
        />
        <path
          d='M28 14c1-4 2-6 2-6M34 12c1-4 1-7 1-7M40 14c0-4 1-6 1-6'
          stroke='#cfcfcf'
          strokeWidth='1.2'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  return (
    <svg width='78' height='58' viewBox='0 0 78 58' aria-hidden='true'>
      <ellipse cx='39' cy='50' rx='22' ry='3.5' fill='#e4e4e4' />
      <path
        d='M16 30h46c-1 12-10 20-23 20S17 42 16 30z'
        fill='#fbfbfb'
        stroke='#dedede'
        strokeWidth='1'
      />
      <ellipse cx='39' cy='30' rx='20' ry='8' fill='#e7d3c4' />
      <path
        d='M24 29c4-4 10-5 16-3 5 2 10 1 14-2 1 3 1 6-1 8-6 4-16 6-24 3-4-2-6-4-5-6z'
        fill='#e07a62'
      />
      <ellipse cx='30' cy='28' rx='5' ry='2.4' fill='#7d9a6a' />
      <ellipse cx='46' cy='31' rx='3.5' ry='1.8' fill='#d98c3a' />
    </svg>
  );
}
