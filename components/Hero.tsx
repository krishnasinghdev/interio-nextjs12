import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <main className='grid h-[90vh] grid-cols-12 items-center bg-[#7270FF] text-white'>
      <div className='col-span-7 col-start-2'>
        <h1 className=' text-4xl font-semibold drop-shadow-xl'>
          Interior Designs Just <br /> a click away
        </h1>
        <p className='my-4 text-lg '>
          Discover a community of interior designers on Xyz. <br /> Post your
          works or get inspired by others
        </p>
        <div className='mt-4 flex items-center gap-4 '>
          <button className='rounded-full bg-dark py-2 px-4'>
            Explore Designs
          </button>
          <p className='flex font-bold text-dark items-center '>
            <button className='mr-2  rounded-full bg-[#1B1A20] p-2'>
              <BsFillPlayFill className='text-2xl text-primary' />
            </button>
            View Demo
          </p>
        </div>
      </div>
      <div className='hidden md:block col-span-4  bg-[#1B1A20] h-[90vh]'>
        {/* <p className='absolute inline-block rounded-xl bg-dark p-4 text-center text-sm'>
          <span className='text-2xl font-semibold'>6k</span> <br />
          <span className='text-[rgba(255,255,255,0.31)]'>Shots</span>
        </p> */}

        <Image
          src={'/heroimg.png'}
          alt='hero section images'
          width={400}
          height={400}
          className='-ml-20 relative top-[20%]'
        />
        {/* <p className='relative left-80 -top-40 inline-block rounded-xl bg-white p-3 text-center text-sm font-semibold text-dark'>
          Show case <br /> Works
        </p> */}
        <p className='relative right-32 top-12 inline-block rounded-xl bg-white p-2 text-center text-sm font-semibold text-dark'>
          <Image
            src='/girlimg.png'
            alt='girl avtar'
            className='mr-2 inline'
            height={40}
            width={40}
          />
          Minimal Hotel Room Design
        </p>
      </div>
    </main>
  );
};

export default Hero;
