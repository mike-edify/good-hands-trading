// Style constants
export const STYLES = {
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
export const GRADIENTS = {
  step1: "from-blue-600 to-purple-600",
  step2: "from-purple-600 to-pink-600",
  step3: "from-green-600 to-blue-600",
};

// Color combinations for features
export const FEATURE_COLORS = [
  "text-blue-400",
  "text-purple-400",
  "text-green-400",
];

export default { STYLES, GRADIENTS, FEATURE_COLORS };
