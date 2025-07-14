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
    </div>
  );
};

export default AlgoTradingWebsite;
