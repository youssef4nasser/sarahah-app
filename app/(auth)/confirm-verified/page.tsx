import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Logo from "../../public/logo.png";

export default function ConfirmVerified() {
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
          <h1 className="text-2xl font-bold text-center">Email Verification</h1>
        </div>

        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-green-500 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Email Verified Successfully!
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Your email has been successfully verified. You can now log in to
            your account.
          </p>
          <Link
            href="/login"
            className="bg-[#00bfb3] text-white py-2 px-6 rounded-md hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-[#00bfb3] focus:ring-offset-2 transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </main>
  );
}
