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
        line1: "Generate Passive Income",
        line2: "with",
        highlight: "Automated Trading",
      },
      subtitle:
        "Professional futures trading algorithms delivering good returns through statistically generated quantitative strategies",
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
    // FAQ data - replace with your actual content
    faqData: [
      {
        question:
          "I'm new to futures trading - can I really use algorithms without experience?",
        answer:
          "Absolutely! Our trading strategies are pre-built binary files that install directly into your NinjaTrader platform. You don't need to understand charts, indicators, or market patterns - the strategy does that work. Simply install the file, configure your risk settings, and let the system trade professionally on your behalf. It's like having an expert trader's strategy running on your own platform, with full control over your funds and execution. ",
      },
      {
        question: "C'mon.. I REALLY don't need to know anything?",
        answer:
          "Trading always has it's risks. So you should understand the risks and your own risk tolerance. But you don't need to know how to trade or how the strategy works. Our strategies are designed to be plug-and-play - you install the binary file on your NinjaTrader platform, set your risk parameters, and let the algorithm execute trades automatically. It's like having a professional trader's expertise without needing to learn all the details yourself.",
      },
      {
        question:
          "I've been trading for years but keep losing money. How is this different?",
        answer:
          "Emotional trading is the #1 reason experienced traders lose money - fear, greed, and impulse decisions destroy even good strategies. Our NinjaTrader strategies eliminate emotions entirely, executing trades based purely on data and proven logic. You install the binary file on your own platform, so you maintain complete control while removing the emotional element. Many clients were profitable on paper but struggled with execution - automated strategies solve that problem.",
      },
      {
        question: "How do I know this isn't another trading scam?",
        answer:
          "We understand your skepticism - the trading industry has many bad actors. Unlike services that want access to your funds, you install our strategies on YOUR NinjaTrader platform with YOUR broker account. We never touch your money or have access to your accounts. You get the actual binary strategy files, maintain full control, and can turn them on or off anytime. We provide transparent performance data and realistic expectations - no get-rich-quick promises.",
      },
      {
        question: "What's your approach to risk management?",
        answer:
          "The metrics we prioritize are net profit to max drawdown ratio. Secondary to this is the risk/reward ratio. We build in strict risk controls to limit drawdowns and protect your capital. Each strategy has adjustable parameters for position sizing, stop-losses, and profit targets. While we do have recommended settings, you can customize them based on your risk tolerance. Since you're running the strategies on your own NinjaTrader platform, you have complete control over every aspect of the strategy's behavior.",
      },
      {
        question: "Can I adjust the algorithms to match my risk tolerance?",
        answer:
          "Yes! Each NinjaTrader strategy comes with customizable parameters. You can adjust position sizes, risk levels, stop-losses, profit targets, and trading hours directly within NinjaTrader. Conservative traders can set lower risk parameters for steady gains, while aggressive traders can increase position sizes. Since it's running on your platform, you have complete control over every aspect of the strategy's behavior.",
      },
      {
        question:
          "How does algorithmic trading fit into my investment portfolio?",
        answer:
          "Our NinjaTrader strategies serve as an excellent active trading component alongside traditional investments. While your long-term investments grow steadily, these strategies can generate more frequent returns from market movements. Many clients allocate 5-20% of their trading capital to automated strategies, providing active income while maintaining their other investments. Since you control everything through your own platform, it integrates seamlessly with your existing trading approach.",
      },
      {
        question:
          "What's the difference between your strategies and manual trading?",
        answer:
          "Our NinjaTrader strategies execute the same logic a professional trader would use, but without human limitations. They analyze market data continuously, never get tired or emotional, and execute trades precisely according to the programmed rules. You get professional-level trading strategies running on your own platform, with none of the psychological challenges that cause manual trading failures. It's like having a disciplined expert trader who never deviates from the plan.",
      },
      {
        question: "How much time do I need to spend monitoring the strategies?",
        answer:
          "One of the biggest benefits is the time freedom - most clients check their NinjaTrader platform for just 5-10 minutes daily. The strategies handle all the monitoring, analysis, and execution automatically. You can review performance, adjust parameters if needed, and manage your account, but there's no need to watch charts or stress about market movements. It's your platform, your control, but automated execution.",
      },
      {
        question: "What happens if the strategies start losing money?",
        answer:
          "All trading involves risk, and strategies will have losing periods - this is normal and expected. However, since you're running the strategies on your own NinjaTrader platform, you maintain complete control. You can pause, stop, or modify any strategy instantly. The strategies include built-in risk management features, and you can adjust stop-losses and position sizing at any time. We provide detailed performance data so you can make informed decisions about when to continue, adjust, or pause the strategies.",
      },
    ],
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
          riskReward: "2.5",
          timeFrame: "1 Min Bars",
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
          riskReward: "2.0",
          timeFrame: "3 Min Bars",
        },
        markets: "NQ, ES",
        image: "/good-hands-trading/images/AsiaMorning-NQ.png",
      },
      {
        name: "Buy Monday",
        status: "Beta",
        statusColor: "yellow",
        description:
          "Buy Monday is a statistical strategy that captures the historical tendency for markets to rise on Mondays. It uses a simple entry and exit logic based on price action and volume.",
        metrics: {
          totalProfit: "$241,939.70",
          maxDrawdown: "$44,266.14",
          returnToMaxDrawdown: "5.4",
          winRate: "53%",
          riskReward: "2.0",
          timeFrame: "1 Min Bars",
        },
        markets: "NQ, ES",
        image: "/good-hands-trading/images/buymonday-graph.png",
      },
      {
        name: "Buy the Dip",
        status: "Beta",
        statusColor: "yellow",
        description:
          "Simple Buy the Dip strategy that captures short-term reversals in index futures. Designed for low-risk, high-reward trades.",
        metrics: {
          totalProfit: "$342,080.00",
          maxDrawdown: "$80,400.00",
          returnToMaxDrawdown: "4.2",
          winRate: "35.1%",
          riskReward: "-",
          timeFrame: "5 Min Bars",
        },
        markets: "NQ, ES",
        image: "/good-hands-trading/images/BuytheDip.png",
      },
      {
        name: "Gold Run",
        status: "Beta",
        statusColor: "yellow",
        description:
          "A trend-following intraday strategy for gold futures that captures medium-term price movements with high accuracy.",
        metrics: {
          totalProfit: "+16.4%",
          maxDrawdown: "1.92",
          returnToMaxDrawdown: "3.5%",
          winRate: "52%",
          riskReward: "1.8",
          timeFrame: "10 Min Bars",
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
      riskReward: "Risk/Reward Ratio",
      timeFrame: "Time Frame",
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
        name: "1 Strategy",
        price: "Free *",
        originalPrice: "$49",
        discount: "Free Trial",
        period: "for 1 month",
        badge: "No Commitment",
        features: [
          "Run 1 strategy to test performance",
          "valid until last day of the month",
          "Full control: Install on your system",
          "Yours to backtest and configure",
          "Connect to any of your accounts on NT",
        ],
        buttonText: "Get Access",
        featured: false,
      },
      {
        name: "Full Access - Monthly",
        price: "$499",
        originalPrice: "$799",
        discount: "38% OFF",
        period: "/month",
        badge: "Most Popular",
        features: [
          "Access to all strategies",
          "New Strats added every 1-2 weeks",
          "Full control: choose which algos to run",
          "Use recommended settings or customize",
        ],
        buttonText: "Subscribe Now",
        featured: true,
      },
      {
        name: "Full Access - Annual",
        price: "$3,493",
        originalPrice: "$5,988",
        discount: "5 Months FREE",
        period: "/year",
        badge: "Most Savings",
        features: [
          "Everything in Monthly plan",
          "Priority customer support",
          "Risk management tools",
          "Save $2,495 annually",
        ],
        buttonText: "Subscribe Now",
        featured: true,
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
