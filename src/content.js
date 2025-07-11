// Content Configuration File
// Edit all website copy here without touching the main code

export const siteContent = {
  // Site Identity
  siteName: "Good Hands Trading",

  // Navigation
  navigation: [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Algorithms" },
    { id: "process", label: "Our Process" },
    { id: "pricing", label: "Get Access" },
  ],

  // Home Page Content
  home: {
    hero: {
      title: {
        line1: "Augment your trading",
        line2: "with",
        highlight: "Automation",
      },
      subtitle:
        "Professional futures trading algorithms delivering consistent returns through advanced quantitative strategies",
      primaryButton: "View Algorithms",
      secondaryButton: "Get Access",
    },
    features: {
      sectionTitle: "Why Choose Our Algorithms?",
      sectionSubtitle:
        "Built on years of market experience and cutting-edge technology",
      items: [
        {
          title: "Proven Performance",
          description:
            "Consistent returns across multiple market conditions with rigorous backtesting and live performance tracking.",
        },
        {
          title: "Advanced Technology",
          description:
            "State-of-the-art machine learning and statistical models optimized for futures markets.",
        },
        {
          title: "Risk Management",
          description:
            "Built-in risk controls and position sizing to protect capital while maximizing returns.",
        },
      ],
    },
  },

  // Portfolio/Algorithms Page Content
  portfolio: {
    title: "Our Algorithm Portfolio",
    subtitle:
      "A comprehensive suite of trading algorithms designed for different market conditions and risk profiles",
    algorithms: [
      {
        name: "Momentum Master",
        status: "Active",
        statusColor: "green",
        description:
          "Momentum-based trading strategy focusing on high-probability setups in index futures with low latency execution.",
        metrics: {
          annualReturn: "+24.3%",
          sharpeRatio: "1.47",
          maxDrawdown: "5.8%",
          winRate: "68%",
          sharpePerYear: "1.5",
        },
        markets: "NQ, YM, FDAX",
        image: "/good-hands-trading/images/nq-momo.png",
      },
      {
        name: "Mean Reversion Pro",
        status: "Active",
        statusColor: "green",
        description:
          "Statistical arbitrage strategy targeting short-term price inefficiencies in index futures with high-frequency execution.",
        metrics: {
          annualReturn: "+18.7%",
          sharpeRatio: "2.13",
          maxDrawdown: "7.2%",
          winRate: "45%",
          sharpePerYear: "1.6",
        },
        markets: "S&P 500, NASDAQ, Russell 2000",
        image: "https://picsum.photos/400/300?random=1",
      },
      {
        name: "Volatility Edge",
        status: "Beta",
        statusColor: "yellow",
        description:
          "Advanced volatility trading system that capitalizes on VIX futures and options market inefficiencies during high-stress periods.",
        metrics: {
          annualReturn: "+31.2%",
          sharpeRatio: "1.89",
          maxDrawdown: "4.1%",
          winRate: "38%",
          sharpePerYear: "1.7",
        },
        markets: "VIX, Currency Futures",
        image: "https://picsum.photos/400/300?random=2",
      },
      {
        name: "Multi-Asset Hedged",
        status: "Active",
        statusColor: "green",
        description:
          "Diversified strategy combining multiple timeframes and asset classes with dynamic hedging for capital preservation.",
        metrics: {
          annualReturn: "+16.4%",
          sharpeRatio: "1.92",
          maxDrawdown: "3.5%",
          winRate: "52%",
          sharpePerYear: "1.8",
        },
        markets: "Multi-Asset Portfolio",
        image: "https://picsum.photos/400/300?random=3",
      },
    ],
    labels: {
      annualReturn: "Annual Return (%)",
      sharpeRatio: "Sharpe Ratio",
      maxDrawdown: "Max Drawdown (%)",
      winRate: "Win Rate (%)",
      sharpePerYear: "Sharpe per Year",
    },
  },

  // Process Page Content
  process: {
    title: "My Algorithm Development Process",
    subtitle:
      "From trade idea to live trading, every algorithm follows a rigorous validation process focused on consistent profitability and risk management",
    steps: [
      {
        number: "1",
        title: "Idea & Code Development",
        description:
          "Every algorithm starts with a trading idea based on market patterns, inefficiencies, or statistical relationships. I code the strategy from scratch, building in proper risk management and position sizing from the beginning. The focus is on creating clean, logical code that can be easily tested and optimized.",
        checklist: [
          "Market pattern identification",
          "Custom algorithm coding",
          "Built-in risk management systems",
          "Clean, testable code architecture",
        ],
      },
      {
        number: "2",
        title: "In-Sample Backtesting & Optimization",
        description:
          "Using at least 2 years of historical data, I rigorously backtest and optimize the algorithm. My primary criteria is the return-to-max-drawdown ratio - ensuring the strategy generates solid returns while keeping drawdowns manageable. I also prioritize higher risk-reward ratios to maximize efficiency.",
        checklist: [
          "Minimum 2 years of historical data",
          "Return-to-max-drawdown optimization",
          "Risk-reward ratio analysis",
          "Parameter optimization and tuning",
        ],
      },
      {
        number: "3",
        title: "Out-of-Sample Validation",
        description:
          "The real test comes with out-of-sample data that the algorithm has never seen. If the strategy maintains its return-to-max-drawdown ratio on fresh data, it proves the edge is real and not just curve-fitted. I also perform Monte Carlo analysis on out-of-sample results to further validate robustness and ensure the strategy can withstand a wide range of market scenarios. Only algorithms that pass this critical test move forward to live testing.",
        checklist: [
          "Fresh, unseen market data testing",
          "Return-to-drawdown ratio validation",
          "Monte Carlo analysis for robustness",
          "Performance consistency verification",
          "Edge confirmation process",
        ],
      },
      {
        number: "4",
        title: "Live Testing & Deployment",
        description:
          "Algorithms that maintain profitability in out-of-sample testing go into simulation accounts first. After 2 weeks to 2 months of consistent performance, I deploy them to evaluation or live accounts. This final step ensures real-world execution matches backtested expectations.",
        checklist: [
          "Simulation account testing",
          "2 weeks to 2 months validation period",
          "Real execution environment testing",
          "Live account deployment",
        ],
      },
    ],
  },

  // Pricing Page Content
  pricing: {
    title: "Get Access to Our Algorithms",
    subtitle:
      "Choose the plan that fits your trading style and capital requirements",
    plans: [
      {
        name: "Signal Access",
        price: "$299",
        period: "/month",
        features: [
          "Real-time trading signals",
          "2 algorithm strategies",
          "Email & SMS alerts",
          "Basic performance reports",
        ],
        buttonText: "Start Free Trial",
        featured: false,
      },
      {
        name: "Full Access",
        price: "$799",
        period: "/month",
        badge: "Most Popular",
        features: [
          "All algorithm strategies",
          "API integration support",
          "Detailed performance analytics",
          "Priority customer support",
          "Risk management tools",
        ],
        buttonText: "Start Free Trial",
        featured: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        features: [
          "Custom algorithm development",
          "Dedicated account manager",
          "White-label solutions",
          "On-premise deployment",
          "24/7 technical support",
        ],
        buttonText: "Contact Sales",
        featured: false,
      },
    ],
    contact: {
      title: "Ready to Get Started?",
      subtitle:
        "Contact us to discuss your requirements and start your free trial",
      form: {
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder:
          "Tell us about your trading goals and experience...",
        buttonText: "Send Message",
      },
    },
  },
};

