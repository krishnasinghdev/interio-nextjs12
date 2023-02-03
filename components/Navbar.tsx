import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CgMenuRightAlt } from 'react-icons/cg';
const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <header className='padding flex items-center justify-between bg-dark text-white '>
        <Link href='/'>
          <Image
            src={'/interio.png'}
            alt='interio logo'
            height={40}
            width={40}
          />
        </Link>
        <nav className='hidden items-center gap-4 md:flex lg:gap-6 '>
          <Link
            href='/'
            className={clsx(
              {
                'border-b-2 border-primary text-primary':
                  router.pathname === '/',
              },
              'hover:text-primary'
            )}
          >
            Home
          </Link>
          <Link
            href='/portfolio'
            className={clsx(
              {
                'border-b-2 border-primary text-primary':
                  router.pathname === '/portfolio',
              },
              'hover:text-primary'
            )}
          >
            Portfolio
          </Link>
          <Link
            href='/reviews'
            className={clsx(
              {
                'border-b-2 border-primary text-primary':
                  router.pathname === '/reviews',
              },
              'hover:text-primary'
            )}
          >
            Reviews
          </Link>
          <button className='rounded-full bg-primary py-2 px-8 text-white '>
            Sign up
          </button>
          <button className='rounded-full border-2 border-primary py-2 px-8 text-primary '>
            Sign in
          </button>
        </nav>
        <div className='flex justify-between gap-4 md:hidden'>
          <button className='text-white'>
            Sign up
          </button>
          <button className='text-white'>
            Sign in
          </button>
          <CgMenuRightAlt className='text-4xl  text-white md:hidden' />
        </div>
      </header>
    </>
  );
};

export default Navbar;
