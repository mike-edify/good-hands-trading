import React, { useState } from 'react';
import { TrendingUp, BarChart3, Cpu, DollarSign, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';
import { siteContent } from './content.js';

const AlgoTradingWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = siteContent.navigation.map(item => ({
    ...item,
    icon: item.id === 'home' ? TrendingUp : 
          item.id === 'portfolio' ? BarChart3 :
          item.id === 'process' ? Cpu : DollarSign
  }));

  const HomePage = () => (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {siteContent.home.hero.title.line1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> {siteContent.home.hero.title.highlight}</span>
                <br />{siteContent.home.hero.title.line2}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                {siteContent.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCurrentPage('portfolio')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {siteContent.home.hero.primaryButton} <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentPage('pricing')}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  {siteContent.home.hero.secondaryButton}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{siteContent.home.features.sectionTitle}</h2>
              <p className="text-xl text-slate-400">{siteContent.home.features.sectionSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {siteContent.home.features.items.map((feature, index) => {
                const icons = [TrendingUp, Cpu, BarChart3];
                const colors = ['text-blue-400', 'text-purple-400', 'text-green-400'];
                const Icon = icons[index];
                
                return (
                  <div key={index} className="bg-slate-700/50 backdrop-blur p-8 rounded-xl border border-slate-600/50">
                    <Icon className={`w-12 h-12 ${colors[index]} mb-4`} />
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
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
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">{siteContent.portfolio.title}</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {siteContent.portfolio.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {siteContent.portfolio.algorithms.map((algorithm, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600/50">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{algorithm.name}</h3>
                <span className={`px-3 py-1 bg-${algorithm.statusColor}-500/20 text-${algorithm.statusColor}-400 rounded-full text-sm font-semibold`}>
                  {algorithm.status}
                </span>
              </div>
              <p className="text-slate-300 mb-6">
                {algorithm.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{algorithm.metrics.annualReturn}</div>
                  <div className="text-sm text-slate-400">{siteContent.portfolio.labels.annualReturn}</div>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">{algorithm.metrics.sharpeRatio}</div>
                  <div className="text-sm text-slate-400">{siteContent.portfolio.labels.sharpeRatio}</div>
                </div>
              </div>
              <div className="text-sm text-slate-400">
                <strong>{siteContent.portfolio.labels.markets}</strong> {algorithm.markets}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProcessPage = () => (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">{siteContent.process.title}</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {siteContent.process.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {siteContent.process.steps.map((step, index) => {
            const gradients = [
              'from-blue-600 to-purple-600',
              'from-purple-600 to-pink-600',
              'from-green-600 to-blue-600'
            ];
            const isReverse = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}>
                <div className="lg:w-1/2">
                  <div className={`bg-gradient-to-r ${gradients[index]} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6`}>
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="lg:w-1/2 bg-slate-800/50 p-8 rounded-xl border border-slate-600/50">
                  <div className="space-y-4">
                    {step.checklist.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-slate-300">{item}</span>
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
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">{siteContent.pricing.title}</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {siteContent.pricing.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {siteContent.pricing.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`backdrop-blur p-8 rounded-xl border transition-all duration-300 ${
                plan.featured 
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500 relative' 
                  : 'bg-slate-800/50 border-slate-600/50 hover:border-blue-500/50'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 ${
                  plan.featured 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : index === 2 
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-600/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">{siteContent.pricing.contact.title}</h3>
            <p className="text-slate-400">{siteContent.pricing.contact.subtitle}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder={siteContent.pricing.contact.form.namePlaceholder}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
              />
              <input 
                type="email" 
                placeholder={siteContent.pricing.contact.form.emailPlaceholder}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <textarea 
              placeholder={siteContent.pricing.contact.form.messagePlaceholder}
              rows="4"
              className="w-full px-4 py-3 mt-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
            ></textarea>
            <button className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              {siteContent.pricing.contact.form.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'portfolio': return <PortfolioPage />;
      case 'process': return <ProcessPage />;
      case 'pricing': return <PricingPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-xl font-bold text-white">{siteContent.siteName}</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    currentPage === item.id 
                      ? 'text-blue-400 bg-blue-400/10' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-colors duration-200 ${
                    currentPage === item.id 
                      ? 'text-blue-400 bg-blue-400/10' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
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
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
};

export default AlgoTradingWebsite;