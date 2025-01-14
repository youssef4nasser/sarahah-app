import Image from "next/image";
// import Link from "next/link";
import {
  FaEnvelope,
  // FaCheckCircle,
  // FaExclamationTriangle,
} from "react-icons/fa";
import Logo from '../../public/logo.png'

export default function ResendVerification() {
  
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
          <h1 className="text-2xl font-bold text-center">
            Resend Verification Email
          </h1>
        </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={''}
                  required
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
             Resend Verification Email
            </button>
          </form>
       
          {/* <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-5xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Verification Email Sent!
            </h2>
            <p className="text-gray-600 text-center mb-6">
              A new verification email has been sent to your email address.
              Please check your inbox and follow the instructions to verify your
              account.
            </p>
            <Link
              href="/"
              className="bg-[#00bfb3] text-white py-2 px-6 rounded-md hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:ring-offset-2 transition-colors"
            >
              Return to Home
            </Link>
          </div>
     
          <div className="flex flex-col items-center">
            <FaExclamationTriangle className="text-red-500 text-5xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Error</h2>
            <p className="text-gray-600 text-center mb-6">
              We couldn{"'"}t send the verification email. Please try again
              later or contact support if the problem persists.
            </p>
            <button
              className="bg-[#00bfb3] text-white py-2 px-6 rounded-md hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:ring-offset-2 transition-colors"
            >
              Try Again
            </button>
          </div> */}
      </div>
    </main>
  );
}
