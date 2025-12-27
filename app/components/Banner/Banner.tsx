"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { getImagePath } from "../../../lib/utils";

const Banner = () => {
  const router = useRouter();

  const handleSignup = () => {
    const signupUrl = process.env.NEXT_PUBLIC_APP_SIGNUP;
    if (signupUrl) {
      router.push(signupUrl);
    } else {
      console.error("NEXT_PUBLIC_APP_SIGNUP is not defined");
    }
  };

  const handleLearnMore = () => {
    router.push("/features");
  };

  return (
    <main>
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 text-center">
          {/* Hero Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-[#0A66C2] leading-tight tracking-tight">
            Create and send invoices <br /> in seconds with ClickInvoice
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            ClickInvoice is the simple, powerful platform for freelancers and
            businesses to create professional invoices, track payments, and get
            paid faster — without the hassle.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center flex-wrap gap-3">
            <button
              type="button"
              onClick={handleSignup}
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium text-white bg-[#0A66C2] hover:bg-[#004182] rounded-md transition"
            >
              Start Invoicing Free
            </button>

            <button
              type="button"
              onClick={handleLearnMore}
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium text-[#0A66C2] border border-gray-300 hover:bg-[#0A66C2] hover:text-white rounded-md transition"
            >
              Learn More
            </button>
          </div>

          {/* Banner Image */}
          <div className="mt-8">
            <Image
              src={getImagePath("/assets/banner/dashboard.png")}
              alt="ClickInvoice dashboard showing invoices and payments"
              width={1200}
              height={598}
              className="mx-auto rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
