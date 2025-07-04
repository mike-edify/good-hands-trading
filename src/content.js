// Content Configuration File
// Edit all website copy here without touching the main code

export const siteContent = {
  // Site Identity
  siteName: "AlgoTrader Pro",
  
  // Navigation
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Algorithms' },
    { id: 'process', label: 'Our Process' },
    { id: 'pricing', label: 'Get Access' }
  ],

  // Home Page Content
  home: {
    hero: {
      title: {
        line1: "Precision",
        highlight: "Algorithm",
        line2: "Trading"
      },
      subtitle: "Professional futures trading algorithms delivering consistent returns through advanced quantitative strategies",
      primaryButton: "View Algorithms",
      secondaryButton: "Get Access"
    },
    features: {
      sectionTitle: "Why Choose Our Algorithms?",
      sectionSubtitle: "Built on years of market experience and cutting-edge technology",
      items: [
        {
          title: "Proven Performance",
          description: "Consistent returns across multiple market conditions with rigorous backtesting and live performance tracking."
        },
        {
          title: "Advanced Technology",
          description: "State-of-the-art machine learning and statistical models optimized for futures markets."
        },
        {
          title: "Risk Management",
          description: "Built-in risk controls and position sizing to protect capital while maximizing returns."
        }
      ]
    }
  },

  // Portfolio/Algorithms Page Content
  portfolio: {
    title: "Our Algorithm Portfolio",
    subtitle: "A comprehensive suite of trading algorithms designed for different market conditions and risk profiles",
    algorithms: [
      {
        name: "Momentum Master",
        status: "Active",
        statusColor: "green",
        description: "Trend-following algorithm optimized for commodity futures. Captures medium to long-term price movements with adaptive position sizing.",
        metrics: {
          annualReturn: "+24.3%",
          sharpeRatio: "1.47"
        },
        markets: "Energy, Metals, Agriculture"
      },
      {
        name: "Mean Reversion Pro",
        status: "Active",
        statusColor: "green",
        description: "Statistical arbitrage strategy targeting short-term price inefficiencies in index futures with high-frequency execution.",
        metrics: {
          annualReturn: "+18.7%",
          sharpeRatio: "2.13"
        },
        markets: "S&P 500, NASDAQ, Russell 2000"
      },
      {
        name: "Volatility Edge",
        status: "Beta",
        statusColor: "yellow",
        description: "Advanced volatility trading system that capitalizes on VIX futures and options market inefficiencies during high-stress periods.",
        metrics: {
          annualReturn: "+31.2%",
          sharpeRatio: "1.89"
        },
        markets: "VIX, Currency Futures"
      },
      {
        name: "Multi-Asset Hedged",
        status: "Active",
        statusColor: "green",
        description: "Diversified strategy combining multiple timeframes and asset classes with dynamic hedging for capital preservation.",
        metrics: {
          annualReturn: "+16.4%",
          sharpeRatio: "1.92"
        },
        markets: "Multi-Asset Portfolio"
      }
    ],
    labels: {
      annualReturn: "Annual Return",
      sharpeRatio: "Sharpe Ratio",
      markets: "Markets:"
    }
  },

  // Process Page Content
  process: {
    title: "Our Development Process",
    subtitle: "From concept to deployment, our systematic approach ensures robust and profitable trading algorithms",
    steps: [
      {
        number: "1",
        title: "Research & Hypothesis",
        description: "We begin with extensive market research, identifying inefficiencies and developing testable hypotheses. Our team analyzes market microstructure, behavioral patterns, and statistical anomalies across different timeframes and asset classes.",
        checklist: [
          "Market inefficiency identification",
          "Statistical hypothesis formulation",
          "Literature review and academic research"
        ]
      },
      {
        number: "2",
        title: "Data Analysis & Backtesting",
        description: "Rigorous backtesting using high-quality historical data with realistic transaction costs, slippage, and market impact models. We employ walk-forward analysis and out-of-sample testing to ensure robustness.",
        checklist: [
          "10+ years of tick-level data",
          "Monte Carlo simulation testing",
          "Multiple market regime analysis"
        ]
      },
      {
        number: "3",
        title: "Live Testing & Optimization",
        description: "Before full deployment, algorithms undergo extensive paper trading and limited live testing. We continuously monitor performance and make data-driven optimizations while maintaining strict risk controls.",
        checklist: [
          "3-6 months paper trading minimum",
          "Real-time performance monitoring",
          "Continuous parameter optimization"
        ]
      }
    ]
  },

  // Pricing Page Content
  pricing: {
    title: "Get Access to Our Algorithms",
    subtitle: "Choose the plan that fits your trading style and capital requirements",
    plans: [
      {
        name: "Signal Access",
        price: "$299",
        period: "/month",
        features: [
          "Real-time trading signals",
          "2 algorithm strategies",
          "Email & SMS alerts",
          "Basic performance reports"
        ],
        buttonText: "Start Free Trial",
        featured: false
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
          "Risk management tools"
        ],
        buttonText: "Start Free Trial",
        featured: true
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
          "24/7 technical support"
        ],
        buttonText: "Contact Sales",
        featured: false
      }
    ],
    contact: {
      title: "Ready to Get Started?",
      subtitle: "Contact us to discuss your requirements and start your free trial",
      form: {
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Tell us about your trading goals and experience...",
        buttonText: "Send Message"
      }
    }
  }
};