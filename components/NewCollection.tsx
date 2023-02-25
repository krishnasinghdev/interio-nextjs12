import Image from 'next/image';

const NewCollection = () => {
  return (
    <section className='w-1/2 rounded bg-[#0F0F0F] p-8 m-auto'>
      <h1 className='text-lg font-bold text-white '>New Collection</h1>
      <p className='text-sm text-gray'>
        Create a new collection of designs to get inspired
      </p>
      <p className='my-6 w-full border border-gray'> </p>
      <form className='my-8 w-full'>
        <input
          type='text'
          placeholder='Search Collection...'
          className='cborder w-full rounded bg-trans py-2 px-4 '
        />
      </form>
      <div className='cborder flex items-center justify-between rounded bg-trans p-2 mb-4'>
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
        <button className='flex rounded-full bg-trans py-2 px-8 text-white'>
          Add
        </button>
      </div>
      <div className='cborder flex items-center justify-between rounded bg-trans p-2 mb-4'>
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
        <button className='flex rounded-full bg-trans py-2 px-8 text-white'>
          Add
        </button>
      </div>
      <div className='cborder flex items-center justify-between rounded bg-trans p-2 mb-4'>
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
        <button className='flex rounded-full bg-trans py-2 px-8 text-white'>
          Add
        </button>
      </div>
      <div className='flex mt-8 gap-4 items-center' >
        <button className=' cborder w-3/4 text-white rounded bg-trans py-2 px-4 ' >Create new collection </button>
        <button className=' w-1/4 text-white rounded bg-primary py-2 px-4 '>Done</button>
      </div>
    </section>
  );
};

export default NewCollection;
