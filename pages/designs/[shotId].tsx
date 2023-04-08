import React, { useState } from 'react';
import SideLayout from '../../components/SideLayout';
import Image from 'next/image';
import { BsShareFill, BsChatDots } from 'react-icons/bs';
import { FiFolderMinus } from 'react-icons/fi';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import { shotData } from '../../types/shotType';
// @ts-ignore
import io from 'socket.io-client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { vendor as vd } from '../../context/theme';
const socket = io(`${process.env.API_URL}`, { autoConnect: false });

const ShotId = ({
  title,
  category,
  description,
  tags,
  images,
  owner,
  _id,
}: shotData) => {
  const router = useRouter();
  const vendor = useSelector(vd);
  const [message, setMessage] = useState<String>('');

  const makeChat = async () => {
    if (localStorage.getItem('v_id')==owner._id) {
      return alert(`Can't chat to self! `)
    }
    socket.connect();
    setMessage('Connecting...');
    const token = localStorage.getItem('token');
    socket.emit('new-chat', {
      with: owner._id,
      token,
    });
    socket.on('chat-begin', ({ chatId }: { chatId: String }) => {
      if (chatId) {
        router.push(`/profile/chat/${chatId}`);
      }
    });
  };

  return (
    <SideLayout>
      <header className='flex justify-between '>
        <div className='flex gap-x-4'>
          <Image
            src={'/dp.png'}
            height={40}
            width={40}
            alt='man dp'
            className='rounded-full bg-primary '
          />
          <div>
            <h1>Jane Cooper</h1>
            <p className='text-xs text-gray'>21 shots uploaded till now</p>
          </div>
        </div>
        <Link href={'/designs/upload'} className='rounded bg-primary px-4 py-2'>
          Upload Shot
        </Link>
      </header>
      <p className='my-8 w-full border-[0.5px] border-gray' />
      <div className='mb-8 flex justify-between'>
        <div className='flex gap-x-4'>
          <Image
            src={'/girl.png'}
            height={40}
            width={40}
            alt='man dp'
            className='rounded-lg bg-primary '
          />
          <div>
            <h1>{title}</h1>
            <p className='text-xs text-gray'>{owner.name}</p>
          </div>
        </div>
        <div className='flex gap-x-4 '>
          <button className='cborder rounded bg-trans px-4 py-2'>Save</button>
          <button className='rounded border border-pink-500 bg-trans px-4 py-2'>
            <Image
              src={'/pheart.png'}
              alt='heart-icon'
              height={20}
              width={20}
              className='inline'
            />{' '}
            1.1k
          </button>
        </div>
      </div>
      {/* @ts-ignore */}
      <Image src={images[0].url} alt='bed' height={500} width={1200} />
      <div className='my-8 flex items-center justify-center gap-4'>
        <button className='cborder rounded bg-trans px-4 py-2'>
          <BsChatDots />
        </button>
        <button className='cborder rounded bg-trans px-4 py-2'>
          <FiFolderMinus />
        </button>
        <button className='cborder rounded bg-trans px-4 py-2'>
          <BsShareFill />
        </button>
      </div>
      <p className='my-8 w-full border-[0.5px] border-gray' />

      <p>{description}</p>

      <h2>I am available for new projects</h2>
      <p className='my-2'>
        📪 Email:
        <span className='text-primary'> {owner.email}</span>
      </p>
      <p className='mb-2'>
        🎯 Linkedin: <span className='text-primary'>Raj_Singh 😀</span>
      </p>
      <p className='mb-2'>
        👋 Instagram: <span className='text-primary'> @uxonfire</span>
      </p>

      {owner._id === vendor._id && (
        <div className='my-8 flex items-center justify-center gap-4'>
          <button className='cborder rounded bg-trans px-4 py-2'>Edit</button>
          <button className='cborder rounded bg-trans px-4 py-2'>
            Edit Details
          </button>
          <button className='cborder rounded bg-trans px-4 py-2'>Delete</button>
        </div>
      )}
      <div className='flex flex-col items-center justify-items-center gap-y-2 '>
        <div className='grid  grid-cols-12 '>
          <p className='col-span-5 my-8 w-full border-[0.5px] border-gray' />
          <Image
            src={'/girl.png'}
            height={40}
            width={40}
            alt='man dp'
            className='col-span-2 mx-4 rounded-full bg-primary'
          />
          <p className='col-span-5 my-8 w-full border-[0.5px] border-gray' />
        </div>
        <h1>{owner.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button onClick={makeChat} className='rounded bg-primary px-4 py-2'>
          {message ? message : "Let's chat"}
        </button>
      </div>
      <div className='flex flex-col gap-y-8 '>
        <div className='flex justify-between'>
          <p>More from {owner.name}</p>
          <p className='cursor-pointer text-primary hover:underline'>
            View Profile
          </p>
        </div>
        <div className='flex gap-4'>
          {[1, 2, 3, 4].map((_, i) => (
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
      </div>
    </SideLayout>
  );
};

export default ShotId;

export async function getServerSideProps({ params }: any) {
  let result = {
    _id: '642ed1d9a69faebb7421d582',
    title: 'Hotel Room',
    category: 'room',
    description:
      'Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.',
    tags: ['Minimal', 'Modern', 'Luxurious'],
    images: [[Object]],
    owner: {
      _id: '642ed18ca69faebb7421d57b',
      name: 'Krishna Singh',
      email: 'singhks0054@gmail.com',
      follower: [],
      following: [],
    },
  };
  
  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/shot/${params.shotId}`
    );
    if (data?.data) {
      result._id = data.data._id;
      result.title = data.data.title;
      result.category = data.data.category;
      result.description = data.data.description;
      result.tags = data.data.tags;
      result.images = data.data.images;
      result.owner = data.data.owner;
    }
  } catch (error) {}

  return { props: result };
}
