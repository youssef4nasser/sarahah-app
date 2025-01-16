'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLock } from 'react-icons/fa'
import Logo from "../../../public/logo.png";
import axios from 'axios'
import { AUTH_URLS } from '@/app/_constants/END_POINTS'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

type Inputs = {
  password: string
  confirmPassword: string
};

export default function ResetPassword() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const res = await axios.post(`${AUTH_URLS.resetPassword}`, data)
      console.log(res);
      router.push('/messages');
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
              src={Logo}
              alt="Sarahah Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <h1 className="text-2xl font-bold text-center">Reset Password</h1>
            <p className="text-sm text-gray-500 mt-2">
              Please enter your new password
            </p>
          </div>

          {submitStatus === 'idle' && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    {...register('password',{ 
                      required: true,
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                        message: 'Password must contain at least 6 characters, including letters and numbers'
                      }
                    })}
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3] pl-10 pr-10"
                    placeholder="Enter new password"
                    minLength={6}
                  />
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                {errors.password && <span className='text-red-500'>{errors.password.message || 'Password must contain at least 6 characters, including letters and numbers'}</span>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") !== value)
                        return "Passwords do not match";
                      }
                    })}
                    type="password"
                    id="confirmPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3] pl-10 pr-10"
                    placeholder="Confirm new password"
                  />
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message || 'Passwords do not match'}</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#00bfb3] text-white py-2 px-4 rounded-md hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Reset Password
              </button>
            </form>
          )}

          {submitStatus === 'success' && (
            <div className="text-center">
              <div className="bg-green-50 text-green-800 p-4 rounded-md mb-4">
                Your password has been successfully reset!
              </div>
              <Link
                href="/login"
                className="bg-[#00bfb3] text-white py-2 px-6 rounded-md hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:ring-offset-2 transition-colors inline-block"
              >
                Go to Login
              </Link>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-center">
              <div className="bg-red-50 text-red-800 p-4 rounded-md mb-4">
                An error occurred while resetting your password. Please try again.
              </div>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-[#00bfb3] hover:underline"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </main>
  )
}

