import Link from 'next/link'
import Image from 'next/image'
import { FaUser, FaSignInAlt } from 'react-icons/fa'
import Logo from '../../public/logo.png'

export default function Navbar() {
  return (
    <nav className="shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src={Logo}
                alt="Sarahah Logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/login" className="text-gray-600 hover:text-[#00bfb3] px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
            <Link href="/register" className="bg-[#00bfb3] text-white hover:bg-[#00a89d] px-3 py-2 rounded-md text-sm font-medium flex items-center ml-4">
              <FaUser className="mr-2" />
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

