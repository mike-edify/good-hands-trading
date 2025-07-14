import React from "react";
import { siteContent } from "../content.js";
import { STYLES, FEATURE_COLORS } from "../styles.js";

import { TrendingUp, BarChart3, Cpu } from "lucide-react";

export const HomePage = () => (
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
    </div>
  </>
);
