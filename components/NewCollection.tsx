import Image from 'next/image';
import ModalHeader from './ModalHeader';

const NewCollection = ({ onClick }: { onClick: () => void }) => {
  return (
    <section className='m-auto w-1/2 rounded bg-[#0F0F0F] p-8'>
      <ModalHeader
        heading='New Collection'
        onClick={onClick}
        title='Create a new collection of designs to get inspired'
      />
      <form className='my-8 w-full'>
        <input
          type='text'
          placeholder='Search Collection...'
          className='cborder w-full rounded bg-trans px-4 py-2 '
        />
      </form>
      <div className='cborder mb-4 flex items-center justify-between rounded bg-trans p-2'>
        <div className='flex gap-4  '>
          <Image
            src={'/l1.png'}
            alt='ivon'
            height={90}
            width={80}
            className='rounded-lg'
          />
          <div>
            <h2 className='text-white   '>Minimalistic Design</h2>
            <p className='text-sm font-thin text-gray'>
              19 Shots added * Updated 2 months ago
            </p>
          </div>
        </div>
        <button className='flex rounded-full bg-trans px-8 py-2 text-white'>
          Add
        </button>
      </div>
      <div className='cborder mb-4 flex items-center justify-between rounded bg-trans p-2'>
        <div className='flex gap-4  '>
          <Image
            src={'/l1.png'}
            alt='ivon'
            height={90}
            width={80}
            className='rounded-lg'
          />
          <div>
            <h2 className='text-white   '>Minimalistic Design</h2>
            <p className='text-sm font-thin text-gray'>
              19 Shots added * Updated 2 months ago
            </p>
          </div>
        </div>
        <button className='flex rounded-full bg-trans px-8 py-2 text-white'>
          Add
        </button>
      </div>
      <div className='cborder mb-4 flex items-center justify-between rounded bg-trans p-2'>
        <div className='flex gap-4  '>
          <Image
            src={'/l1.png'}
            alt='ivon'
            height={90}
            width={80}
            className='rounded-lg'
          />
          <div>
            <h2 className='text-white   '>Minimalistic Design</h2>
            <p className='text-sm font-thin text-gray'>
              19 Shots added * Updated 2 months ago
            </p>
          </div>
        </div>
        <button className='flex rounded-full bg-trans px-8 py-2 text-white'>
          Add
        </button>
      </div>
      <div className='mt-8 flex items-center gap-4'>
        <button className=' cborder w-3/4 rounded bg-trans px-4 py-2 text-white '>
          Create new collection{' '}
        </button>
        <button className=' w-1/4 rounded bg-primary px-4 py-2 text-white '>
          Done
        </button>
      </div>
    </section>
  );
};

export default NewCollection;
