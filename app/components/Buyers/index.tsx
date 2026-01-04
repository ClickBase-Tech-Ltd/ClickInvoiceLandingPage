import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

interface CardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
}

const cardData: CardDataType[] = [
  {
    imgSrc: getImagePath("/assets/buyers/ourbuyers.svg"),
    percent: "500k+",
    heading: "Invoices Created",
    subheading:
      "Users have generated over half a million professional invoices effortlessly.",
  },
  {
    imgSrc: getImagePath("/assets/buyers/projectcompleted.svg"),
    percent: "4x",
    heading: "Faster Payments",
    subheading:
      "Businesses get paid up to 4 times faster with automated reminders and easy online payments.",
  },
  {
    imgSrc: getImagePath("/assets/buyers/happybuyers.svg"),
    percent: "95%",
    heading: "Satisfied Users",
    subheading:
      "Freelancers and businesses love the simple, reliable invoicing experience.",
  },
  {
    imgSrc: getImagePath("/assets/buyers/teammembers.svg"),
    percent: "50k+",
    heading: "Businesses Empowered",
    subheading:
      "Helping thousands of freelancers and small teams streamline billing.",
  },
];

const Buyers = () => {
  return (
    <section className="mx-auto max-w-7xl py-16 px-6 text-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6">
        {cardData.map((item, i) => (
          <article
            key={i}
            className="flex flex-col justify-center items-center p-4 hover:shadow-lg transition rounded-lg"
          >
            <div className="flex justify-center items-center border border-gray-200 p-3 w-12 h-12 rounded-full bg-gray-50">
              <Image
                src={item.imgSrc}
                alt={item.heading}
                width={32}
                height={32}
              />
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[#0A66C2]">
              {item.percent}
            </h2>
            <h3 className="mt-2 text-lg sm:text-xl font-medium text-gray-900">
              {item.heading}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-gray-600 max-w-xs">
              {item.subheading}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Buyers;
