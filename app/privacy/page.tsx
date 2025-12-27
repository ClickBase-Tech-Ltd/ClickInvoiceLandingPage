"use client";

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="pt-28 pb-32 max-w-4xl mx-auto px-6 space-y-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-navyblue text-center">
          Privacy Policy
        </h1>
        <p className="text-bluegray text-base md:text-lg text-center">
          Your privacy is important to us. This policy explains how ClickInvoice collects, uses, and protects your information.
        </p>

        {/* Information Collection */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Information We Collect</h2>
          <p className="text-bluegray text-sm mb-4">
            ClickInvoice collects information to provide better services to our users. The types of information we collect include:
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li><strong>Account Information:</strong> Name, email, company details, and billing information.</li>
            <li><strong>Invoices & Transactions:</strong> Invoice data, payments, and financial history.</li>
            <li><strong>Customer Information:</strong> Data you store about your clients.</li>
            <li><strong>Usage Data:</strong> How you interact with our platform, including features used and errors encountered.</li>
            <li><strong>Cookies & Tracking:</strong> Session cookies and analytics data to improve our service.</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">How We Use Your Information</h2>
          <p className="text-bluegray text-sm mb-4">
            We use your information to operate, improve, and secure ClickInvoice services:
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li>Process invoices and payments efficiently.</li>
            <li>Provide customer support and communicate important updates.</li>
            <li>Send newsletters, marketing materials, and promotional offers (with consent).</li>
            <li>Monitor and analyze usage trends to enhance platform features.</li>
            <li>Ensure security and prevent fraud or unauthorized access.</li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Information Sharing</h2>
          <p className="text-bluegray text-sm mb-4">
            We respect your privacy and do not sell your data. We may share information only in the following cases:
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li>With service providers who help us run the platform (hosting, analytics, email services).</li>
            <li>When legally required or to comply with regulatory obligations.</li>
            <li>In connection with mergers, acquisitions, or business transfers, with notice to affected users.</li>
            <li>To protect rights, property, or safety of ClickInvoice, users, or others.</li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Data Security</h2>
          <p className="text-bluegray text-sm mb-4">
            We implement technical, administrative, and physical measures to protect your data from unauthorized access, disclosure, or loss. While we strive to protect your information, no method of transmission over the internet is completely secure.
          </p>
        </section>

        {/* User Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Your Rights</h2>
          <p className="text-bluegray text-sm mb-4">
            You have the right to access, correct, or delete your personal data stored on ClickInvoice. You can:
          </p>
          <ul className="list-disc pl-6 text-bluegray text-sm space-y-2">
            <li>Request a copy of your stored information.</li>
            <li>Update or correct inaccurate or incomplete information.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Opt-out of marketing communications at any time.</li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Cookies & Analytics</h2>
          <p className="text-bluegray text-sm mb-4">
            ClickInvoice uses cookies and analytics tools to enhance user experience, track usage patterns, and improve our services. You can manage cookies through your browser settings.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Changes to This Privacy Policy</h2>
          <p className="text-bluegray text-sm mb-4">
            We may update this policy periodically. Users will be notified of material changes via email or announcements within ClickInvoice. Continued use of the platform constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-navyblue mb-4">Contact Us</h2>
          <p className="text-bluegray text-sm mb-4">
            If you have questions or concerns about this Privacy Policy, you can contact our support team:
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
