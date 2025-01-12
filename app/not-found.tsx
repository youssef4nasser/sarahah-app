import Link from 'next/link'
import { FaExclamationTriangle, FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 text-center">
        <FaExclamationTriangle className="mx-auto h-12 w-12 text-[#00bfb3]" />
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
        404 - Page Not Found
        </h1>
        <p className="mt-2 text-sm text-gray-600">
        Oops! The page you{"'"}re looking for doesn{"'"}t exist.
        </p>
        <div className="mt-6">
        <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#00bfb3] hover:bg-[#00a89d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00bfb3]"
        >
            <FaHome className="mr-2" />
            Go back home
        </Link>
        </div>
    </div>
    </main>
  )
}