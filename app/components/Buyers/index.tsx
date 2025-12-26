// import Image from "next/image";
// import { getImagePath } from "../../../lib/utils";

// interface cardDataType {
//   imgSrc: string;
//   heading: string;
//   percent: string;
//   subheading: string;
// }

// const cardData: cardDataType[] = [
//   {
//     imgSrc: getImagePath("/assets/buyers/ourbuyers.svg"),
//     percent: "80k",
//     heading: "Our buyers",
//     subheading: "Follow a hashtag growth total posts, videos and images.",
//   },
//   {
//     imgSrc: getImagePath("/assets/buyers/projectcompleted.svg"),
//     percent: "90k",
//     heading: "Project completed",
//     subheading: "Follow a hashtag growth total posts, videos and images.",
//   },
//   {
//     imgSrc: getImagePath("/assets/buyers/happybuyers.svg"),
//     percent: "80%",
//     heading: "Happy buyers",
//     subheading: "Follow a hashtag growth total posts, videos and images.",
//   },
//   {
//     imgSrc: getImagePath("/assets/buyers/teammembers.svg"),
//     percent: "50+",
//     heading: "Team members",
//     subheading: "Follow a hashtag growth total posts, videos and images.",
//   },
// ];

// const Buyers = () => {
//   return (
//     <div className="mx-auto max-w-7xl py-16 px-6">
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5">
//         {cardData.map((items, i) => (
//           <div className="flex flex-col justify-center items-center" key={i}>
//             <div className="flex justify-center border border-border  p-2 w-10 rounded-lg">
//               <Image
//                 src={items.imgSrc}
//                 alt={items.imgSrc}
//                 width={30}
//                 height={30}
//               />
//             </div>
//             <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
//               {items.percent}
//             </h2>
//             <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
//               {items.heading}
//             </h3>
//             <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
//               {items.subheading}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Buyers;


import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

interface cardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    // imgSrc: getImagePath("/assets/stats/invoices-sent.svg"),  // e.g., icon of invoices flying out
    imgSrc: getImagePath("/assets/buyers/ourbuyers.svg"),
    percent: "500k+",
    heading: "Invoices Created",
    subheading: "Users have generated over half a million professional invoices effortlessly.",
  },
  {
    // imgSrc: getImagePath("/assets/stats/payments-received.svg"),  // e.g., money flow icon
    imgSrc: getImagePath("/assets/buyers/projectcompleted.svg"),
    percent: "4x",
    heading: "Faster Payments",
    subheading: "Businesses get paid up to 4 times faster with automated reminders and easy online payments.",
  },
  {
    // imgSrc: getImagePath("/assets/stats/happy-users.svg"),  // e.g., smiling user icon
    imgSrc: getImagePath("/assets/buyers/happybuyers.svg"),
    percent: "95%",
    heading: "Satisfied Users",
    subheading: "Freelancers and businesses love the simple, reliable invoicing experience.",
  },
  {
    // imgSrc: getImagePath("/assets/stats/businesses-helped.svg"),  // e.g., team or growth icon
    imgSrc: getImagePath("/assets/buyers/teammembers.svg"),
    percent: "50k+",
    heading: "Businesses Empowered",
    subheading: "Helping thousands of freelancers and small teams streamline billing.",
  },
];

const Buyers = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5">
        {cardData.map((items, i) => (
          <div className="flex flex-col justify-center items-center" key={i}>
            <div className="flex justify-center border border-border p-2 w-10 rounded-lg">
              <Image
                src={items.imgSrc}
                alt={items.heading}
                width={30}
                height={30}
              />
            </div>
            <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
              {items.percent}
            </h2>
            <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
              {items.heading}
            </h3>
            <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
              {items.subheading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyers;