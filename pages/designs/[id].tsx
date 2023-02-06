import React from 'react';
import SideLayout from '../../components/SideLayout';
import Image from 'next/image';
import { BsShareFill, BsChatDots } from 'react-icons/bs';
import { FiFolderMinus } from 'react-icons/fi';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';

const Shot = () => {
  return (
    <SideLayout>
      <header className='flex justify-between '>
        <div className='flex gap-x-4'>
          <Image
            src={'/dp.png'}
            height={40}
            width={40}
            alt='man dp'
            className='rounded-full bg-primary '
          />
          <div>
            <h1>Jane Cooper</h1>
            <p className='text-xs text-gray'>21 shots uploaded till now</p>
          </div>
        </div>
        <button className='rounded bg-primary py-2 px-4'>Upload Shot</button>
      </header>
      <p className='my-8 w-full border-[0.5px] border-gray' />
      <div className='mb-8 flex justify-between'>
        <div className='flex gap-x-4'>
          <Image
            src={'/girl.png'}
            height={40}
            width={40}
            alt='man dp'
            className='rounded-lg bg-primary '
          />
          <div>
            <h1>Hotel Room Design</h1>
            <p className='text-xs text-gray'>Jane Cooper</p>
          </div>
        </div>
        <div className='flex gap-x-4 '>
          <button className='cborder rounded bg-trans py-2 px-4'>Save</button>
          <button className='rounded border border-pink-500 bg-trans py-2 px-4'>
            <Image
              src={'/pheart.png'}
              alt='heart-icon'
              height={20}
              width={20}
              className='inline'
            />{' '}
            1.1k
          </button>
        </div>
      </div>
      <Image src={'/bed.png'} alt='bed' height={500} width={1200} />
      <div className='my-8 flex items-center justify-center gap-4'>
        <button className='cborder rounded bg-trans py-2 px-4'>
          <BsChatDots />
        </button>
        <button className='cborder rounded bg-trans py-2 px-4'>
          <FiFolderMinus />
        </button>
        <button className='cborder rounded bg-trans py-2 px-4'>
          <BsShareFill />
        </button>
      </div>
      <p className='my-8 w-full border-[0.5px] border-gray' />

      <p>
        Lorem ipsum dolor sit amet consectetur. Laoreet facilisis lobortis
        porttitor malesuada viverra nec ac. Nunc tincidunt semper amet quis.
        Nibh magna velit ac ut risus nulla massa mollis ultrices. Lorem ipsum
        dolor sit amet consectetur. Laoreet facilisis lobortis porttitor
        malesuada viverra nec ac. Nunc tincidunt semper amet quis. Nibh magna
        velit ac ut risus nulla massa mollis ultrices.
      </p>

      <h2>I am available for new projects</h2>
      <p className='my-2'>
        📪 Email:
        <span className='text-primary'> contact.rajsingh07@gmail.com</span>
      </p>
      <p className='mb-2'>
        🎯 Linkedin: <span className='text-primary'>Raj_Singh 😀</span>
      </p>
      <p className='mb-2'>
        👋 Instagram: <span className='text-primary'> @uxonfire</span>
      </p>

      <div className='my-8 flex items-center justify-center gap-4'>
        <button className='cborder rounded bg-trans py-2 px-4'>Edit</button>
        <button className='cborder rounded bg-trans py-2 px-4'>
          Edit Details
        </button>
        <button className='cborder rounded bg-trans py-2 px-4'>Delete</button>
      </div>
      <div className='flex flex-col items-center justify-items-center gap-y-2 '>
        <div className='grid  grid-cols-12 '>
          <p className='my-8 col-span-5 w-full border-[0.5px] border-gray' />
          <Image
            src={'/girl.png'}
            height={40}
            width={40}
            alt='man dp'
            className='mx-4 col-span-2 rounded-full bg-primary'
          />
          <p className='my-8 col-span-5 w-full border-[0.5px] border-gray' />
        </div>
        <h1>Jane Cooper</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button className='mt-4 rounded bg-primary py-2 px-4'>Hire me</button>
      </div>
      <div className='flex flex-col gap-y-8 '>
        <div className='flex justify-between'>
          <p>More from Jane Cooper</p>
          <p className='cursor-pointer text-primary hover:underline'>
            View Profile
          </p>
        </div>
        <div className='flex gap-4'>
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className='mb-4'>
              <Link href='/designs/single'>
                <Image
                  src={`/l${i + 1}.png`}
                  alt='l1img'
                  height={250}
                  quality={100}
                  width={270}
                  className='cursor-pointer transition-all hover:scale-105 '
                />
              </Link>
              <div className='flex justify-between px-4 py-2 text-gray'>
                <span>
                  <BsChatDots className='inline' /> 1.1k
                </span>
                <p className='flex gap-4'>
                  <span>
                    <AiOutlineHeart className='inline' /> 1.1k
                  </span>
                  <span>
                    <AiOutlineEye className='inline' /> 1.1k
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SideLayout>
  );
};

export default Shot;
