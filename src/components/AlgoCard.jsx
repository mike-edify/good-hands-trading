import React from "react";
import { siteContent } from "./../content.js";
import { STYLES } from "../styles.js";

export default function AlgoCard(index, algorithm) {
  return (
    <div
      key={index}
      className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600/50"
    >
      <div className={`${STYLES.flexStart} ${STYLES.mb6}`}>
        <h3 className={STYLES.cardTitle}>{algorithm.name}</h3>
        <span
          className={`${STYLES.statusBadge} bg-${algorithm.statusColor}-500/20 text-${algorithm.statusColor}-400`}
        >
          {algorithm.status}
        </span>
      </div>
      <p className={`${STYLES.textSlate300} ${STYLES.mb6}`}>
        {algorithm.description}
      </p>
      <div className={`grid grid-cols-2 gap-4 ${STYLES.mb6}`}>
        <div className={STYLES.metricCard}>
          <div className={`${STYLES.metricValue} ${STYLES.textGreen400}`}>
            {algorithm.metrics.totalProfit}
          </div>
          <div className={STYLES.metricLabel}>
            {siteContent.portfolio.labels.totalProfit}
          </div>
        </div>
        <div className={STYLES.metricCard}>
          <div className={`${STYLES.metricValue} ${STYLES.textBlue400}`}>
            {algorithm.metrics.maxDrawdown}
          </div>
          <div className={STYLES.metricLabel}>
            {siteContent.portfolio.labels.maxDrawdown}
          </div>
        </div>
        <div className={STYLES.metricCard}>
          <div className={`${STYLES.metricValue} ${STYLES.textYellow400}`}>
            {algorithm.metrics.returnToMaxDrawdown}
          </div>
          <div className={STYLES.metricLabel}>
            {siteContent.portfolio.labels.returnToMaxDrawdown}
          </div>
        </div>
        <div className={STYLES.metricCard}>
          <div className={`${STYLES.metricValue} ${STYLES.textGreen400}`}>
            {algorithm.metrics.winRate}
          </div>
          <div className={STYLES.metricLabel}>
            {siteContent.portfolio.labels.winRate}
          </div>
        </div>
        {/* <div className={STYLES.metricCard}>
          <div className={`${STYLES.metricValue} ${STYLES.textGreen400}`}>
            {algorithm.metrics.sharpePerYear}
          </div>
          <div className={STYLES.metricLabel}>
            {siteContent.portfolio.labels.sharpePerYear}
          </div>
        </div> */}
      </div>
      <div className={STYLES.metricLabel}>
        <strong>{siteContent.portfolio.labels.markets}</strong>{" "}
        {algorithm.markets}
      </div>
      <img
        src={algorithm.image}
        alt={algorithm.name}
        className="mt-6 rounded-lg shadow-lg"
      />
    </div>
  );
}
