import Buyers from "../components/Buyers";
import Newsletter from "../components/Newsletter/Newsletter";

export const metadata = {
  title: "Pricing – ClickInvoice",
  description:
    "Simple, transparent pricing for freelancers and businesses. Start free, upgrade anytime, and scale your invoicing with ClickInvoice.",
};

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "For individuals getting started",
    features: [
      "Up to 3 invoices",
      "Basic customer management",
      "Email support",
      "Advanced analytics",
    ],
    cta: "Current Plan",
    highlighted: false,
    disabled: true,
  },
  {
    name: "Basic",
    price: "$2.5",
    period: "/month",
    description: "For freelancers and small businesses",
    features: [
      "Up to 100 invoices per month",
      "Basic customer management",
      "Email support",
      "Advanced analytics",
      "Multi-tenant support",
    ],
    cta: "Upgrade Now",
    highlighted: true,
    disabled: false,
  },
  {
    name: "Premium",
    price: "$6.2",
    period: "/month",
    description: "For growing teams and agencies",
    features: [
      "Unlimited invoices",
      "Advanced customer & item management",
      "Priority email & chat support",
      "Advanced analytics & reports",
      "Multi-tenant / company support",
    ],
    cta: "Upgrade Now",
    highlighted: false,
    disabled: false,
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <section className="pt-24 pb-16 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-navyblue">
          Simple pricing that grows with your business
        </h1>
        <p className="mt-4 text-base text-bluegray">
          Choose a plan that fits your needs. Upgrade or downgrade at any time.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`border rounded-xl p-8 flex flex-col justify-between ${
                plan.highlighted
                  ? "border-blue shadow-sm"
                  : "border-lightgrey"
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold text-navyblue">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-bluegray">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <span className="text-3xl font-semibold text-navyblue">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-bluegray">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-bluegray flex items-start"
                    >
                      <span className="mr-2 text-blue">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                disabled={plan.disabled}
                className={`mt-8 w-full py-2 text-sm font-medium rounded-md transition ${
                  plan.disabled
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : plan.highlighted
                    ? "bg-[#0A66C2] text-white hover:bg-[#004182]"
                    : "border border-[#0A66C2] text-[#0A66C2] hover:bg-[#E8F3FF]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="pb-24">
        <Buyers />
      </section>

      {/* CTA */}
      <section className="pb-32">
        <Newsletter />
      </section>
    </main>
  );
}
