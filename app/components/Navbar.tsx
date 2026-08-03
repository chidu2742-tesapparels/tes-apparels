"use client";

import { useState } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}

      <div className="bg-[#0B2341] text-white text-xs hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 py-2 flex justify-between items-center">
          <p>Premium Corporate Uniform Manufacturer | PAN India Delivery</p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>chidanand@tesapparels.com</span>
            </div>

            <div className="flex items-center gap-2">
  <Phone size={14} />
  <span>+91 9972548910 | +91 9880038910</span>
</div>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">

          {/* Logo */}

          <div className="flex items-center">
            <Image
              src="/logo-horizontal.png"
              alt="TES Apparels"
              width={340}
              height={80}
              priority
              className="h-16 w-auto object-contain"
            />
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
              className="hidden md:inline-block bg-[#C49A00] hover:bg-[#a88400] text-white px-5 py-2 rounded-xl text-sm font-semibold transition"
            >
              Request Quote
            </a>

            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>
      </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">

          <div className="flex flex-col p-6 space-y-5 font-semibold text-[#0B2341]">

            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#products" onClick={() => setIsOpen(false)}>
              Products
            </a>

            <a href="#industries" onClick={() => setIsOpen(false)}>
              Industries
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#C49A00] text-white text-center py-3 rounded-xl"
            >
              Request Quote
            </a>

          </div>

        </div>
      )}
    </>
  );
}