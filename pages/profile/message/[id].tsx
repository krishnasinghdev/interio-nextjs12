import React from 'react';
import SideLayout from '../../../components/SideLayout';
import Image from 'next/image';

function id() {
  return (
    <SideLayout>
      <header className='flex gap-4 pb-4'>
        <Image src={'/dp2.png'} alt='dp2' width={50} height={50} />
        <div>
          <h1>Rohan Singh, 24</h1>
          <p className='text-xs text-gray'>
            0 Followers | 0 Following | 21 Likes
          </p>
        </div>
      </header>
      <p className='mb-4 w-full border-[0.5px] border-gray px-4' />
      <Image src={'/gvector.png'} alt='dp2' width={300} className='m-auto mt-8 ' height={300} />

      
      <input
          type='text'
          placeholder='Type message...'
          className='w-full rounded m-auto bg-trans py-2 px-4  '
        />
    </SideLayout>
  );
}

export default id;
