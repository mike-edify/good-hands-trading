import React from "react";
import { siteContent } from "../content.js";
import { STYLES } from "../styles.js";
import AlgoCard from "../components/AlgoCard.jsx";

export const PortfolioPage = () => (
  <div className={`min-h-screen ${STYLES.darkBg} ${STYLES.section}`}>
    <div className={STYLES.container}>
      <div className={`text-center ${STYLES.mb16}`}>
        <h1 className={STYLES.pageTitle}>{siteContent.portfolio.title}</h1>
        <p className={STYLES.pageSubtitle}>{siteContent.portfolio.subtitle}</p>
      </div>

      <div className={STYLES.twoColumnGrid}>
        {siteContent.portfolio.algorithms.map((algorithm, index) =>
          AlgoCard(index, algorithm)
        )}
      </div>
    </div>
  </div>
);
