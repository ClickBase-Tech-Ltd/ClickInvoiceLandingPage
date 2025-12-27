import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support – ClickInvoice",
  description:
    "Get help with ClickInvoice. Access support resources, FAQs, and contact our team for invoicing, billing, and account assistance.",
};

export default function SupportPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-20 border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0A66C2]">
            ClickInvoice Support
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            We’re here to help you invoice confidently, manage customers
            efficiently, and keep your business running smoothly.
          </p>
        </div>
      </section>

      {/* SUPPORT OPTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Self Help */}
          <div className="border rounded-xl p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Self-Help Resources
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Find answers quickly using our guides, FAQs, and best practices.
            </p>
            <Link
              href="/faq"
              className="inline-block px-4 py-2 text-sm font-medium text-[#0A66C2] border border-[#0A66C2] rounded-md hover:bg-[#0A66C2] hover:text-white transition"
            >
              Visit FAQ
            </Link>
          </div>

          {/* Contact Support */}
          <div className="border rounded-xl p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Contact Support
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Need direct assistance? Our support team is ready to help.
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#0A66C2] rounded-md hover:bg-[#004182] transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Account & Billing */}
          <div className="border rounded-xl p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Account & Billing
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Questions about plans, invoices, or subscriptions? We’ve got you
              covered.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-4 py-2 text-sm font-medium text-[#0A66C2] border border-[#0A66C2] rounded-md hover:bg-[#0A66C2] hover:text-white transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE CAN HELP WITH */}
      <section className="bg-[#F3F6F8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            What We Can Help You With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-gray-600">
            <ul className="space-y-4 list-disc pl-6">
              <li>Creating and sending invoices</li>
              <li>Email and SMS invoice delivery</li>
              <li>Customer and business management</li>
              <li>Multi-currency and timezone support</li>
              <li>Managing multiple companies under one account</li>
            </ul>

            <ul className="space-y-4 list-disc pl-6">
              <li>Plan upgrades and billing questions</li>
              <li>Account access and profile management</li>
              <li>Platform reliability and usage guidance</li>
              <li>Product updates and new features</li>
              <li>General troubleshooting and best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUPPORT COMMITMENT */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Support Commitment
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            ClickInvoice is built and maintained by{" "}
            <span className="font-medium">ClickBase Technologies Ltd</span>.
            We are committed to providing reliable support, clear communication,
            and continuous improvements based on real business needs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A66C2] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-semibold">
            Need help right now?
          </h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Reach out to our support team and we’ll assist you as quickly as
            possible.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-6 py-3 bg-white text-[#0A66C2] rounded-md font-medium hover:bg-gray-100 transition"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
