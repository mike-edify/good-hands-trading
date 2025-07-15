import React, { useState } from "react";
import { TrendingUp, BarChart3, Cpu, DollarSign, Menu } from "lucide-react";
import { siteContent } from "./content.js";
import { STYLES } from "./styles.js";
import { PortfolioPage } from "./pages/PortfolioPage.jsx";
import { ProcessPage } from "./pages/ProcessPage.jsx";
import { PricingPage } from "./pages/PricingPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";

// Color combinations for features
const FEATURE_COLORS = ["text-blue-400", "text-purple-400", "text-green-400"];

const AlgoTradingWebsite = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = siteContent.navigation.map((item) => ({
    ...item,
    icon:
      item.id === "home"
        ? TrendingUp
        : item.id === "portfolio"
        ? BarChart3
        : item.id === "process"
        ? Cpu
        : DollarSign,
  }));

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "portfolio":
        return <PortfolioPage />;
      case "process":
        return <ProcessPage />;
      case "pricing":
        return <PricingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${STYLES.darkBg}`}>
      {/* Navigation */}
      <nav className={STYLES.navBar}>
        <div className={STYLES.container}>
          <div className={STYLES.navContainer}>
            <div className="flex items-center">
              <TrendingUp className={`w-8 h-8 ${STYLES.textBlue400} mr-3`} />
              <span className={`text-xl font-bold ${STYLES.textWhite}`}>
                {siteContent.siteName}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className={`${STYLES.hiddenMd} items-center space-x-8`}>
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`${STYLES.navButton} ${
                    currentPage === item.id
                      ? STYLES.navButtonActive
                      : STYLES.navButtonInactive
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className={STYLES.mdHidden}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={STYLES.navButtonInactive}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={STYLES.mobileMenu}>
            <div className={STYLES.mobileMenuContainer}>
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`${STYLES.navButton} w-full ${
                    currentPage === item.id
                      ? STYLES.navButtonActive
                      : STYLES.navButtonInactive
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">{renderPage()}</main>

      {/* Disclaimer Section */}
      <div
        className={`${STYLES.section} bg-slate-800/30 border-t border-slate-700/50`}
      >
        <div className={STYLES.container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Important Disclosures
            </h2>
            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Performance Disclosure
                </h3>
                <p>
                  Trading strategy performance results shown are based on
                  backtested and simulated data. Backtested results have
                  inherent limitations as they do not reflect actual trading
                  conditions, including market liquidity constraints, slippage,
                  and execution delays. These results are developed with the
                  benefit of hindsight and may not accurately reflect the
                  challenges of live trading environments. Individual results
                  will vary based on market conditions, implementation timing,
                  and user-specific settings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Risk Warning</h3>
                <p>
                  Trading futures, forex, and other financial instruments
                  involves significant risk of loss and may not be suitable for
                  all investors. You should carefully consider your financial
                  situation and risk tolerance before using any trading
                  strategy. Only trade with capital you can afford to lose
                  completely. Past performance does not guarantee future
                  results, and all trading involves the risk of substantial
                  losses that may exceed your initial investment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">
                  No Investment Advice
                </h3>
                <p>
                  The trading strategies provided are software tools and do not
                  constitute investment advice, financial planning, or
                  recommendations. We do not provide personalized investment
                  guidance or make claims about guaranteed profitability. Each
                  user is responsible for their own trading decisions and should
                  consult with qualified financial professionals before making
                  investment choices.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">
                  User Testimonials
                </h3>
                <p>
                  Customer testimonials reflect individual experiences and
                  results achieved by specific users. These experiences are not
                  typical and should not be interpreted as promises of similar
                  outcomes. Trading results depend on numerous factors including
                  market conditions, user discipline, risk management, and
                  individual circumstances. Your results may differ
                  significantly from those shared by other users.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">
                  Software Limitations
                </h3>
                <p>
                  Our NinjaTrader strategies are software tools that require
                  proper installation, configuration, and monitoring. Technical
                  issues, platform connectivity problems, or user error may
                  affect performance. We recommend thorough testing in
                  simulation mode before live trading and maintaining
                  appropriate risk management practices at all times.
                </p>
              </div>

              <div className="text-center pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-400">
                  By purchasing and using our trading strategies, you
                  acknowledge that you have read, understood, and agree to these
                  terms and accept full responsibility for your trading
                  activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoTradingWebsite;
