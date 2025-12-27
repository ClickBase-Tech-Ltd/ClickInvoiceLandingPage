import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

const Newsletter = () => {
  return (
    <section className="relative z-10 mt-16 mb-16">
      <div className="mx-auto max-w-7xl bg-[#0A66C2] rounded-3xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-x-12">
          {/* Left Illustration */}
          <div className="hidden lg:flex justify-end relative p-10">
            <Image
              src={getImagePath("/assets/newsletter/bgImage.png")}
              alt="invoice background"
              width={588}
              height={334}
            />
            <div className="absolute top-10 right-0">
              <Image
                src={getImagePath("/assets/newsletter/leaf.svg")}
                alt="decorative leaf"
                width={81}
                height={81}
              />
            </div>
            <div className="absolute bottom-8 left-2">
              <Image
                src={getImagePath("/assets/newsletter/circel.svg")}
                alt="decorative circle"
                width={30}
                height={30}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white leading-snug">
              Stay Ahead with ClickInvoice
            </h3>
            <p className="text-base md:text-lg text-[#E6F0FA] mb-6">
              Join thousands of freelancers and businesses receiving weekly insights, tips for faster payments, better invoicing practices, and exclusive ClickInvoice updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                type="email"
                name="email"
                className="flex-1 py-3 px-4 text-sm rounded-l-lg focus:outline-none"
                placeholder="Enter your email address"
              />
              <button className="bg-[#0056A3] hover:bg-[#004080] transition text-white font-medium py-3 px-5 rounded-r-lg flex items-center justify-center">
                <span className="mr-2">Subscribe</span>
                <Image
                  src={getImagePath("/assets/newsletter/plane.svg")}
                  alt="subscribe icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
