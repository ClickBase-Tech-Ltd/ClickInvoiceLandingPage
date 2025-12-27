"use client";

import Link from "next/link";

// Footer Links Data
interface FooterSection {
  id: number;
  links: string[];
}

const footerSections: FooterSection[] = [
  {
    id: 1,
    links: ["Home", "Features", "Pricing", "Blog"],
  },
  {
    id: 2,
    links: ["About Us", "Contact", "Support", "FAQ"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A66C2] text-white pt-12 pb-8 lg:pt-16 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-white text-2xl lg:text-3xl font-sans">
              <span className="font-bold">Click</span>Invoice
            </h1>

            <p className="text-xs text-blue-100 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              ClickInvoice is a product of{" "}
              <span className="font-medium">ClickBase Technologies Ltd</span>,
              built to help businesses invoice professionally and get paid faster.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-sm">
              <Link
                href="https://facebook.com/clickinvoice"
                className="hover:text-blue-200"
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com/clickinvoice"
                className="hover:text-blue-200"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com/clickinvoice"
                className="hover:text-blue-200"
              >
                Instagram
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div
              key={section.id}
              className="lg:col-span-2 text-center lg:text-left"
            >
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm hover:text-blue-200 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-3 text-center lg:text-left">
            <p className="text-sm text-gray-100">
              SH1 RD99, Butare, Rwanda
            </p>
            <p className="text-sm text-gray-100">
              +250794159137
            </p>
            <p className="text-sm text-gray-100">
              support@clickinvoice.app
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 mt-10 pt-6">

          {/* Legal */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            <p className="text-xs text-gray-100">
              © 2025 ClickInvoice, a product of ClickBase Technologies Ltd. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-gray-100 hover:text-blue-200"
              >
                Privacy Policy
              </Link>
              <span className="hidden lg:block h-4 border-l border-blue-400"></span>
              <Link
                href="/terms"
                className="text-xs text-gray-100 hover:text-blue-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
