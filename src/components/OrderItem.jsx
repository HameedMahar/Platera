import { ItemArt } from './ItemArt';

export function OrderItem({ item }) {
  return (
    <div className='flex items-start gap-5 py-6'>
      <div className='flex h-[86px] w-[112px] shrink-0 items-center justify-center bg-[#f2f2f2]'>
        <ItemArt id={item.id} />
      </div>
      <div className='min-w-0 flex-1 pt-0.5'>
        <p className='text-[15px] font-semibold leading-snug text-[#1a1a1a]'>
          {item.name}
        </p>
        <p className='mt-1.5 text-[14px] leading-snug text-[#2a2a2a]'>
          {item.detail1}
        </p>
        <p className='text-[14px] leading-snug text-[#2a2a2a]'>
          {item.detail2}
        </p>
        <div className='mt-5 flex items-baseline justify-between gap-4'>
          <p className='text-[14px] text-[#2a2a2a]'>Quantity: {item.qty}</p>
          <p className='text-[15px] text-[#1a1a1a]'>
            {fmt(item.price * item.qty)}
          </p>
        </div>
      </div>
    </div>
  );
}
