import Image from 'next/image'
import Logo from '../public/logo.png'
import Link from 'next/link'

export default function Home() {
  return (
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 max-w-md mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src={Logo}
            alt="Sarahah Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <h1 className="text-2xl font-bold mb-8">Sarahah صراحة</h1>
        </div>

        {/* Buttons Section */}
        <div className="w-full space-y-4">
          <button
            className="w-full bg-[#00bfb3] hover:bg-[#00a89d] text-white py-3 text-lg"
          >
             <Link href="/login">Login</Link>
          </button>
          <button
            className="w-full bg-[#00bfb3] hover:bg-[#00a89d] text-white py-3 text-lg"
          >
            <Link href="/register">Create Account</Link>
          </button>
        </div>
      </main>
  )
}