import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96">
              Create and send invoices <br /> in seconds with ClickInvoice.
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              ClickInvoice is the simple, powerful platform for freelancers and businesses to create professional invoices, track payments, and get paid faster — without the hassle.
            </p>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
            >
              Start Invoicing Free
            </button>
            <button
              type="button"
              className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
            >
              Learn More
            </button>
          </div>

          {/* <Image
            src={getImagePath("/assets/banner/invoice-dashboard.svg")}  // Update this to your dashboard/invoice screenshot
            alt="ClickInvoice dashboard showing invoices and payments"
            width={1200}
            height={598}
          /> */}
          <Image
            src={getImagePath("/assets/banner/dashboard.png")}
            alt="banner-image"
            width={1200}
            height={598}
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;