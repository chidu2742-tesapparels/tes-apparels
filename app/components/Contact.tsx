"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Quote request sent successfully!");

        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send enquiry.");
      }
    } catch {
      setStatus("❌ Server error.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-12 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#0B2341] mb-2">
          Request a Quote
        </h2>

        <p className="text-center text-sm text-gray-600 mb-8">
          Tell us your requirement and we'll get back to you within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left Side */}

          <div>

            <h3 className="text-xl font-bold text-[#0B2341] mb-4">
              TES APPARELS
            </h3>

            <p className="text-sm text-gray-700 leading-5 mb-3">
              📍 No.483, 2nd Floor,<br />
              3rd Stage,<br />
              Basaveshwar Nagar,<br />
              Bengaluru – 560079
            </p>

            <p className="text-sm text-gray-700 mb-2">
              📞 +91 9972548910
            </p>

            <p className="text-sm text-gray-700 mb-3">
              ✉ chidanand@tesapparels.com
            </p>

            <p className="text-sm text-gray-600 leading-5">
              Corporate Uniforms • Polo T-Shirts • Corporate Shirts • Jackets •
              Caps • Bags • Promotional Apparel
            </p>

          </div>

          {/* Right Side */}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 space-y-3"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#C49A00]"
            />

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#C49A00]"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#C49A00]"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#C49A00]"
            />

            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us your requirement..."
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#C49A00]"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#C49A00] hover:bg-[#a88400] text-white px-6 py-3 rounded-lg font-semibold transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request a Quote"}
            </button>

            {status && (
              <p className="text-sm font-medium text-[#0B2341]">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}