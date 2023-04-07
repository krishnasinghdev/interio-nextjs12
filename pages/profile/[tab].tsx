import axios from "axios";
import React from "react";
import DesignList from "../../components/DesignList";
import { shotDataArr } from "../../types/shotType";
import Layout from "./Layout";

const tab = (shots: shotDataArr) => {
  return (
    <Layout>
      <DesignList shots={shots} />
    </Layout>
  );
};

export default tab;

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API_URL}/shot`);

  return {
    props: {
      shots: data?.data,
    },
  };
}
