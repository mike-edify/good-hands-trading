import React, { useState } from "react";
import {
  TrendingUp,
  BarChart3,
  Cpu,
  DollarSign,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { siteContent } from "./content.js";
import { STYLES, GRADIENTS } from "./styles.js";
import AlgoCard from "./components/AlgoCard.jsx";

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

  const HomePage = () => (
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
              <div className={`${STYLES.flexColSm} gap-4 justify-center`}>
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
              </div>
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

  const PortfolioPage = () => (
    <div className={`min-h-screen ${STYLES.darkBg} ${STYLES.section}`}>
      <div className={STYLES.container}>
        <div className={`text-center ${STYLES.mb16}`}>
          <h1 className={STYLES.pageTitle}>{siteContent.portfolio.title}</h1>
          <p className={STYLES.pageSubtitle}>
            {siteContent.portfolio.subtitle}
          </p>
        </div>

        <div className={STYLES.twoColumnGrid}>
          {siteContent.portfolio.algorithms.map((algorithm, index) =>
            AlgoCard(index, algorithm)
          )}
        </div>
      </div>
    </div>
  );

  const ProcessPage = () => (
    <div className={`min-h-screen ${STYLES.darkBg} ${STYLES.section}`}>
      <div className={STYLES.container}>
        <div className={`text-center ${STYLES.mb16}`}>
          <h1 className={STYLES.pageTitle}>{siteContent.process.title}</h1>
          <p className={STYLES.pageSubtitle}>{siteContent.process.subtitle}</p>
        </div>

        <div className="space-y-12">
          {siteContent.process.steps.map((step, index) => {
            const gradients = [
              GRADIENTS.step1,
              GRADIENTS.step2,
              GRADIENTS.step3,
            ];
            const isReverse = index % 2 === 1;

            return (
              <div
                key={index}
                className={
                  isReverse
                    ? STYLES.processStepReverse
                    : STYLES.processStepNormal
                }
              >
                <div className="lg:w-1/2">
                  <div
                    className={`bg-gradient-to-r ${gradients[index]} ${STYLES.processNumber}`}
                  >
                    {step.number}
                  </div>
                  <h3 className={STYLES.cardTitleLarge}>{step.title}</h3>
                  <p
                    className={`${STYLES.textSlate300} text-lg leading-relaxed`}
                  >
                    {step.description}
                  </p>
                </div>
                <div className={`lg:w-1/2 ${STYLES.cardBg}`}>
                  <div className={STYLES.processChecklist}>
                    {step.checklist.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle
                          className={`w-5 h-5 ${STYLES.textGreen400}`}
                        />
                        <span className={STYLES.textSlate300}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const PricingPage = () => (
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