// Style constants
const STYLES = {
  // Layout
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-20",

  // Backgrounds
  gradientBg: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800",
  darkBg: "bg-slate-900",
  cardBg:
    "bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-600/50",
  cardBgAlternate:
    "bg-slate-700/50 backdrop-blur p-8 rounded-xl border border-slate-600/50",
  metricCard: "bg-slate-700/50 p-4 rounded-lg",

  // Navigation
  navBar:
    "fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50",
  navContainer: "flex justify-between items-center h-16",
  navButton:
    "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200",
  navButtonActive: "text-blue-400 bg-blue-400/10",
  navButtonInactive: "text-slate-300 hover:text-white hover:bg-slate-700/50",
  mobileMenu:
    "md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50",
  mobileMenuContainer: "px-2 pt-2 pb-3 space-y-1",

  // Typography
  heroTitle: "text-5xl md:text-7xl font-bold text-white mb-6 leading-tight",
  heroSubtitle: "text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto",
  pageTitle: "text-5xl font-bold text-white mb-6",
  pageSubtitle: "text-xl text-slate-400 max-w-3xl mx-auto",
  sectionTitle: "text-4xl font-bold text-white mb-4",
  sectionSubtitle: "text-xl text-slate-400",
  cardTitle: "text-2xl font-bold text-white mb-4",
  cardTitleLarge: "text-3xl font-bold text-white mb-4",

  // Buttons
  primaryButton:
    "px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg",
  secondaryButton:
    "px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300",
  ctaButton:
    "w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300",
  ctaButtonPrimary:
    "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
  ctaButtonBlue: "bg-blue-600 text-white hover:bg-blue-700",
  ctaButtonPurple: "bg-purple-600 text-white hover:bg-purple-700",

  // Grids
  threeColumnGrid: "grid md:grid-cols-3 gap-8",
  twoColumnGrid: "grid lg:grid-cols-2 gap-8",

  // Text colors
  textWhite: "text-white",
  textSlate300: "text-slate-300",
  textSlate400: "text-slate-400",
  textBlue400: "text-blue-400",
  textPurple400: "text-purple-400",
  textGreen400: "text-green-400",
  textYellow400: "text-yellow-400",

  // Overlays and effects
  overlay:
    "absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20",
  textGradient:
    "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",

  // Forms
  input:
    "w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none",
  textarea:
    "w-full px-4 py-3 mt-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none",

  // Pricing
  pricingCard:
    "backdrop-blur p-8 rounded-xl border transition-all duration-300",
  pricingCardFeatured:
    "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500 relative",
  pricingCardDefault:
    "bg-slate-800/50 border-slate-600/50 hover:border-blue-500/50",
  pricingBadge:
    "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold",

  // Process steps
  processStep: "flex flex-col items-center gap-8",
  processStepReverse: "flex flex-col lg:flex-row-reverse items-center gap-8",
  processStepNormal: "flex flex-col lg:flex-row items-center gap-8",
  processNumber:
    "w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6",
  processChecklist: "space-y-4",

  // Metrics
  metricValue: "text-2xl font-bold",
  metricLabel: "text-sm text-slate-400",

  // Status badges
  statusBadge: "px-3 py-1 rounded-full text-sm font-semibold",

  // Spacing
  mb4: "mb-4",
  mb6: "mb-6",
  mb8: "mb-8",
  mb16: "mb-16",
  mt4: "mt-4",
  mt20: "mt-20",

  // Flex utilities
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex justify-between items-center",
  flexStart: "flex justify-between items-start",
  flexCol: "flex flex-col",
  flexColSm: "flex flex-col sm:flex-row",

  // Responsive utilities
  hiddenMd: "hidden md:flex",
  mdHidden: "md:hidden",

  // Animations
  transition: "transition-all duration-300",
  hover: "hover:scale-105",
};

// Gradient combinations
const GRADIENTS = {
  step1: "from-blue-600 to-purple-600",
  step2: "from-purple-600 to-pink-600",
  step3: "from-green-600 to-blue-600",
};

// Color combinations for features
const FEATURE_COLORS = ["text-blue-400", "text-purple-400", "text-green-400"];

export { STYLES, GRADIENTS, FEATURE_COLORS };
