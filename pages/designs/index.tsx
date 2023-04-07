import Head from "next/head";
import DesignList from "../../components/DesignList";
import SideLayout from "../../components/SideLayout";
import { useSelector, useDispatch } from "react-redux";
import { isLogin as loginStatus, toggleModal } from "../../context/theme";
import Link from "next/link";
import axios from "axios";
import { shotData } from "../../types/shotType";

export default function Designs({ shots }: { shots: shotData[] }) {
  const dispatch = useDispatch();
  const isLogin = useSelector<Boolean>(loginStatus);

  return (
    <SideLayout>
      <Head>
        <title>Interio -&gt; Designs</title>
      </Head>

      {/* LOGO + BUTTON */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold tracking-wider">Interio</h1>
        <p className="">
          {isLogin ? (
            <Link
              href="/designs/upload"
              className="mr-4 rounded bg-primary px-4 py-2"
              // onClick={() => dispatch(toggleSignup(true))}
            >
              Upload Shot
            </Link>
          ) : (
            <>
              <button
                className="mr-4 rounded bg-primary px-4 py-2"
                onClick={() =>
                  dispatch(
                    dispatch(
                      toggleModal({ showModal: true, modalType: "signup" })
                    )
                  )
                }
              >
                Sign up
              </button>
              <button
                className="rounded bg-trans px-4 py-2"
                onClick={() =>
                  dispatch(
                    dispatch(
                      toggleModal({ showModal: true, modalType: "signin" })
                    )
                  )
                }
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
      {/* SEARCH + TAGS */}
      <div className="my-8 w-full">
        <input
          type="text"
          placeholder="Search for anything ..."
          className="w-full rounded bg-trans px-4 py-2  "
        />
        <div className="mt-4 flex gap-4">
          <button className="rounded bg-primary px-4 py-2">Modern</button>
          <button className="rounded bg-trans px-4 py-2">Minimal</button>
          <button className="rounded bg-trans px-4 py-2">Dark Theme</button>
          <button className="rounded bg-trans px-4 py-2">Hotel Room</button>
          <button className="rounded bg-trans px-4 py-2">Luxurious</button>
          <button className="rounded bg-trans px-4 py-2">Space Saving</button>
        </div>
      </div>
      {shots.length > 0 ? (
        //  @ts-ignore
        <DesignList shots={shots} />
      ) : (
        <p className="text-center">Nothing to show!</p>
      )}
    </SideLayout>
  );
}

export async function getServerSideProps() {
  let result = { shots: [] };

  const { data } = await axios.get(`${process.env.API_URL}/shot`);
  if (data?.data) {
    result = { shots: data.data };
  }

  return {
    props: result,
  };
}
