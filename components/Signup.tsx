import { MdOutlineCancelPresentation } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../context/theme";

interface Props {
  onClick: () => void;
}

interface IFormInput {
  name: String;
  username: String;
  email: String;
  password: String;
  cpassword: String;
}

const schema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .label("Email/Username is required "),
  password: Joi.string().min(3).required(),
  cpassword: Joi.ref("password"),
  name: Joi.string().required(),
  username: Joi.string().min(5).required(),
});

const Signup = ({ onClick }: Props) => {
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
    setMessage("Creating Account...");
    try {
      const { data } = await axios.post(`${process.env.API_URL}/vendor`, val);
      setMessage("");
      dispatch(
        setLogin({
          vendor: data.data.name,
          v_id: data.data._id,
          token: data.data.token,
        })
      );
      onClick();
    } catch (error) {
      setMessage("Some Error!");
    }
  };

  return (
    <section className="z-10 m-auto w-11/12 rounded bg-[#0F0F0F] p-8 md:w-1/2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white ">Make your account</h1>
          <p className="text-sm text-gray">
            Create a new account and explore the community
          </p>
        </div>
        <MdOutlineCancelPresentation
          onClick={onClick}
          className="block cursor-pointer text-3xl text-white transition-all hover:scale-105 "
        />
      </div>
      <p className="my-6 w-full border border-gray" />
      {message && (
        <p className="mt-2 text-center text-sm text-red-500">{message}</p>
      )}
      <form
        className="flex flex-col bg-[#0F0F0F] text-gray placeholder:text-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-4  grid gap-4 md:grid-cols-2">
          <p className="col-span-1">
            <label htmlFor="name" className=" block">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="mt-2 w-full rounded bg-[#1D1D1D] px-4 py-2"
              placeholder="name"
              required={true}
            />
            <span className="mt-1 text-xs text-red-400">
              {errors.name?.message}
            </span>
          </p>
          <p className="col-span-1 ">
            <label htmlFor="username" className=" block">
              Username
            </label>
            <input
              type="text"
              className="mt-2 w-full rounded bg-[#1D1D1D] px-4  py-2"
              placeholder="username"
              {...register("username")}
              required={true}
            />
            <span className="mt-1 text-xs text-red-400">
              {errors.username?.message}
            </span>
          </p>
        </div>
        <label htmlFor="email" className="mt-4 block">
          Email
        </label>
        <input
          type="email"
          className="mt-2 rounded bg-[#1D1D1D] px-4  py-2"
          placeholder="email"
          {...register("email")}
          required={true}
        />
        <span className="mt-1 text-xs text-red-400">
          {errors.email?.message}
        </span>
        <label htmlFor="cpassword" className="mt-4 block">
          Password
        </label>
        <input
          type="password"
          className="mt-2 rounded bg-[#1D1D1D] px-4  py-2"
          placeholder="password"
          {...register("password")}
          autoComplete="true"
          required={true}
        />
        <span className="mt-1 text-xs text-red-400">
          {errors.password?.message}
        </span>
        <label htmlFor="password" className="mt-4 block">
          Confirm Password
        </label>
        <input
          type="password"
          className="mt-2 rounded bg-[#1D1D1D] px-4  py-2"
          placeholder="confirm password"
          autoComplete="true"
          required={true}
          {...register("cpassword")}
        />
        <span className="mt-1 text-xs text-red-400">
          {errors.cpassword?.message}
        </span>
        <p className="mt-4">
          <input
            type="checkbox"
            className="mr-2 mt-2 inline rounded bg-[#1D1D1D] px-4 py-2"
            name="checkbox"
            required={true}
            defaultChecked
          />
          <label htmlFor="checkbox" className="">
            Creating an account means you’re okay with our <br />
            <span className="text-primary">Terms of Service</span> &
            <span className="text-primary">Privacy Policy</span>
          </label>
        </p>
        <button className="mt-4 w-full rounded bg-primary p-2 ">
          {message ? message : "Sign up"}
        </button>
      </form>
    </section>
  );
};

export default Signup;
