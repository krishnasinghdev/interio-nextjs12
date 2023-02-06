import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdCancelPresentation } from 'react-icons/md';
const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

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
        <nav className='flex items-center gap-4 '>
          <div className='hidden gap-6 md:flex'>
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
              href='/designs'
              className={clsx(
                {
                  'border-b-2 border-primary text-primary':
                    router.pathname === '/designs',
                },
                'hover:text-primary'
              )}
            >
              Designs
            </Link>
            <Link
              href='/about-us'
              className={clsx(
                {
                  'border-b-2 border-primary text-primary':
                    router.pathname === '/about-us',
                },
                'hover:text-primary'
              )}
            >
              About us
            </Link>
          </div>
          <div className='flex justify-between gap-4 text-lg '>
            <button className='sm:rounded-full sm:bg-primary sm:py-1 sm:px-6 '>
              Sign up
            </button>
            <button className='sm:rounded-full sm:border-2 sm:border-primary sm:py-1 sm:px-6 sm:text-primary '>
              Sign in
            </button>
            {showMenu ? (
              <MdCancelPresentation
                className={clsx(
                  { 'absolute right-4 top-4 z-50': showMenu },
                  'text-[2.5rem] md:hidden'
                )}
                onClick={() => setShowMenu((prev) => !prev)}
              />
            ) : (
              <CgMenuRightAlt
                className='text-[2.5rem] md:hidden'
                onClick={() => setShowMenu((prev) => !prev)}
              />
            )}
          </div>
        </nav>
        {/* PHONE MENU */}
      </header>

      {showMenu && (
        <div className='absolute top-0 z-10 flex h-auto w-screen flex-col items-center gap-4 bg-dark py-10 text-white transition-all '>
          <Link
            href='/'
            className={clsx(
              {
                'border-b-2 border-primary text-primary':
                  router.pathname === '/',
              },
              'hover:text-primary'
            )}
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            href='/designs'
            className={clsx(
              {
                'border-b-2 border-primary text-primary':
                  router.pathname === '/designs',
              },
              'hover:text-primary'
            )}
            onClick={() => setShowMenu(false)}
          >
            Designs
          </Link>
          <Link
            href='/about-us'
            className={clsx(
              {
                'border-b-2 border-primary text-primary':
                  router.pathname === '/about-us',
              },
              'hover:text-primary'
            )}
            onClick={() => setShowMenu(false)}
          >
            About us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
