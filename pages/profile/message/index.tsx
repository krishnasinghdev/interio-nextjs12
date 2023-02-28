import React from 'react';
import SideLayout from '../../../components/SideLayout';
import Image from 'next/image';
import { isLogin as loginStatus } from '../../../context/theme';
import { useSelector } from 'react-redux';

function index() {
  const isLogin = useSelector<Boolean>(loginStatus);

  return (
    <SideLayout>
      <header className='pb-4'>
        <h1>Message</h1>
        <p className='text-xs text-gray'>
          Message other designers and build connections!
        </p>
      </header>
      <p className='mb-4 w-full border-[0.5px] border-gray px-4' />

      {isLogin ? (
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
              Lorem ipsum dolor sit amet consectetur. Nulla lobortis risus
              tortor gravida ac augue. Lorem ipsum dolor sit amet consectetur.
              Nulla lobortis risus tortor gravida ac...
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
              Lorem ipsum dolor sit amet consectetur. Nulla lobortis risus
              tortor gravida ac augue. Lorem ipsum dolor sit amet consectetur.
              Nulla lobortis risus tortor gravida ac...
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
              Lorem ipsum dolor sit amet consectetur. Nulla lobortis risus
              tortor gravida ac augue. Lorem ipsum dolor sit amet consectetur.
              Nulla lobortis risus tortor gravida ac...
            </p>
            <p className='col-span-2 '>23rd Jan, 2023</p>
          </div>
          <p className='mb-4 w-full border-[0.5px] border-gray px-4' />
        </main>
      ) : (
        <h1 className='text-center text-gray'>
          Login/Signup to access messages!
        </h1>
      )}
    </SideLayout>
  );
}

export default index;
