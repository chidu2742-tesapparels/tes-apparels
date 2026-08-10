import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2341] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <Image
            src="/logo-white.png"
            alt="TES Apparels"
            width={220}
            height={60}
            className="h-10 w-auto object-contain mb-4"
          />

          <p className="text-sm text-gray-300 leading-6">
            Premium corporate uniform manufacturer offering high-quality
            uniforms, polo T-shirts, jackets, bags, caps and promotional
            apparel across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#C49A00]">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="#home"
                className="hover:text-white transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#products"
                className="hover:text-white transition"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#industries"
                className="hover:text-white transition"
              >
                Industries
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>

            <li>
              <Link
                href="/blog"
                className="hover:text-white transition"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Manufacturing Services */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#C49A00]">
            Manufacturing Services
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                href="/t-shirt-manufacturer"
                className="hover:text-white transition"
              >
                T-Shirt Manufacturer
              </Link>
            </li>

            <li>
              <Link
                href="/t-shirt-manufacturer-bangalore"
                className="hover:text-white transition"
              >
                T-Shirt Manufacturer in Bangalore
              </Link>
            </li>

            <li>
              <Link
                href="/corporate-uniform-manufacturer"
                className="hover:text-white transition"
              >
                Corporate Uniform Manufacturer
              </Link>
            </li>

            <li>
              <Link
                href="/school-uniform-manufacturer"
                className="hover:text-white transition"
              >
                School Uniform Manufacturer
              </Link>
            </li>

            <li>
              <Link
                href="/dri-fit-t-shirts"
                className="hover:text-white transition"
              >
                Dri-Fit T-Shirts
              </Link>
            </li>

            <li>
              <Link
                href="/sports-t-shirts"
                className="hover:text-white transition"
              >
                Sports T-Shirts
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#C49A00]">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex gap-2 items-start">
              <MapPin size={16} className="mt-1 shrink-0" />

              <span>
                No.483, 2nd Floor,
                <br />
                3rd Stage,
                <br />
                Basaveshwar Nagar,
                <br />
                Bengaluru – 560079
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <Phone size={16} />

              <a
                href="tel:+919972548910"
                className="hover:text-[#C49A00] transition"
              >
                +91 9972548910
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <Mail size={16} />

              <a
                href="mailto:chidanand@tesapparels.com"
                className="hover:text-[#C49A00] transition"
              >
                chidanand@tesapparels.com
              </a>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="mt-5 space-y-2">
            <a
              href="tel:+919972548910"
              className="block text-center bg-[#C49A00] hover:bg-[#a88400] text-white py-2 rounded-lg text-sm font-semibold transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919972548910?text=Hi%20TES%20Apparels,%20I'm%20interested%20in%20your%20corporate%20uniforms."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2 rounded-lg text-sm font-semibold transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Developer Credit */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} TES Apparels. All Rights Reserved.
          </div>

          <div className="mt-1">
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-[#C49A00]">
              TES Apparels
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}