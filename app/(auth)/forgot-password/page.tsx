'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'
import ImgforgotPass from "../../../public/forgotpassword.svg";

export default function ForgotPassword() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
        <form className="space-y-4">
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
            </label>
            <div className="relative">
                <input
                type="email"
                id="email"
                name="email"
                value={''}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3] pl-10"
                placeholder="Enter your email address"
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
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
            href="/login"
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