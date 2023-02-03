import type { NextPage } from 'next';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RectangleCard from '../components/RectangleCard';
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className='bg-dark'>
      <Hero />
      {/* ICON LIST */}
      <div className='padding grid grid-cols-2  gap-6 pt-16 text-center md:grid-cols-4'>
        <div className='flex flex-col items-center gap-y-2'>
          <span className='rounded-full bg-[rgb(114,112,255,0.38)] p-4 '>
            <Image src='/gallery.png' alt='gallery' height={20} width={20} />
          </span>
          <h2 className='font-medium text-white'>Get Inspired</h2>
          <p className='px-6 text-[#FFFFFF66]'>
            Get inspired by thousands of designs
          </p>
        </div>

        <div className='flex flex-col items-center gap-y-2'>
          <span className='rounded-full bg-[#40FFBA61] p-4 '>
            <Image src='/upload.png' alt='Upload' height={20} width={20} />
          </span>
          <h2 className='font-medium text-white'>Upload Designs</h2>
          <p className='px-6 text-[#FFFFFF66]'>
            Upload your work and become noticable
          </p>
        </div>
        <div className='flex flex-col items-center gap-y-2'>
          <span className='rounded-full bg-[rgb(114,112,255,0.38)] p-4 '>
            <Image src='/chat.png' alt='chat' height={20} width={20} />
          </span>
          <h2 className='font-medium text-white'>Message Designer</h2>
          <p className='px-6 text-[#FFFFFF66]'>
            Message Other Interior Designers on the platform
          </p>
        </div>
        <div className='flex flex-col items-center gap-y-2'>
          <span className='rounded-full bg-[#40FFBA61] p-4 '>
            <Image src='/heart.png' alt='heart' height={20} width={20} />
          </span>
          <h2 className='font-medium text-white'>Get Feedback</h2>
          <p className='px-6 text-[#FFFFFF66]'>
            Get comments, likes & shares from other people
          </p>
        </div>
      </div>
      {/* SHOTS SECTION */}
      <h1 className='pt-16 text-center text-4xl font-bold text-gray'>SHOTS</h1>
      <p className='mt-4 text-center text-gray'>
        Upload Interior Design Shots Or Get Inspired <br /> By Other
        Designer&apos;s Works
      </p>

      <div className='padding my-16'>
        <h3 className='border-y border-gray p-4  text-4xl text-gray hover:cursor-pointer hover:bg-[#292929] hover:text-white '>
          Modern Designs
        </h3>
        <h3 className='border-y border-gray p-4  text-4xl text-gray hover:cursor-pointer hover:bg-[#292929] hover:text-white '>
          Minimal Designs
        </h3>
        <h3 className='border-y border-gray p-4  text-4xl text-gray hover:cursor-pointer hover:bg-[#292929] hover:text-white '>
          Space Saving
        </h3>
        <h3 className='border-y border-gray p-4  text-4xl text-gray hover:cursor-pointer hover:bg-[#292929] hover:text-white '>
          Luxurious Designs
        </h3>
      </div>

      {/* MUSIC BACKGROUND */}
      <div className='h-[70vh] bg-musicbg bg-contain bg-no-repeat '></div>

      {/* SHOT LISTS */}
      <h1 className='pt-16 text-center text-4xl font-bold uppercase text-gray'>
        OVER <span className='text-primary'>205+</span> Shots of <br /> INTERIOR
        dESIGN
      </h1>

      <div className='padding grid grid-cols-5 gap-4'>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
        <div>
          <span className='bg-gradient-to-r absolute m-2 rounded-2xl bg-white from-pink-500 to-yellow-500 py-1 px-3 text-sm'>
            24k
          </span>
          <Image
            src={'/musicbg.png'}
            height={250}
            width={250}
            alt={'man'}
            className='rounded'
          />
        </div>
      </div>

      <p className='text-center'>
        <button className='rounded-md bg-primary py-2 px-8 font-semibold text-black'>
          SEE MORE
        </button>
      </p>

      <div className='my-16 grid grid-cols-5 justify-items-start'>
        <div className='col-span-2  bg-primary '>
          <Image src={'/saly.png'} height={300} width={300} alt={'saly'} />{' '}
        </div>
        <div className='col-span-3 mr-4 sm:mr-8 xl:mr-32'>
          <h1 className='pt-16 text-4xl font-bold uppercase   text-gray'>
            WHAT OUR
            <span className='text-primary'> USERS</span>
            <br /> SAY ABOUT US
          </h1>
          <p className='my-4 text-gray'>
            Our users are our strength. We do every thing possible to make their
            experience unique and effortless.
          </p>
          <div className='card p-4 text-gray '>
            <p>
              “Lorem ipsum dolor sit amet consectetur. Lectus at erat sed diam
              felis vitae. Lorem ipsum dolor sit amet consectetur. Lectus at
              erat sed diam felis vitae.Lorem ipsum dolor sit amet consectetur.
              Lectus at erat sed diam felis vitae.Lorem ipsum dolor sit amet
              consectetur. Lectus at erat sed diam felis vitae. sed diam felis
              vitae.Lorem ipsum dolor sit amet consectetur. Lectus at”
            </p>

            <h6 className='mt-4 font-semibold text-primary'>
              STIEVE JOHN MATT
            </h6>
            <p>Interior Designer</p>
          </div>
        </div>
      </div>

      <RectangleCard />
      {/* FOOTER */}
      <div className='z-0 flex h-[50vh] flex-col items-center justify-center gap-y-2 bg-primary text-center leading-10 text-[rgba(255,255,255,0.63)] '>
        <Link href='/'>
          <Image
            src={'/interio.png'}
            alt='interio logo'
            height={40}
            width={40}
          />
        </Link>
        <p>
          Modern Designs | Minimal Designs | Luxurious Designs | Space Saving
          Designs <br /> Dark themed Designs | Hotel Room Designs Terms &
          Conditions <br /> Privacy Policy | About us
        </p>
        <p>Handcrafted by © XYZ Company 2023</p>
        <p>Made with 💖  </p>
      </div>
    </div>
  );
};

export default Home;
