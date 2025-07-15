import React from "react";
import { siteContent } from "../content.js";
import { STYLES } from "../styles.js";
import { PricingCard } from "../components/PricingCard.jsx";

export const PricingPage = () => (
  <div className={`min-h-screen ${STYLES.darkBg} ${STYLES.section}`}>
    <div className={STYLES.container}>
      <div className={`text-center ${STYLES.mb16}`}>
        <h1 className={STYLES.pageTitle}>{siteContent.pricing.title}</h1>
        <p className={STYLES.pageSubtitle}>{siteContent.pricing.subtitle}</p>
      </div>

      <div className={STYLES.threeColumnGrid}>
        {siteContent.pricing.plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} index={index} />
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
