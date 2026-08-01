"use client";

export default function WhatsAppButton() {
  const phone = "919972548910";

  const message = encodeURIComponent(
    "Hi TES Apparels, I'm interested in your corporate uniforms. Please contact me."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-4 rounded-full shadow-xl flex items-center gap-3 transition-all hover:scale-105">
        <span className="text-2xl">💬</span>
        <span className="hidden md:block font-semibold">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
}