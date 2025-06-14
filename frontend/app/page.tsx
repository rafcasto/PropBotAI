'use client';
import React, { useEffect, useState } from 'react';
import { trackButtonClick, pageview } from '../lib/analytics'; 
import { MessageCircle, Clock, TrendingUp, Shield, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';

export default function WhatsAppAILanding() {
  const [mounted, setMounted] = useState(false);
  const whatsappNumber = "+642102343400";
  const whatsappMessage = "I am looking for an office space in Takapuna";
  
  // Track initial page view only after component mounts
  useEffect(() => {
    setMounted(true);
    pageview();
  }, []);
  
  const openWhatsApp = (buttonLocation: string) => {
    // Only track if component is mounted (client-side)
    if (mounted) {
      trackButtonClick(`whatsapp_${buttonLocation}`);
    }
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWatchDemo = () => {
    // Only track if component is mounted (client-side)
    if (mounted) {
      trackButtonClick('watch_demo');
    }
    // Add your demo logic here
    console.log('Demo button clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">PropBot AI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">Reviews</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
            </nav>
            <button 
              onClick={() => openWhatsApp('header')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Now Available for Real Estate Professionals</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Never Miss a Lead with
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> WhatsApp AI</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Capture property inquiries 24/7, qualify leads instantly, and close more deals with our intelligent WhatsApp bot designed specifically for real estate professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openWhatsApp('hero_primary')}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={handleWatchDemo}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all"
                >
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3x</div>
                  <div className="text-sm text-gray-600">More Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Response Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Property Bot</div>
                      <div className="text-sm text-gray-500">Active now</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-2xl p-4 max-w-xs">
                      <p className="text-gray-800">Hi! I&apos;m interested in the 3BR apartment listing. Is it still available?</p>
                      <span className="text-xs text-gray-500">2:34 AM</span>
                    </div>
                    
                    <div className="bg-green-500 text-white rounded-2xl p-4 max-w-xs ml-auto">
                      <p>Yes! The 3BR unit at Marina Bay is available. Would you like to schedule a viewing? I can show you available times.</p>
                      <span className="text-xs text-green-100">2:34 AM</span>
                    </div>
                    
                    <div className="bg-gray-100 rounded-2xl p-4 max-w-xs">
                      <p className="text-gray-800">Perfect! What times are available this weekend?</p>
                      <span className="text-xs text-gray-500">2:35 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Convert Leads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered WhatsApp bot handles your property inquiries professionally, captures leads, and schedules viewings while you sleep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
              <p className="text-gray-600">Never miss a lead again. Our bot responds instantly to inquiries at any time of day or night.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Qualification</h3>
              <p className="text-gray-600">Automatically qualify leads by asking the right questions and collecting essential information.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Compliant</h3>
              <p className="text-gray-600">Enterprise-grade security ensures all conversations and data are protected and compliant.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Scheduling</h3>
              <p className="text-gray-600">Seamlessly schedule property viewings and sync with your calendar automatically.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Conversations</h3>
              <p className="text-gray-600">AI that understands context and responds naturally, providing a human-like experience.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">Track performance, conversion rates, and optimize your lead generation strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Real Estate Professionals
            </h2>
            <p className="text-xl text-gray-600">See what our clients say about their results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">&ldquo;PropBot AI increased our lead response rate by 300%. We&apos;re closing deals that would have been lost before!&rdquo;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Sarah Martinez</div>
                  <div className="text-sm text-gray-500">Property Manager, City Realty</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">&ldquo;The 24/7 availability is a game-changer. International clients can inquire anytime, and we never miss an opportunity.&rdquo;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  DJ
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">David Johnson</div>
                  <div className="text-sm text-gray-500">Real Estate Agent, Premier Properties</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">&ldquo;Setup was incredibly easy, and the ROI was immediate. Our team can focus on closing while the bot handles inquiries.&rdquo;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  LC
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Lisa Chen</div>
                  <div className="text-sm text-gray-500">Broker, Downtown Realty Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Connect with us on WhatsApp to get started instantly. Our team will set up your AI bot and have you capturing leads within 24 hours.
          </p>
          
          <button
            onClick={() => openWhatsApp('cta_main')}
            className="bg-white text-green-600 px-12 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Start on WhatsApp
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
          
          <p className="text-green-100 text-sm mt-6">
            💬 Click to chat with our team • No spam • Instant setup • Free consultation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">PropBot AI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The leading WhatsApp AI solution for real estate professionals. Never miss a lead, qualify prospects automatically, and close more deals.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 PropBot AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}