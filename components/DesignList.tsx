import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { shotData } from "../types/shotType";

const DesignList = ({ shots }: { shots: shotData[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {shots.length > 0 ? (
        shots.map((shot: shotData) => (
          // @ts-ignore
          <div key={shot._id} className="mb-4">
            <Link href={`/designs/${shot._id}`}>
              <Image
                // @ts-ignore
                src={shot.images[0].url}
                alt="l1img"
                height={250}
                quality={100}
                width={270}
                className="cursor-pointer transition-all hover:scale-105 "
              />
            </Link>
            <div className="flex justify-between px-4 py-2 text-gray">
              <span>
                <BsChatDots className="inline" /> 1.1k
              </span>
              <p className="flex gap-4">
                <span>
                  <AiOutlineHeart className="inline" /> 1.1k
                </span>
                <span>
                  <AiOutlineEye className="inline" /> 1.1k
                </span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Nothing to show!</p>
      )}
    </div>
  );
};

export default DesignList;
