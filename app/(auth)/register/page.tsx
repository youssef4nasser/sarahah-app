'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AUTH_URLS } from '../../_constants/END_POINTS'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Inputs = {
  name: string
  userName: string
  email: string
  password: string
  confirmPassword: string
  gender: string
}

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const res = await axios.post(`${AUTH_URLS.signup}`, data)
      toast.success(res.data.message + ' please check your email');
      router.push('/login');
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
          <h1 className="text-2xl font-bold">Create Sarahah Account</h1>
          <p className="text-sm text-gray-500 mt-1">In one step</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          {/* name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3]"
            />
            {errors.name && <span className='text-red-500'>Name is required</span>}
          </div>
          {/* userName */}
          <div className="space-y-2">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                sarahah.pro/
              </span>
              <input
                {...register("userName", { required: true })}
                id="userName"
                type="text"
                className="flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3]"
              />
            </div>
            {errors.userName && <span className='text-red-500'>Username is required</span>}
          </div>
          {/* email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", { 
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Email shoud be vaild mail",
                }
               })}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3]"
            />
            {errors.email && <span className='text-red-500'>{errors.email.message || 'Email is required'}</span>}
          </div>
          {/* password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password", { 
                required: true,
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: 'Password must contain at least 6 characters, including letters and numbers'
                }
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3]"
            />
            {errors.password && <span className='text-red-500'>{errors.password.message || 'Password is required'}</span>}
          </div>
          {/* confirmPassword */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
                if (watch("password") !== value)
                  return "Passwords do not match";
                }
              })}
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3]"
            />
            {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message || 'Password is required'}</span>}
          </div>
          {/* gender */}
          <div className="space-y-2">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              {...register("gender", { required: true })}
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:border-[#00bfb3] bg-white"
            >
              <option disabled selected>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* notifications */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="notifications"
              className="h-4 w-4 rounded border-gray-300 text-[#00bfb3] focus:ring-[#00bfb3]"
            />
            <label htmlFor="notifications" className="text-sm text-gray-700">
              Notifications
            </label>
          </div>
          {/* terms */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 mt-1 rounded border-gray-300 text-[#00bfb3] focus:ring-[#00bfb3]"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I have read and agree to the{' '}
              <Link href="#" className="text-[#00bfb3] hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00bfb3] text-white py-2 px-4 rounded-md hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:ring-offset-2 transition-colors"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-[#00bfb3] hover:underline">
              Login
            </Link>
          </p>
        </form>
      </main>
  )
}