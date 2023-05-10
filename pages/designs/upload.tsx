import React from "react";
import SideLayout from "../../components/SideLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

interface Props {
  onClick: () => void;
}

interface IFormInput {
  shot: String | File[] | File;
  description: String;
}

const schema = Joi.object({
  shot: Joi.any().required().label("Shot is Required "),
  description: Joi.string().min(200).max(600).required(),
});

const Upload = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [message, setMessage] = useState<String>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: joiResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInput> = async (val) => {
    setMessage("Uploading...");
    const shotImage = "https://res.cloudinary.com/ds8j4z2nf/image/upload/v1678014724/Interio/bed_j1772k.png"
      // "https://res.cloudinary.com/ds8j4z2nf/image/upload/v1678014721/Interio/l5_z8ydxy.png";
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/shot`,
        {
          role: "vendor",
          description: val.description,
          images: {
            title: "Hotel Room",
            url: shotImage,
          },
          tags: ["Minimal", "Modern", "Luxurious"],
          category: "room",
          title: "Hotel Room",
        },
        {
          headers: {
            "Authorization ": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data.data);
      router.push(`/designs/${data.data._id}`);
      setMessage("Uploaded !");
    } catch (error) {
      setMessage("Some Error!");
    }
  };

  return (
    <SideLayout>
      <header className="my-4 text-center">
        <h1>What have you been working on?</h1>
        {message && <h1>{message}</h1>}
      </header>
      <form
        className="flex flex-col gap-4  py-8 text-gray"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex h-[70vh] flex-col items-center justify-center rounded border border-dashed px-16  text-center">
          <input
            accept="image/*"
            type="file"
            id="shot"
            className="mb-4"
            {...register("shot")}
          />
          <span className="mt-1 text-xs text-red-400">
            {errors.shot?.message}
          </span>
          <p>
            Drag and drop image or <span className="text-primary">Browse</span>
          </p>
          <p>
            Minimum 1600px width recommended. Max 10MB each shot High resolution
            (png, jpg, jepg)
          </p>
        </div>
        <textarea
          {...register("description")}
          className="rounded bg-dark p-4"
          id="description"
          cols={30}
          rows={10}
          placeholder="Add the description here..."
        />
        <span className="mt-1 text-xs text-red-400">
          {errors.description?.message}
        </span>
        <button className="mt-4 rounded bg-primary p-2 ">Upload</button>
      </form>
    </SideLayout>
  );
};

export default Upload;
