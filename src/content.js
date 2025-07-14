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
        name: "Momentum Cross",
        status: "Active",
        statusColor: "green",
        description:
          "A Long only momentum-based trading strategy that captures trending moves in index futures with high accuracy. Can be used on NQ, YM and FDAX. (ES settings coming soon)",
        metrics: {
          totalProfit: "$103,630.00 (NQ)",
          maxDrawdown: "$38,155.00 (NQ)",
          returnToMaxDrawdown: "2.7(NQ), 1.5(FDAX), 1.9(YM)",
          winRate: "49.2%",
          sharpePerYear: "1.5",
        },
        markets: "NQ, YM, FDAX",
        image: "/good-hands-trading/images/nq-momo.png",
      },
      {
        name: "Asia Morning",
        status: "Active",
        statusColor: "green",
        description:
          "Statistical arbitrage strategy targeting short-term price inefficiencies in index futures with high-frequency execution.",
        metrics: {
          totalProfit: "$60,148.48 (NQ)",
          maxDrawdown: "$13,237.44 (NQ)",
          returnToMaxDrawdown: "4.5",
          winRate: "36.8%",
          sharpePerYear: "1.6",
        },
        markets: "NQ, ES",
        image: "/good-hands-trading/images/AsiaMorning-NQ.png",
      },
      {
        name: "Volatility Edge",
        status: "Beta",
        statusColor: "yellow",
        description:
          "Advanced volatility trading system that capitalizes on VIX futures and options market inefficiencies during high-stress periods.",
        metrics: {
          totalProfit: "+31.2%",
          maxDrawdown: "1.89",
          returnToMaxDrawdown: "4.1%",
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
          totalProfit: "+16.4%",
          maxDrawdown: "1.92",
          returnToMaxDrawdown: "3.5%",
          winRate: "52%",
          sharpePerYear: "1.8",
        },
        markets: "Multi-Asset Portfolio",
        image: "https://picsum.photos/400/300?random=3",
      },
    ],
    labels: {
      totalProfit: "Historical Net Profit (1 Contract)",
      maxDrawdown: "Max Drawdown",
      returnToMaxDrawdown: "Net Profit to Max Drawdown",
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
