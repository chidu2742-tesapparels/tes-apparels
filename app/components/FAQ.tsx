"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer:
        "Our MOQ depends on the product. Contact us with your requirement and we'll suggest the best option.",
    },
    {
      question: "Can you customize uniforms with our company logo?",
      answer:
        "Yes. We offer embroidery, screen printing, heat transfer and other branding options.",
    },
    {
      question: "Do you supply uniforms across India?",
      answer:
        "Yes. We manufacture in Bengaluru and deliver uniforms to businesses across India.",
    },
    {
      question: "How long does production take?",
      answer:
        "Most orders are completed within 10–20 working days depending on quantity and customization.",
    },
    {
      question: "Can I request fabric samples?",
      answer:
        "Yes. Fabric swatches and samples can be provided before confirming bulk orders.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#0B2341] mb-2">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-sm text-gray-600 mb-8">
          Find answers to the most common questions about our products and services.
        </p>

        <div className="space-y-3">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="font-semibold text-[#0B2341] text-base">
                  {faq.question}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-6">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}