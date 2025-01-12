import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#00bfb3] text-white py-4 mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex gap-6 mb-4">
              <Link href="#" className="hover:opacity-80">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="hover:underline">Terms</Link>
              <Link href="#" className="hover:underline">Privacy</Link>
              <Link href="#" className="hover:underline">Help</Link>
              <Link href="#" className="hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
