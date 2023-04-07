import React from "react";
import SideLayout from "../../../components/SideLayout";
import Image from "next/image";

const Edit = () => {
  return (
    <SideLayout>
      <div className="flex items-center justify-between ">
        <div>
          <h1>Your Profile</h1>
          <p className="text-xs">Check out your profile options here</p>
        </div>
        <div className="flex gap-4">
          <button className="rounded bg-primary px-4  py-2  ">General</button>
          <button className="rounded bg-trans px-4  py-2  ">Password</button>
        </div>
      </div>
      <p className="col-span-5 my-8 w-full border-[0.5px] border-gray px-4" />
      <div className="flex items-center justify-start gap-4 ">
        <Image
          src={"/girl.png"}
          alt="dpgirl"
          height={70}
          width={70}
          className="rounded-full"
        />
        <button className="rounded bg-primary px-4  py-1  ">Upload Now</button>
        <button className="rounded bg-trans px-4  py-1  ">Delete Pic</button>
      </div>
      <form className="flex  flex-col text-gray placeholder:text-sm ">
        <div className="mt-4 flex ">
          <p className="w-1/2 ">
            <label htmlFor="name" className=" block">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="cborder mr-4 mt-2 rounded bg-[#1D1D1D]  px-4 py-2"
              placeholder="name"
            />
          </p>
          <p className="w-1/2 ">
            <label htmlFor="username" className=" block">
              Username
            </label>
            <input
              type="text"
              className="cborder mt-2 rounded bg-[#1D1D1D] px-4  py-2"
              placeholder="username"
              name="username"
            />
          </p>
        </div>
        <div className="mt-4 flex w-full">
          <p className=" w-1/2">
            <label htmlFor="email" className=" block">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="cborder mr-4 mt-2 rounded bg-[#1D1D1D]  px-4 py-2"
              placeholder="email"
            />
          </p>
          <p className=" w-1/2">
            <label htmlFor="location" className=" block">
              Location
            </label>
            <input
              type="text"
              className="cborder mt-2 rounded bg-[#1D1D1D] px-4  py-2"
              placeholder="location"
              name="location"
            />
          </p>
        </div>

        <p className="mt-4">
          <label htmlFor="bio" className="mb-2 block">
            Write Bio
          </label>
          <textarea
            name="bio"
            id=""
            className="cborder w-full rounded bg-[#1D1D1D] "
            cols={40}
            rows={10}
          ></textarea>
        </p>
        <p className=" ">
          <label htmlFor="portfolio" className=" block">
            Personal Portfolio
          </label>
          <input
            type="text"
            className="cborder mt-2 w-full rounded bg-[#1D1D1D] px-4  py-2"
            placeholder="portfolio"
            name="portfolio"
          />
        </p>
        <button className="mt-4 w-fit rounded bg-primary px-4 py-2 ">
          Save Changes
        </button>
      </form>
    </SideLayout>
  );
};

export default Edit;
