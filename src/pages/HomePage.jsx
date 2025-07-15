import React, { useState } from "react";
import { siteContent } from "../content.js";
import { STYLES, FEATURE_COLORS } from "../styles.js";

import {
  TrendingUp,
  BarChart3,
  Cpu,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-slate-700 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full py-6 px-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200 focus:outline-none focus:bg-slate-700/30"
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      }`}
    >
      <div className="text-slate-300 leading-relaxed px-6">{answer}</div>
    </div>
  </div>
);

export const HomePage = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <>
      <div className={`min-h-screen ${STYLES.gradientBg}`}>
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className={STYLES.overlay}></div>
          <div className={`relative ${STYLES.container} pt-20 pb-16`}>
            <div className="text-center">
              <h1 className={STYLES.heroTitle}>
                {siteContent.home.hero.title.line1}
                <br />
                {siteContent.home.hero.title.line2}
                <span className={STYLES.textGradient}>
                  {" "}
                  {siteContent.home.hero.title.highlight}
                </span>
              </h1>
              <p className={STYLES.heroSubtitle}>
                {siteContent.home.hero.subtitle}
              </p>
              {/* <div className={`${STYLES.flexColSm} gap-4 justify-center`}>
                <button
                  onClick={() => setCurrentPage("portfolio")}
                  className={STYLES.primaryButton}
                >
                  {siteContent.home.hero.primaryButton}{" "}
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentPage("pricing")}
                  className={STYLES.secondaryButton}
                >
                  {siteContent.home.hero.secondaryButton}
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`${STYLES.section} bg-slate-800/50`}>
          <div className={STYLES.container}>
            <div className={`text-center ${STYLES.mb16}`}>
              <h2 className={STYLES.sectionTitle}>
                {siteContent.home.features.sectionTitle}
              </h2>
              <p className={STYLES.sectionSubtitle}>
                {siteContent.home.features.sectionSubtitle}
              </p>
            </div>
            <div className={STYLES.threeColumnGrid}>
              {siteContent.home.features.items.map((feature, index) => {
                const icons = [TrendingUp, Cpu, BarChart3];
                const Icon = icons[index % icons.length];
                const color = FEATURE_COLORS[index % FEATURE_COLORS.length];

                return (
                  <div key={index} className={STYLES.cardBgAlternate}>
                    <Icon className={`w-12 h-12 ${color} ${STYLES.mb4}`} />
                    <h3 className={STYLES.cardTitle}>{feature.title}</h3>
                    <p className={STYLES.textSlate300}>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`${STYLES.section} bg-slate-900/50`}>
          <div className={STYLES.container}>
            <div className={`text-center ${STYLES.mb16}`}>
              <h2 className={STYLES.sectionTitle}>
                Frequently Asked Questions
              </h2>
              <p className={STYLES.sectionSubtitle}>
                Get answers to common questions
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700">
                {siteContent.home.faqData.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQIndex === index}
                    onToggle={() => toggleFAQ(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
