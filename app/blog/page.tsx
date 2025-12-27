"use client";

import { useState } from "react";

const categories = [
  "Invoicing Best Practices",
  "Payments & Collections",
  "Customer Management",
  "Business Growth",
  "Global Invoicing (Africa, EU, USA)",
  "Product Updates",
];

const contentMap: Record<string, JSX.Element> = {
  "Invoicing Best Practices": (
    <>
      <h2 className="text-2xl font-semibold text-navyblue mb-6">
        Invoicing Best Practices
      </h2>
      <p className="text-bluegray text-sm mb-4">
        Professional invoicing is the foundation of healthy cash flow. ClickInvoice
        enables freelancers and businesses to create clear, branded, and compliant
        invoices that reduce disputes and speed up payments.
      </p>
      <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
        <li>Create professional invoices in seconds</li>
        <li>Add company branding, logos, taxes, and discounts</li>
        <li>Support for multiple currencies and timezones</li>
        <li>Instant sharing via email, SMS, or direct links</li>
        <li>Invoices optimized for desktop and mobile viewing</li>
      </ul>
    </>
  ),
  "Payments & Collections": (
    <>
      <h2 className="text-2xl font-semibold text-navyblue mb-6">
        Payments & Collections
      </h2>
      <p className="text-bluegray text-sm mb-4">
        Late payments hurt growth. ClickInvoice combines smart delivery channels
        and customer reminders to ensure invoices are seen and acted on quickly.
      </p>
      <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
        <li>Send invoices via email and SMS</li>
        <li>Increase open rates with SMS delivery</li>
        <li>Track sent and shared invoices</li>
        <li>Reduce payment delays through timely communication</li>
        <li>Timezone-aware delivery for global clients</li>
      </ul>
    </>
  ),
  "Customer Management": (
    <>
      <h2 className="text-2xl font-semibold text-navyblue mb-6">
        Customer Management
      </h2>
      <p className="text-bluegray text-sm mb-4">
        Managing customers manually does not scale. ClickInvoice centralizes all
        customer data to streamline invoicing and communication.
      </p>
      <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
        <li>Save and manage customers in one place</li>
        <li>Reuse customer details for faster invoicing</li>
        <li>Broadcast emails and SMS to customer groups</li>
        <li>Maintain consistent communication with clients</li>
        <li>Reduce errors and duplication</li>
      </ul>
    </>
  ),
  "Business Growth": (
    <>
      <h2 className="text-2xl font-semibold text-navyblue mb-6">
        Business Growth & Operations
      </h2>
      <p className="text-bluegray text-sm mb-4">
        ClickInvoice is built for growing businesses that need structure, clarity,
        and scalability without complexity.
      </p>
      <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
        <li>Create and manage multiple companies under one account</li>
        <li>Separate customers, invoices, and branding per business</li>
        <li>Operate as a freelancer, agency, or multi-entity company</li>
        <li>Maintain professional financial records</li>
      </ul>
    </>
  ),
  "Global Invoicing (Africa, EU, USA)": (
    <>
      <h2 className="text-2xl font-semibold text-navyblue mb-6">
        Global Invoicing (Africa, Europe & USA)
      </h2>
      <p className="text-bluegray text-sm mb-4">
        ClickInvoice is designed for cross-border business. Whether you invoice
        locally or internationally, the platform adapts to your operational needs.
      </p>
      <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
        <li>Multi-currency invoicing</li>
        <li>Timezone support for accurate delivery</li>
        <li>Invoice clients in Africa, Europe, and the USA</li>
        <li>Professional documentation for international clients</li>
      </ul>
    </>
  ),
  "Product Updates": (
    <>
      <h2 className="text-2xl font-semibold text-navyblue mb-6">
        Product Updates & Platform Evolution
      </h2>
      <p className="text-bluegray text-sm mb-4">
        ClickInvoice evolves continuously based on real business needs and user
        feedback.
      </p>
      <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
        <li>Regular feature enhancements</li>
        <li>Performance and security improvements</li>
        <li>New tools for communication and management</li>
        <li>Platform reliability and uptime focus</li>
      </ul>
    </>
  ),
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <main className="bg-white">
      <section className="pt-28 pb-36 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28">
              <h2 className="text-sm font-semibold text-[#0A66C2] uppercase mb-6">
                Categories
              </h2>
              <ul className="space-y-3 text-sm font-medium">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-md cursor-pointer transition
                      ${
                        activeCategory === cat
                          ? "bg-[#E8F3FF] text-[#0A66C2]"
                          : "text-bluegray hover:bg-[#E8F3FF] hover:text-[#0A66C2]"
                      }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="lg:col-span-9 space-y-24">
            <header>
              <h1 className="text-4xl md:text-5xl font-semibold text-navyblue">
                ClickInvoice Knowledge Hub
              </h1>
              <p className="mt-4 text-base md:text-lg text-bluegray max-w-3xl">
                Everything you need to invoice professionally, manage customers,
                get paid faster, and scale your business globally.
              </p>
            </header>

            {/* ACTIVE CATEGORY CONTENT */}
            <section>{contentMap[activeCategory]}</section>

            {/* CTA */}
            <section className="border-t pt-16">
              <h3 className="text-2xl font-semibold text-navyblue">
                Start invoicing professionally today
              </h3>
              <p className="mt-3 text-bluegray max-w-2xl">
                Join businesses across Africa, Europe, and the USA using ClickInvoice
                to get paid faster and manage customers better.
              </p>

              <button className="mt-6 px-6 py-3 bg-[#0A66C2] text-white rounded-md text-sm font-medium hover:bg-[#004182]">
                Get Started Free
              </button>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
