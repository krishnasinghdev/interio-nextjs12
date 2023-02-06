import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';

const DesignList = () => {
  const list: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {list.map((_, i) => (
        <div key={i} className='mb-4'>
          <Link href='/designs/single'>
            <Image
              src={`/l${i + 1}.png`}
              alt='l1img'
              height={250}
              quality={100}
              width={270}
              className='cursor-pointer transition-all hover:scale-105 '
            />
          </Link>
          <div className='flex justify-between px-4 py-2 text-gray'>
            <span>
              <BsChatDots className='inline' /> 1.1k
            </span>
            <p className='flex gap-4'>
              <span>
                <AiOutlineHeart className='inline' /> 1.1k
              </span>
              <span>
                <AiOutlineEye className='inline' /> 1.1k
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignList;
