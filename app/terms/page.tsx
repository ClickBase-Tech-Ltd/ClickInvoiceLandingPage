"use client";

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="pt-28 pb-32 max-w-4xl mx-auto px-6 space-y-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-navyblue text-center">
          Terms & Conditions
        </h1>
        <p className="text-bluegray text-base md:text-lg text-center">
          These Terms & Conditions govern your use of ClickInvoice. Please read them carefully before using our services.
        </p>

        {/* Acceptance */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Acceptance of Terms</h2>
          <p className="text-bluegray text-sm">
            By accessing or using ClickInvoice, you agree to be bound by these Terms & Conditions, our Privacy Policy, and any additional terms applicable to specific features. If you do not agree, you may not use the platform.
          </p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Services Provided</h2>
          <p className="text-bluegray text-sm mb-4">
            ClickInvoice provides an invoicing, customer management, and business operations platform. Features may include invoice creation, payment tracking, multi-company management, and analytics.
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li>Access to invoicing and billing tools</li>
            <li>Customer and business management features</li>
            <li>Analytics, reporting, and insights</li>
            <li>Email and SMS delivery for invoices</li>
            <li>Multi-currency and timezone support</li>
          </ul>
        </section>

        {/* User Accounts */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">User Accounts</h2>
          <p className="text-bluegray text-sm mb-4">
            To use ClickInvoice, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li>Provide accurate and current information during registration</li>
            <li>Notify us immediately of any unauthorized access or security breach</li>
            <li>Ensure your account is used only in accordance with these Terms</li>
          </ul>
        </section>

        {/* Prohibited Activities */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Prohibited Activities</h2>
          <p className="text-bluegray text-sm mb-4">
            Users are prohibited from misusing the platform. Examples include:
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li>Engaging in fraudulent or illegal activities</li>
            <li>Attempting to hack, reverse-engineer, or disrupt ClickInvoice services</li>
            <li>Spamming or sending unsolicited communications through our system</li>
            <li>Infringing on intellectual property or rights of others</li>
          </ul>
        </section>

        {/* Payment Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Payment Terms</h2>
          <p className="text-bluegray text-sm mb-4">
            Subscription fees for ClickInvoice plans are billed monthly or annually as chosen by the user. Payments are non-refundable except where required by law.
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li>Free plan users are limited to a maximum of 3 invoices</li>
            <li>Basic and Premium plans provide higher limits and additional features</li>
            <li>Failure to pay subscription fees may result in suspension of service</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Intellectual Property</h2>
          <p className="text-bluegray text-sm mb-4">
            ClickInvoice retains ownership of all content, trademarks, logos, and software. Users may not copy, distribute, or create derivative works without prior permission.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Limitation of Liability</h2>
          <p className="text-bluegray text-sm mb-4">
            ClickInvoice shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the platform. Users agree to use the service at their own risk.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Termination</h2>
          <p className="text-bluegray text-sm mb-4">
            We may suspend or terminate user accounts for violations of these Terms or inactivity. Users may also terminate their accounts at any time.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Changes to Terms</h2>
          <p className="text-bluegray text-sm mb-4">
            ClickInvoice may update these Terms & Conditions periodically. Users will be notified of material changes through email or announcements. Continued use constitutes acceptance of updated terms.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Contact Us</h2>
          <p className="text-bluegray text-sm mb-4">
            For questions or concerns regarding these Terms, please contact ClickInvoice:
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li>Email: <strong>support@clickinvoice.app</strong></li>
            <li>Phone: <strong>+250 794 159 137</strong></li>
            <li>Address: <strong>SH1 RD99, Butare, Rwanda</strong></li>
          </ul>
        </section>
      </section>
    </main>
  );
}
