export const metadata = {
  title: "About Us – ClickInvoice",
  description:
    "Learn about ClickInvoice, our mission, vision, and the company behind the platform—building modern invoicing and customer management tools for businesses globally.",
};

export default function AboutUsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="pt-32 pb-20 border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0A66C2]">
            About ClickInvoice
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            ClickInvoice helps freelancers and businesses invoice professionally,
            manage customers efficiently, and get paid faster—anywhere in the world.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                ClickInvoice is a modern invoicing and customer management
                platform built for freelancers, startups, and growing businesses
                that need clarity, structure, and speed.
              </p>
              <p>
                The platform is a product of <strong>ClickBase Technologies Ltd</strong>,
                a software company focused on building practical, scalable tools
                that help businesses operate more efficiently.
              </p>
              <p>
                Together, we focus on removing friction from billing,
                communication, and cash flow—so businesses can focus on growth.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Solve
            </h2>
            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed list-disc pl-6">
              <li>Unprofessional or inconsistent invoicing processes</li>
              <li>Manual and fragmented customer record keeping</li>
              <li>Delayed payments caused by poor invoice delivery</li>
              <li>Difficulty managing multiple businesses under one account</li>
              <li>Lack of operational structure for growing companies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-[#F3F6F8] py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with simple, reliable tools that improve
              cash flow, strengthen customer relationships, and bring operational
              clarity—without unnecessary complexity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become one of the most trusted invoicing and customer management
              platforms for modern businesses operating locally and globally.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h4 className="text-lg font-semibold text-[#0A66C2] mb-2">
                Professionalism
              </h4>
              <p className="text-gray-600 text-sm">
                Every feature is designed to help businesses appear credible,
                organized, and trustworthy to their clients.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#0A66C2] mb-2">
                Simplicity
              </h4>
              <p className="text-gray-600 text-sm">
                Powerful tools should feel intuitive. We remove friction instead
                of adding complexity.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#0A66C2] mb-2">
                Reliability
              </h4>
              <p className="text-gray-600 text-sm">
                Businesses depend on us. Stability, accuracy, and consistency are
                non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL FOCUS */}
      <section className="border-t py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Built for Global Business
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            ClickInvoice supports businesses operating across borders with
            multi-currency invoicing, timezone-aware delivery, and professional
            documentation suitable for clients in Africa, Europe, and the USA.
          </p>
        </div>
      </section>

      {/* PARENT COMPANY NOTE */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            ClickInvoice is proudly built and maintained by{" "}
            <strong>ClickBase Technologies Ltd</strong>, a technology company
            focused on creating modern software solutions for businesses across
            emerging and global markets.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A66C2] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-semibold">
            Build a more professional business
          </h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join businesses across Africa, Europe, and the USA using ClickInvoice
            to invoice smarter, manage customers better, and get paid faster.
          </p>

          <a
            href={process.env.NEXT_PUBLIC_APP_SIGNUP}
            className="inline-block mt-8 px-6 py-3 bg-white text-[#0A66C2] rounded-md font-medium hover:bg-gray-100 transition"
          >
            Start Invoicing Free
          </a>
        </div>
      </section>

    </main>
  );
}
