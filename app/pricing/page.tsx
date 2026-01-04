// app/pricing/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Buyers from "../components/Buyers";
import Newsletter from "../components/Newsletter/Newsletter";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Pricing – ClickInvoice",
//   description:
//     "Simple, transparent pricing for freelancers and businesses. Start free, upgrade anytime, and scale your invoicing with ClickInvoice.",
// };

interface PlanFeature {
  text: string;
  available: boolean;
}

interface PublicPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  cta: string;
  disabled?: boolean;
  currency: string;
}

export default function PricingPage() {
  const [plans, setPlans] = useState<PublicPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
   const handlePlanClick = () => {
    const signupUrl = process.env.NEXT_PUBLIC_APP_SIGNUP;
    if (signupUrl) {
      router.push(signupUrl);
    } else {
      console.error("NEXT_PUBLIC_APP_SIGNUP is not defined");
    }
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscription-plans`, {
          method: "GET",
          credentials: "include", // Optional: remove if no auth needed on public page
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch plans: ${response.status}`);
        }

        const res = await response.json();
        const rawPlans = Array.isArray(res) ? res : res.data || [];

        if (rawPlans.length === 0) {
          setError("No pricing plans available at the moment.");
          return;
        }

        const transformedPlans: PublicPlan[] = rawPlans.map((raw: any) => {
          const isFree = parseFloat(raw.price) === 0;
          const rawPlanName = raw.planName.toUpperCase();
          const displayName =
            rawPlanName === "FREE"
              ? "Free"
              : rawPlanName === "BASIC"
              ? "Basic"
              : rawPlanName === "PREMIUM"
              ? "Premium"
              : rawPlanName;

          // Parse features string
          let rawFeatures = raw.features || "";
          let cleaned = typeof rawFeatures === "string" ? rawFeatures.trim() : "";

          // Remove surrounding quotes if present
          if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
            cleaned = cleaned.slice(1, -1);
          }

          // Split by ", " and clean individual quotes
          const featureStrings = cleaned
            .split('", "')
            .map((f: string) => f.replace(/^"+|"+$/g, "").trim())
            .filter((f: string) => f.length > 0);

          // Process all features — keep both available and unavailable
          const features: PlanFeature[] = featureStrings.map((feature: string) => {
            const hasCross = feature.startsWith("✗") || feature.startsWith("\u2717");
            const cleanText = feature.replace(/^✗|\u2717\s*/, "").trim();

            return {
              text: cleanText,
              available: !hasCross,
            };
          });

          return {
            name: displayName,
            price: isFree ? "Free" : parseFloat(raw.price).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            period: isFree ? undefined : "/month",
            description:
              displayName === "Free"
                ? "For individuals getting started"
                : displayName === "Basic"
                ? "For freelancers and small businesses"
                : "For growing teams and agencies",
            features,
            highlighted: raw.isPopular === 1 || raw.isPopular === true,
            cta: isFree ? "Get Started" : "Upgrade Now",
            disabled: false, // Public page — allow clicking to trigger login/signup flow if needed
            currency: raw.currency_detail?.currencySymbol || "₦",
          };
        });

        // Sort plans: Free → Basic → Premium
        const order = ["Free", "Basic", "Premium"];
        transformedPlans.sort((a, b) => {
          const aIndex = order.indexOf(a.name);
          const bIndex = order.indexOf(b.name);
          return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
        });

        setPlans(transformedPlans);
      } catch (err: any) {
        console.error("Failed to load pricing plans:", err);
        setError("Could not load pricing plans. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading pricing plans...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#0A66C2] text-white rounded-md hover:bg-[#084d93]"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

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
              className={`relative border rounded-xl p-8 flex flex-col justify-between transition-all ${
                plan.highlighted
                  ? "border-blue shadow-lg scale-105"
                  : "border-lightgrey"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0A66C2] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-navyblue">{plan.name}</h3>
                <p className="mt-1 text-sm text-bluegray">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-3xl font-semibold text-navyblue">
                    {plan.price === "Free" ? "Free" : `${plan.currency}${plan.price}`}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-bluegray ml-1">{plan.period}</span>
                  )}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`text-sm flex items-start ${
                        feature.available ? "text-bluegray" : "text-gray-400 line-through"
                      }`}
                    >
                      <span
                        className={`mr-2 ${feature.available ? "text-blue" : "text-gray-400"}`}
                      >
                        {feature.available ? "•" : "✗"}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              <button
              onClick={handlePlanClick}
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