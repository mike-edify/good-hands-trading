import React from "react";
import { STYLES } from "../styles.js";
import { CheckCircle } from "lucide-react";

export const PricingCard = ({ plan, index }) => (
  <div
    className={`${STYLES.pricingCard} ${
      plan.featured ? STYLES.pricingCardFeatured : STYLES.pricingCardDefault
    }`}
  >
    {plan.featured && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className={STYLES.pricingBadge}>{plan.badge}</span>
      </div>
    )}

    <h3 className={STYLES.cardTitle}>{plan.name}</h3>

    <div className={STYLES.mb6}>
      {plan.originalPrice && (
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-lg text-slate-400 line-through">
            {plan.originalPrice}
          </span>
          {plan.discount && (
            <span className="text-sm bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
              {plan.discount}
            </span>
          )}
        </div>
      )}
      <div className="flex items-baseline justify-center gap-1">
        <span className={`text-4xl font-bold ${STYLES.textWhite}`}>
          {plan.price}
        </span>
        <span className={STYLES.textSlate400}>{plan.period}</span>
      </div>
    </div>

    <ul className={`space-y-3 ${STYLES.mb8}`}>
      {plan.features.map((feature, featureIndex) => (
        <li key={featureIndex} className="flex items-center gap-3">
          <CheckCircle className={`w-5 h-5 ${STYLES.textGreen400}`} />
          <span className={STYLES.textSlate300}>{feature}</span>
        </li>
      ))}
    </ul>

    <button
      className={`${STYLES.ctaButton} ${
        plan.featured
          ? STYLES.ctaButtonPrimary
          : index === 2
          ? STYLES.ctaButtonPurple
          : STYLES.ctaButtonBlue
      }`}
    >
      {plan.buttonText}
    </button>
  </div>
);
