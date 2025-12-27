import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – ClickInvoice",
  description:
    "Frequently asked questions about ClickInvoice. Learn how invoicing, payments, customer management, and subscriptions work.",
};

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What is ClickInvoice?",
        a: "ClickInvoice is a professional invoicing and customer management platform designed for freelancers, startups, and growing businesses. It helps you create invoices, manage customers, send invoices via email or SMS, and get paid faster.",
      },
      {
        q: "Who is ClickInvoice for?",
        a: "ClickInvoice is built for freelancers, small businesses, agencies, and companies operating in Africa, Europe, and the United States that need a simple but powerful invoicing solution.",
      },
      {
        q: "Is ClickInvoice free to use?",
        a: "Yes. ClickInvoice offers a free plan that allows you to create up to 3 invoices. You can upgrade anytime as your business grows.",
      },
    ],
  },
  {
    category: "Invoices & Payments",
    items: [
      {
        q: "How do I send invoices to clients?",
        a: "You can send invoices directly via email or SMS, share a secure invoice link, or download and share invoices through any platform of your choice.",
      },
      {
        q: "Can I create invoices in different currencies?",
        a: "Yes. ClickInvoice supports multi-currency invoicing, making it easy to invoice clients across different countries.",
      },
      {
        q: "Does ClickInvoice support multiple timezones?",
        a: "Yes. Invoice delivery and timestamps are timezone-aware to ensure accuracy for international clients.",
      },
    ],
  },
  {
    category: "Customer Management",
    items: [
      {
        q: "Can I save my customers?",
        a: "Yes. ClickInvoice allows you to save and manage customers, reuse their details, and quickly generate invoices without re-entering information.",
      },
      {
        q: "Can I send messages to multiple customers at once?",
        a: "Yes. You can broadcast emails and SMS messages to selected customers for updates, promotions, or reminders.",
      },
    ],
  },
  {
    category: "Business & Accounts",
    items: [
      {
        q: "Can I manage multiple businesses under one account?",
        a: "Yes. ClickInvoice supports multi-company management, allowing you to create and manage multiple businesses under a single user account.",
      },
      {
        q: "Can I separate invoices and customers per business?",
        a: "Absolutely. Each business maintains its own customers, invoices, and branding for proper organization.",
      },
    ],
  },
  {
    category: "Plans & Billing",
    items: [
      {
        q: "How much does ClickInvoice cost?",
        a: "ClickInvoice offers Free, Basic, and Premium plans. Pricing is transparent and designed to scale with your business needs.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Yes. You can upgrade or downgrade your plan at any time from your dashboard.",
      },
      {
        q: "Is my payment information secure?",
        a: "Yes. ClickInvoice uses secure payment processing and industry-standard security practices to protect your data.",
      },
    ],
  },
  {
    category: "Support & Security",
    items: [
      {
        q: "How can I contact ClickInvoice support?",
        a: "You can reach our support team via email at support@clickinvoice.app or through the contact page.",
      },
      {
        q: "Who owns ClickInvoice?",
        a: "ClickInvoice is a product of ClickBase Technologies Ltd, built to serve businesses globally with reliable financial tools.",
      },
      {
        q: "Is my data safe on ClickInvoice?",
        a: "Yes. We prioritize data security, privacy, and system reliability to ensure your business information is protected.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-20 border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0A66C2]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-gray-600 max-w-3xl mx-auto">
            Answers to common questions about ClickInvoice, billing, features,
            and how the platform works.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {faqs.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <details
                    key={i}
                    className="group border rounded-lg px-6 py-4 cursor-pointer"
                  >
                    <summary className="flex justify-between items-center text-sm font-medium text-gray-900 list-none">
                      {item.q}
                      <span className="ml-4 text-[#0A66C2] group-open:rotate-45 transition">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3F6F8] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Still have questions?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our team is happy to help. Reach out to us anytime and we’ll respond
            as quickly as possible.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-6 py-3 bg-[#0A66C2] text-white rounded-md text-sm font-medium hover:bg-[#004182] transition"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
