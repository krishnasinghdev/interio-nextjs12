import type { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillAppstore, AiOutlineUser } from "react-icons/ai";
import { RiSuitcaseLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { HiOutlineLogout, HiOutlinePhotograph } from "react-icons/hi";
import { FiSettings, FiFolderMinus } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { setLogout, isLogin, vendor as vd } from "../context/theme";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import clsx from "clsx";
import { toggleModal } from "../context/theme";

type Props = {
  children?: React.ReactNode;
  way?: String;
};

export default function Designs({ children, way }: Props): ReactElement {
  const dispatch = useDispatch();
  const vendor = useSelector(vd);
  const router = useRouter();
  const loginStatus = useSelector(isLogin);
  const logoutHandler = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/vendor/logout`,
        { role: "vendor" },
        {
          headers: {
            "Authorization ": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(setLogout());
      router.push("/designs");
    } catch (error) {
      console.log("Some Error!", error);
    }
  };
  return (
    <>
      <aside className="fixed flex h-screen w-[280px]">
        <div className="flex h-screen w-[60px] flex-col items-center justify-evenly bg-black pb-[25vh] text-xl text-white ">
          <Link href="/">
            <Image
              src={"/interio.png"}
              alt="interio logo"
              height={35}
              width={35}
            />
          </Link>
          <Link href="/designs">
            <AiFillAppstore />
          </Link>
          <Link href="/profile/work">
            <AiOutlineUser />
          </Link>
          <button
            onClick={() =>
              dispatch(toggleModal({ showModal: true, modalType: "invite" }))
            }
          >
            <HiOutlineMail />
          </button>
          <button
            onClick={() =>
              dispatch(
                toggleModal({ showModal: true, modalType: "collection" })
              )
            }
          >
            <FiFolderMinus />
          </button>
          <p className="w-[2vw] border border-gray"> </p>
          <button title="Coming Soon!">
            <FiSettings />
          </button>
          {loginStatus && (
            <button onClick={logoutHandler}>
              <HiOutlineLogout />
            </button>
          )}

          {loginStatus && (
            <Link href="/profile/about" className="absolute bottom-8 ">
              <Image
                src={"/dp.png"}
                alt="interio logo"
                height={35}
                width={35}
                className="rounded-full bg-primary "
              />
            </Link>
          )}
        </div>
        <div className="bluebg flex h-screen w-[220px] flex-col items-center justify-evenly pb-[35vh] text-xl  ">
          <div className="mt-3 w-[200px]">
            {/* ?.split(' ')[0] */}
            <h1 className="font-semibold">Hello {vendor?.vendor},</h1>
            <p className="text-xs text-light">Check out your store analysis</p>
          </div>

          <Link
            href="/designs"
            className={clsx(
              { "bg-lighter": router?.pathname == "/designs" },
              "flex w-[200px] items-center gap-4 rounded-lg px-4 py-2"
            )}
          >
            <HiOutlinePhotograph />
            <div>
              <h1 className="font-semibold">100k+</h1>
              <p className="text-xs text-light">Inspirations for you</p>
            </div>
          </Link>
          <div
            className={clsx(
              { "bg-lighter": router?.pathname == "/suitcase" },
              "flex w-[200px] items-center gap-4 rounded-lg px-4 py-2"
            )}
          >
            <RiSuitcaseLine />
            <div>
              <h1 className="font-semibold">123+</h1>
              <p className="text-xs text-light">
                Find Work <br /> (coming soon)
              </p>
            </div>
          </div>
          <div
            className={clsx(
              { "bg-lighter": router?.pathname == "/user" },
              "flex w-[200px] items-center gap-4 rounded-lg px-4 py-2"
            )}
          >
            <AiOutlineUser />
            <div>
              <h1 className="font-semibold">104+</h1>
              <p className="text-xs text-light">
                Hire Designer <br /> (coming soon)
              </p>
            </div>
          </div>
          <Link
            href={`/profile/chat?v_id=${vendor.v_id}`}
            className={clsx(
              {
                "bg-lighter":
                  router?.pathname == "/profile/chat" ||
                  router?.pathname == "/profile/chat/[ChatId]",
              },
              "flex w-[200px] items-center gap-4 rounded-lg px-4 py-2"
            )}
          >
            <BsChatDots />
            <div>
              <h1 className="font-semibold">09+</h1>
              <p className="text-xs text-light">Project messages</p>
            </div>
          </Link>
        </div>
      </aside>

      {way === "without" ? (
        <div className="ml-[280px] min-h-screen bg-black ">{children}</div>
      ) : (
        <div className="ml-[280px] min-h-screen bg-black px-4 pt-8 text-white sm:px-8 xl:px-10 ">
          {children}
        </div>
      )}
    </>
  );
}
