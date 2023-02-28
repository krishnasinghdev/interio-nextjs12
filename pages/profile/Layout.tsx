import type { ReactElement } from 'react';
import Image from 'next/image';
import SideLayout from '../../components/SideLayout';

type Props = {
  children?: React.ReactNode;
  way?: String;
};

export default function Layout({ children, way }: Props): ReactElement {
  return (
    <SideLayout way='without'>
      <Image
        key={2}
        src={'/coverimg.png'}
        alt='cover_image'
        className=''
        height={300}
        width={1300}
      />
      <section className='-mt-4 flex items-center justify-between px-8 text-white'>
        <div className='flex items-center gap-4  '>
          <Image src={'/dp2.png'} alt='dp2' width={100} height={100} />
          <div>
            <h1>Rohan Singh, 24</h1>
            <p className='text-xs text-gray'>
              0 Followers | 0 Following | 21 Likes
            </p>
          </div>
        </div>
        <div className=''>
          <button className='cborder mr-4   rounded bg-trans py-2 px-4 '>
            Upload Shot
          </button>
          <button className='  rounded bg-primary py-2 px-4 '>
            Edit Profile
          </button>
        </div>
      </section>
      <header className='flex items-center justify-around py-4 text-gray'>
        <p>Works - 19</p>
        <p>Liked Shots - 41</p>
        <p>Collections - 5</p>
        <p>Shop Products - 0</p>
        <p>About me</p>
      </header>
      <div className='px-8 '>
        <p className='mb-4 w-full border-[0.5px] border-gray px-4' />
        {children}
      </div>
    </SideLayout>
  );
}
