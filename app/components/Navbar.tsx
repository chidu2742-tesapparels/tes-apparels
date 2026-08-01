import {
  Mail,
  Phone,
  Menu,
} from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      {/* Top Bar */}

      <div className="bg-[#0B2341] text-white text-xs hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 py-2 flex justify-between items-center">

          <p>
            Premium Corporate Uniform Manufacturer | PAN India Delivery
          </p>

          <div className="flex items-center gap-8">

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>chidanand@tesapparels.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 9972548910</span>
            </div>

          </div>

        </div>
      </div>

      {/* Main Navbar */}

      <nav className="sticky top-0 z-50 bg-white shadow-md">

        <div className="max-w-[1400px] mx-auto px-8 h-16 flex justify-between items-center">

          {/* Logo */}

          <div>

           <div className="flex items-center">
  <Image
    src="/logo-horizontal.png"
    alt="TES Apparels"
    width={340}
    height={80}
    priority
    className="h-16 object-contain"
  />
</div>


          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex flex-1 justify-center items-center gap-8 font-semibold text-[15px]">

            <a href="#home" className="hover:text-[#C49A00] transition">
              Home
            </a>

            <a href="#about" className="hover:text-[#C49A00] transition">
              About
            </a>

            <a href="#products" className="hover:text-[#C49A00] transition">
              Products
            </a>

            <a href="#industries" className="hover:text-[#C49A00] transition">
              Industries
            </a>

            <a href="#contact" className="hover:text-[#C49A00] transition">
              Contact
            </a>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <a
              href="#contact"
              className="hidden md:inline-block bg-[#C49A00] hover:bg-[#a88400] text-white px-5 py-2 text-sm rounded-xl font-semibold transition"
            >
              Request Quote
            </a>

            <button className="lg:hidden">
              <Menu size={30} />
            </button>

          </div>

        </div>

      </nav>
    </>
  );
}
