import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2341] text-white pt-10 pb-5">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        {/* Company */}

        <div>

          <Image
            src="/logo-horizontal.png"
            alt="TES Apparels"
            width={260}
            height={70}
            className="mb-3  h-14 w-auto object-contain"
          />

          <p className="text-sm text-gray-300 leading-6">
            Premium Corporate Uniform Manufacturer offering
            high-quality uniforms, polo T-shirts, jackets,
            bags, caps and promotional apparel across India.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-lg font-bold mb-3 text-[#C49A00]">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">

            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#industries" className="hover:text-white">Industries</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>

          </ul>

        </div>

        {/* Products */}

        <div>

          <h3 className="text-lg font-bold mb-3 text-[#C49A00]">
            Our Products
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">

            <li>Corporate Uniforms</li>
            <li>Polo T-Shirts</li>
            <li>Corporate Shirts</li>
            <li>Industrial Uniforms</li>
            <li>Jackets • Caps • Bags</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-lg font-bold mb-3 text-[#C49A00]">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-gray-300">

            <div className="flex gap-2 items-start">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>
                No.483, 2nd Floor,<br />
                3rd Stage,<br />
                Basaveshwar Nagar,<br />
                Bengaluru – 560079
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <Phone size={16} />
              <a
                href="tel:+919972548910"
                className="hover:text-[#C49A00]"
              >
                +91 9972548910
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <Mail size={16} />
              <a
                href="mailto:chidanand@tesapparels.com"
                className="hover:text-[#C49A00]"
              >
                chidanand@tesapparels.com
              </a>
            </div>

          </div>

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

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-400">

        © {new Date().getFullYear()} TES Apparels. All Rights Reserved.

      </div>

    </footer>
  );
}