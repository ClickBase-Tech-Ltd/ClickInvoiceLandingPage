// import Image from "next/image";
// import Link from "next/link";
// import { getImagePath } from "../../../lib/utils";

// interface datatype {
//   imgSrc: string;
//   country: string;
//   paragraph: string;
// }

// const Aboutdata: datatype[] = [
//   {
//     imgSrc: getImagePath("/assets/provide/marketing.svg"),
//     country: "Marketing",
//     paragraph: "Follow a hashtag total posts, videos",
//   },
//   {
//     imgSrc: getImagePath("/assets/provide/graphic.svg"),
//     country: "Graphic design",
//     paragraph: "Follow a hashtag total posts, videos",
//   },
//   {
//     imgSrc: getImagePath("/assets/provide/heaking.svg"),
//     country: "Heaking",
//     paragraph: "Follow a hashtag total posts, videos",
//   },
//   {
//     imgSrc: getImagePath("/assets/provide/uidesign.svg"),
//     country: "UI/UX Design",
//     paragraph: "Follow a hashtag total posts, videos",
//   },
// ];

// const Provide = () => {
//   return (
//     <div id="services">
//       <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* COLUMN-1 */}
//           <div className="col-span-6 flex justify-center">
//             <div className="flex flex-col align-middle justify-center p-10">
//               <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
//                 We provide that service.
//               </p>
//               <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//                 quae ab illo inventore veritatis et quasi architecto beatae
//                 vitae dicta sunt explicabo
//               </h4>
//               <Link
//                 href={"/"}
//                 className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
//               >
//                 Learn more{" "}
//                 <Image
//                   src={getImagePath("/assets/provide/arrow.svg")}
//                   alt={"arrow"}
//                   width={20}
//                   height={20}
//                 />
//               </Link>
//             </div>
//           </div>

//           <div className="lg:col-span-1"></div>

//           {/* COLUMN-2 */}
//           <div className="col-span-6 lg:col-span-5">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
//               {Aboutdata.map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
//                 >
//                   <Image
//                     src={item.imgSrc}
//                     alt={item.imgSrc}
//                     width={64}
//                     height={64}
//                     className="mb-5"
//                   />
//                   <h4 className="text-2xl font-semibold">{item.country}</h4>
//                   <h4 className="text-lg font-normal text-bluegray my-2">
//                     {item.paragraph}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Provide;

import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "../../../lib/utils";

interface datatype {
  imgSrc: string;
  country: string; // renamed in code to "feature" for clarity, but kept as-is for consistency
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    // imgSrc: getImagePath("/assets/features/create-invoice.svg"), // icon of invoice creation
    imgSrc: getImagePath("/assets/provide/marketing.svg"),
    country: "Create Professional Invoices",
    paragraph: "Generate beautiful, customizable invoices in seconds with your branding, line items, taxes, and discounts.",
  },
  {
    // imgSrc: getImagePath("/assets/features/track-payments.svg"), // icon of payment tracking
    imgSrc: getImagePath("/assets/provide/graphic.svg"),
    country: "Track Payments & Reminders",
    paragraph: "See invoice status in real-time, send automatic payment reminders, and get paid faster online.",
  },
  {
    // imgSrc: getImagePath("/assets/features/client-portal.svg"), // icon of client dashboard or portal
    imgSrc: getImagePath("/assets/provide/heaking.svg"),
    country: "Client Portal & History",
    paragraph: "Let clients view, download, and pay invoices securely from their own portal — no more chasing.",
  },
  {
    // imgSrc: getImagePath("/assets/features/reports.svg"), // icon of charts or reports
    imgSrc: getImagePath("/assets/provide/uidesign.svg"),
    country: "Detailed Reports & Insights",
    paragraph: "Get profit/loss reports, aging summaries, and tax breakdowns to stay on top of your finances.",
  },
];

const Provide = () => {
  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-3xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                Everything you need to get paid faster.
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                ClickInvoice makes invoicing simple, professional, and efficient — so you can focus on your business, not paperwork. Create, send, track, and get paid with ease.
              </h4>
              <Link
                href={"/features"} // or "/pricing" — update as needed
                className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
              >
                Explore All Features{" "}
                <Image
                  src={getImagePath("/assets/provide/arrow.svg")}
                  alt={"arrow"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.country}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
