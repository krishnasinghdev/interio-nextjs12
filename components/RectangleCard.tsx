import Image from 'next/image'
const RectangleCard = () => {
  return (
    <div className="padding mx-auto flex z-20  justify-between text-center  items-center w-[65%] bg-black text-white rounded-md ">
      <p>Sign up</p>
      <p className="text-sm" >Click the button & fill in the details to <br /> sign up to the xyz community.</p>
      <button className="py-2 px-4 border-2  border-primary rounded-full " >
      <Image
            src={'/hand.png'}
            alt='interio logo'
            height={20}
          width={20}
          className='inline mr-2'
          />
        Let&apos;s do this</button>
    </div>
  )
}

export default RectangleCard
