import React from 'react';
import SideLayout from '../../components/SideLayout';
import Image from 'next/image';
import DesignList from '../../components/DesignList';
import Layout from './Layout';
const index = () => {
  return (
    <>
      <Layout>
        <DesignList />
      </Layout>
    </>
  );
};

export default index;
