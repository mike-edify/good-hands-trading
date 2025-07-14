import React from "react";
import { siteContent } from "../content.js";
import { STYLES } from "../styles.js";
import { CheckCircle } from "lucide-react";

export const PricingPage = () => (
  <div className={`min-h-screen ${STYLES.darkBg} ${STYLES.section}`}>
    <div className={STYLES.container}>
      <div className={`text-center ${STYLES.mb16}`}>
        <h1 className={STYLES.pageTitle}>{siteContent.pricing.title}</h1>
        <p className={STYLES.pageSubtitle}>{siteContent.pricing.subtitle}</p>
      </div>

      <div className={STYLES.threeColumnGrid}>
        {siteContent.pricing.plans.map((plan, index) => (
          <div
            key={index}
            className={`${STYLES.pricingCard} ${
              plan.featured
                ? STYLES.pricingCardFeatured
                : STYLES.pricingCardDefault
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className={STYLES.pricingBadge}>{plan.badge}</span>
              </div>
            )}
            <h3 className={STYLES.cardTitle}>{plan.name}</h3>
            <div className={STYLES.mb6}>
              <span className={`text-4xl font-bold ${STYLES.textWhite}`}>
                {plan.price}
              </span>
              <span className={STYLES.textSlate400}>{plan.period}</span>
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
        ))}
      </div>

      {/* Contact Section */}
      <div className={`${STYLES.mt20} ${STYLES.cardBg}`}>
        <div className={`text-center ${STYLES.mb8}`}>
          <h3 className={STYLES.cardTitleLarge}>
            {siteContent.pricing.contact.title}
          </h3>
          <p className={STYLES.textSlate400}>
            {siteContent.pricing.contact.subtitle}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={siteContent.pricing.contact.form.namePlaceholder}
              className={STYLES.input}
            />
            <input
              type="email"
              placeholder={siteContent.pricing.contact.form.emailPlaceholder}
              className={STYLES.input}
            />
          </div>
          <textarea
            placeholder={siteContent.pricing.contact.form.messagePlaceholder}
            rows="4"
            className={STYLES.textarea}
          ></textarea>
          <button
            className={`${STYLES.ctaButton} ${STYLES.ctaButtonPrimary} ${STYLES.mt4}`}
          >
            {siteContent.pricing.contact.form.buttonText}
          </button>
        </div>
      </div>
    </div>
  </div>
);
