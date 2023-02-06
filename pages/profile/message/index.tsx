import React from 'react';
import SideLayout from '../../../components/SideLayout';
import Image from 'next/image';

function index() {
  return (
    <SideLayout>
      <header className='pb-4'>
        <h1>Message</h1>
        <p className='text-xs text-gray'>
          Message other designers and build connections!
        </p>
      </header>
      <p className='mb-4 w-full border-[0.5px] border-gray px-4' />

      <main className='flex flex-col  text-gray'>
        <div className='my-4 grid grid-cols-10 justify-between justify-items-start gap-4'>
          <div className='col-span-2 flex  items-center gap-4'>
            <Image src={'/dp2.png'} alt='dp2' width={70} height={70} />
            <div>
              <h1>Rohan Singh, 24</h1>
              <p className='text-xs text-gray'>Last online 21 days ago</p>
            </div>
          </div>
          <p className='col-span-6 text-sm'>
            Lorem ipsum dolor sit amet consectetur. Nulla lobortis risus tortor
            gravida ac augue. Lorem ipsum dolor sit amet consectetur. Nulla
            lobortis risus tortor gravida ac...
          </p>
          <p className='col-span-2 '>23rd Jan, 2023</p>
        </div>
        <p className='mb-4 w-full border-[0.5px] border-gray px-4' />
        <div className='my-4 grid grid-cols-10 justify-between justify-items-start gap-4'>
          <div className='col-span-2 flex  items-center gap-4'>
            <Image src={'/dp2.png'} alt='dp2' width={70} height={70} />
            <div>
              <h1>Rohan Singh, 24</h1>
              <p className='text-xs text-gray'>Last online 21 days ago</p>
            </div>
          </div>
          <p className='col-span-6 text-sm'>
            Lorem ipsum dolor sit amet consectetur. Nulla lobortis risus tortor
            gravida ac augue. Lorem ipsum dolor sit amet consectetur. Nulla
            lobortis risus tortor gravida ac...
          </p>
          <p className='col-span-2 '>23rd Jan, 2023</p>
        </div>
        <p className='mb-4 w-full border-[0.5px] border-gray px-4' />
        <div className='my-4 grid grid-cols-10 justify-between justify-items-start gap-4'>
          <div className='col-span-2 flex  items-center gap-4'>
            <Image src={'/dp2.png'} alt='dp2' width={70} height={70} />
            <div>
              <h1>Rohan Singh, 24</h1>
              <p className='text-xs text-gray'>Last online 21 days ago</p>
            </div>
          </div>
          <p className='col-span-6 text-sm'>
            Lorem ipsum dolor sit amet consectetur. Nulla lobortis risus tortor
            gravida ac augue. Lorem ipsum dolor sit amet consectetur. Nulla
            lobortis risus tortor gravida ac...
          </p>
          <p className='col-span-2 '>23rd Jan, 2023</p>
        </div>
        <p className='mb-4 w-full border-[0.5px] border-gray px-4' />
      </main>
    </SideLayout>
  );
}

export default index;
