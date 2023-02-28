import React from 'react';
import SideLayout from '../../components/SideLayout';
import Image from 'next/image';
import { BsShareFill, BsChatDots } from 'react-icons/bs';
import { FiFolderMinus } from 'react-icons/fi';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';

const Upload = () => {
  return (
    <SideLayout>
      <header className='text-center'>
        <h1>What have you been working on?</h1>
      </header>
    </SideLayout>
  );
};

export default Upload;
