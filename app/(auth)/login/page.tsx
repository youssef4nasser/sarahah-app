"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { AUTH_URLS } from "../../_constants/END_POINTS";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const res = await axios.post(`${AUTH_URLS.login}`, data)
      router.push('/messages');
      toast.success("Login Successfull");
      localStorage.setItem('token', res.data.token);
    } catch (error) {      
      if (axios.isAxiosError(error) && error.response) {
        toast.error(String(error.response.data.errMsg || error.response.data.Error[0].message));
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center w-full px-4 max-w-md mx-auto py-8">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src={Logo}
          alt="Sarahah Logo"
          width={100}
          height={100}
          className="mb-4"
        />
        <h1 className="text-2xl font-bold">Login to Sarahah</h1>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3]"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        {/* password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-[#00bfb3] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3]"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#00bfb3] text-white py-2 px-4 rounded-md hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:ring-offset-2 transition-colors"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#00bfb3] hover:underline">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}
