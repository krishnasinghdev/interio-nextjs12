import Image from 'next/image';
const RectangleCard = () => {
  return (
    <div className='padding z-20 mx-auto md:flex hidden w-[85%] py-8 relative -bottom-14 lg:w-[65%] items-center  justify-between rounded-md bg-black text-center text-white '>
      <p>Sign up</p>
      <p className='text-sm'>
        Click the button & fill in the details to <br /> sign up to the xyz
        community.
      </p>
      <button className='rounded-full border-2 border-primary  py-2 px-4 '>
        <Image
          src={'/hand.png'}
          alt='interio logo'
          height={20}
          width={20}
          className='mr-2 inline'
        />
        Let&apos;s do this
      </button>
    </div>
  );
};

export default RectangleCard;
