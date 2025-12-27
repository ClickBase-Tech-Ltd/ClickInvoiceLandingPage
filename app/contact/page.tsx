"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="pt-32 pb-12 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A66C2]">
          Contact ClickInvoice
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Have questions, feedback, or partnership inquiries? Our team is here to help you succeed.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-32">

        {/* Sidebar / Info */}
        <aside className="lg:col-span-4">
          <div className="space-y-10 sticky top-28">
            
            {/* Get in Touch */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team is ready to assist you with support, feedback, or partnerships.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-gray-600 text-sm">
              <p><strong>Email:</strong> support@clickinvoice.app</p>
              <p><strong>Phone:</strong> +250 794 159 137</p>
              <p><strong>Address:</strong> SH1 RD99, Butare, Rwanda</p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://facebook.com/clickinvoice" target="_blank" className="text-[#0A66C2] font-medium hover:underline">Facebook</a>
                <a href="https://twitter.com/clickinvoice" target="_blank" className="text-[#0A66C2] font-medium hover:underline">Twitter</a>
                <a href="https://instagram.com/clickinvoice" target="_blank" className="text-[#0A66C2] font-medium hover:underline">Instagram</a>
              </div>
            </div>
          </div>
        </aside>

        {/* Contact Form */}
        <div className="lg:col-span-8 bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] shadow-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] shadow-sm"
                required
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] shadow-sm"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] shadow-sm resize-none"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#0A66C2] text-white font-semibold rounded-lg hover:bg-[#004182] transition shadow-md"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8F3FF] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0A66C2]">Need immediate assistance?</h2>
          <p className="mt-4 text-gray-600">
            Our support team is here to help you get started quickly and solve any issues.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_APP_SIGNUP}
            className="inline-block mt-6 px-8 py-3 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition"
          >
            Start Invoicing Free
          </a>
        </div>
      </section>

    </main>
  );
}
