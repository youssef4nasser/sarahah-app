'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'
import ImgforgotPass from "../../../public/forgotpassword.svg";
import { AUTH_URLS } from '@/app/_constants/END_POINTS'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type Inputs = {
    email: string;
};

export default function ForgotPassword() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const res = await axios.post(`${AUTH_URLS.forgotPassword}`, data)
        console.log(res);
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
    <div className="bg-white p-8 rounded-lg shadow-md w-full">
        <div className="flex flex-col items-center mb-8">
        <Image
            src={ImgforgotPass}
            alt="Forgot Password Illustration"
            width={170}
            height={170}
            className="mb-4"
        />
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        <p className="text-sm text-gray-500 mt-2">
            Forgot your password? No worries!
        </p>
        </div>

        {submitStatus === 'idle' && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
            </label>
            <div className="relative">
                <input
                {...register('email', { required: 'Email is required' })}
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3] pl-10"
                placeholder="Enter your email address"
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
            </div>
            <button
            type="submit"
            className="w-full bg-[#00bfb3] text-white py-2 px-4 rounded-md hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
            Request Recovery
            </button>
        </form>
        )}

        {submitStatus === 'success' && (
        <div className="text-center">
            <div className="bg-green-50 text-green-800 p-4 rounded-md mb-4">
            Recovery instructions have been sent to your email address. Please check your inbox.
            </div>
            <Link
            href="/.forgotPassword"
            className="text-[#00bfb3] hover:underline"
            >
            Return to Login
            </Link>
        </div>
        )}

        {submitStatus === 'error' && (
        <div className="text-center">
            <div className="bg-red-50 text-red-800 p-4 rounded-md mb-4">
            Unable to process your request. Please try again later.
            </div>
            <button
            onClick={() => setSubmitStatus('idle')}
            className="text-[#00bfb3] hover:underline"
            >
            Try Again
            </button>
        </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-600">
        <Link href="/register" className="text-[#00bfb3] hover:underline">
            Register
        </Link>
        {' | '}
        <Link href="/login" className="text-[#00bfb3] hover:underline">
            Login
        </Link>
        </div>
    </div>
    </main>
  )
}