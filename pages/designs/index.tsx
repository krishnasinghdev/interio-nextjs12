import Head from 'next/head';
import DesignList from '../../components/DesignList';
import SideLayout from '../../components/SideLayout';

export default function Designs() {
  return (
    <SideLayout>
      <Head>
        <title>Interio -&gt; Designs</title>
      </Head>

      {/* LOGO + BUTTON */}
      <div className='flex items-center justify-between'>
        <h1 className='font-bold tracking-wider'>Interio</h1>
        <p className=''>
          <button className='mr-4 rounded bg-primary py-2 px-4'>Sign up</button>
          <button className='rounded bg-trans py-2 px-4'>Sign in</button>
        </p>
      </div>
      {/* SEARCH + TAGS */}
      <div className='my-8 w-full'>
        <input
          type='text'
          placeholder='Search for anything ...'
          className='w-full rounded bg-trans py-2 px-4  '
        />
        <div className='mt-4 flex gap-4'>
          <button className='rounded bg-primary py-2 px-4'>Modern</button>
          <button className='rounded bg-trans py-2 px-4'>Minimal</button>
          <button className='rounded bg-trans py-2 px-4'>Dark Theme</button>
          <button className='rounded bg-trans py-2 px-4'>Hotel Room</button>
          <button className='rounded bg-trans py-2 px-4'>Luxurious</button>
          <button className='rounded bg-trans py-2 px-4'>Space Saving</button>
        </div>
      </div>
      <DesignList />
    </SideLayout>
  );
}
