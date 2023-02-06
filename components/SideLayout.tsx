import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillAppstore, AiOutlineUser } from 'react-icons/ai';
import { RiSuitcaseLine } from 'react-icons/ri';
import { BsChatDots } from 'react-icons/bs';
import { HiOutlineLogout, HiOutlinePhotograph } from 'react-icons/hi';
import { FiSettings, FiFolderMinus, FiShoppingBag } from 'react-icons/fi';

type Props = {
  children?: React.ReactNode;
  way?: String;
};

export default function Designs({ children, way }: Props): ReactElement {
  return (
    <>
      <aside className='fixed flex h-screen w-[280px]'>
        <div className='flex h-screen w-[60px] flex-col items-center justify-evenly bg-black pb-[25vh] text-xl text-white '>
          <Link href='/'>
            <Image
              src={'/interio.png'}
              alt='interio logo'
              height={35}
              width={35}
            />
          </Link>
          <Link href='/designs'>
            <AiFillAppstore />
          </Link>
          <Link href='/profile'>
            <AiOutlineUser />
          </Link>
          <Link href=''>
            <FiShoppingBag />
          </Link>
          <Link href=''>
            <FiFolderMinus />
          </Link>
          <p className='w-[2vw] border border-gray'> </p>
          <Link href=''>
            <FiSettings />
          </Link>
          <Link href=''>
            <HiOutlineLogout />
          </Link>
          <Link href='' className='absolute bottom-8 '>
            <Image
              src={'/dp.png'}
              alt='interio logo'
              height={35}
              width={35}
              className='rounded-full bg-primary '
            />
          </Link>
        </div>
        <div className='bluebg flex h-screen w-[220px] flex-col items-center justify-evenly pb-[35vh] text-xl  '>
          <div className='mt-3 w-[200px]'>
            <h1 className='font-semibold'>Howdy, Raj</h1>
            <p className='text-xs text-light'>Check out your store analysis</p>
          </div>

          <div className='flex w-[200px] items-center gap-4 rounded-lg bg-lighter py-2 px-4'>
            <HiOutlinePhotograph />
            <div>
              <h1 className='font-semibold'>100k+</h1>
              <p className='text-xs text-light'>Inspirations for you</p>
            </div>
          </div>
          <div className='flex w-[200px] items-center gap-4 rounded-lg bg-lighter py-2 px-4'>
            <RiSuitcaseLine />
            <div>
              <h1 className='font-semibold'>123+</h1>
              <p className='text-xs text-light'>
                Find Work <br /> (coming soon)
              </p>
            </div>
          </div>
          <div className='flex w-[200px] items-center gap-4 rounded-lg bg-lighter py-2 px-4'>
            <AiOutlineUser />
            <div>
              <h1 className='font-semibold'>104+</h1>
              <p className='text-xs text-light'>
                Hire Designer <br /> (coming soon)
              </p>
            </div>
          </div>
          <Link
            href={'/profile/message'}
            className='flex w-[200px] items-center gap-4 rounded-lg bg-lighter py-2 px-4'
          >
            <BsChatDots />
            <div>
              <h1 className='font-semibold'>09+</h1>
              <p className='text-xs text-light'>Project messages</p>
            </div>
          </Link>
        </div>
      </aside>

      {way === 'without' ? (
        <div className='ml-[280px] bg-black min-h-screen '>{children}</div>
      ) : (
        <div className='ml-[280px] bg-black min-h-screen px-4 pt-8 text-white sm:px-8 xl:px-10 '>
          {children}
        </div>
      )}
    </>
  );
}
