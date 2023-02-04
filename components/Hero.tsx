import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <main className='grid h-[60vh] grid-cols-12 items-center bg-[#7270FF] text-white sm:h-[90vh]'>
      <div className='start2 col-span-12 sm:col-span-7'>
        <h1 className='text-2xl font-semibold drop-shadow-xl lg:text-4xl'>
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
          <p className='flex items-center font-bold text-dark '>
            <button className='mr-2  rounded-full bg-[#1B1A20] p-2'>
              <BsFillPlayFill className='text-2xl text-primary' />
            </button>
            View Demo
          </p>
        </div>
      </div>
      <div className='col-span-4 hidden h-[90vh] items-center justify-start bg-[#1B1A20] lg:flex'>
        <Image
          src={'/hero-right.png'}
          alt='hero section images'
          width={750}
          height={750}
          className='xl:-ml-68 -ml-24 -mt-12 md:-ml-40 lg:-ml-52'
        />
      </div>
    </main>
  );
};

export default Hero;
