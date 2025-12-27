"use client";

import {
  DocumentTextIcon,
  PaperAirplaneIcon,
  UsersIcon,
  MegaphoneIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  ClockIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Create Professional Invoices",
    desc: "Generate clean, branded invoices in seconds with taxes, discounts, due dates, and invoice numbers.",
    icon: DocumentTextIcon,
  },
  {
    title: "Send Invoices via Email & SMS",
    desc: "Deliver invoices directly to clients by email or SMS with automatic links for fast viewing and payment.",
    icon: PaperAirplaneIcon,
  },
  {
    title: "Save & Manage Clients",
    desc: "Store customer details once, reuse them anytime, and maintain a complete billing history per client.",
    icon: UsersIcon,
  },
  {
    title: "Broadcast Emails & SMS",
    desc: "Send announcements, promotions, or payment reminders to all or selected customers in one action.",
    icon: MegaphoneIcon,
  },
  {
    title: "Share Invoices Anywhere",
    desc: "Share invoices via WhatsApp, social platforms, or direct links—no account required for clients.",
    icon: GlobeAltIcon,
  },
  {
    title: "Multiple Businesses, One Account",
    desc: "Create and manage multiple companies under a single user account with separate branding and records.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Multi-Currency Support",
    desc: "Invoice clients in local and international currencies across Africa, Europe, and the United States.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Timezone-Aware Billing",
    desc: "Automatic timezone handling ensures accurate invoice dates and reminders across regions.",
    icon: ClockIcon,
  },
  {
    title: "Profile & Account Management",
    desc: "Manage your personal profile, security, and preferences from one centralized dashboard.",
    icon: UserCircleIcon,
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A66C2] mb-4">
          Powerful invoicing, built for modern businesses
        </h1>
        <p className="text-base sm:text-lg text-bluegray max-w-3xl mx-auto">
          ClickInvoice gives freelancers, startups, and growing businesses
          everything they need to invoice professionally, manage customers,
          and get paid faster—across Africa, Europe, and the United States.
        </p>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white rounded-full mb-5">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-navyblue mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-bluegray leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A66C2] py-20 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Ready to Invoice Like a Pro?
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Join thousands of businesses using ClickInvoice to create professional invoices, manage customers, and get paid faster.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_APP_SIGNUP}
          className="inline-block px-6 py-3 bg-white text-[#0A66C2] font-medium rounded-md hover:bg-gray-100 transition"
        >
          Start Invoicing Free
        </a>
      </section>
    </main>
  );
}
