/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Droplets, 
  Hammer, 
  ShieldCheck, 
  Clock, 
  Users, 
  Star,
  MapPin,
  Mail,
  Menu,
  X,
  ArrowRight,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  primary: 'bg-[#004aad]', // Deep Blue
  secondary: 'bg-[#ff7b00]', // Construction Orange
  textPrimary: 'text-[#004aad]',
  textSecondary: 'text-[#ff7b00]',
  hoverPrimary: 'hover:bg-[#003a8c]',
  hoverSecondary: 'hover:bg-[#e66e00]',
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const services = [
    { icon: <Hammer className="w-8 h-8" />, title: "Roof Repair", titleBn: "ছাদ মেরামত", desc: "Fixing leaks, cracks, and structural damage." },
    { icon: <Droplets className="w-8 h-8" />, title: "Waterproofing", titleBn: "ওয়াটারপ্রুফিং", desc: "100% guarantee against water leakage and dampness." },
    { icon: <Wrench className="w-8 h-8" />, title: "Crack Fix", titleBn: "ফাটল মেরামত", desc: "Professional sealing for roof and wall cracks." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "New Installation", titleBn: "নতুন ছাদ স্থাপন", desc: "Modern roofing solutions for new buildings." },
    { icon: <Clock className="w-8 h-8" />, title: "Maintenance", titleBn: "নিয়মিত রক্ষণাবেক্ষণ", desc: "Preventive care to extend your roof's lifespan." },
  ];

  const benefits = [
    { icon: <Clock className="text-orange-500" />, title: "Fast Response", desc: "Service within 24 hours in Mohammadpur." },
    { icon: <ShieldCheck className="text-orange-500" />, title: "100% Guaranteed", desc: "Long-lasting waterproof solutions." },
    { icon: <Users className="text-orange-500" />, title: "Expert Team", desc: "Skilled workers with years of experience." },
    { icon: <ShieldCheck className="text-orange-500" />, title: "Affordable Price", desc: "Best quality at the most competitive rates." },
  ];

  const testimonials = [
    { name: "Rahim Uddin", location: "Mohammadpur", text: "Excellent service! My roof leakage was fixed in just one day. Highly recommended.", rating: 5 },
    { name: "Sultana Begum", location: "Lalmatia", text: "The waterproofing work is top-notch. No more damp walls during monsoon.", rating: 5 },
    { name: "Kamal Hossain", location: "Adabor", text: "Professional team and very affordable pricing compared to others.", rating: 5 },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-orange-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className={`${COLORS.secondary} p-2 rounded-lg`}>
                <Hammer className="text-white w-6 h-6" />
              </div>
              <span className={`text-xl sm:text-2xl font-bold ${COLORS.textPrimary}`}>
                Mohammadpur <span className={COLORS.textSecondary}>Roofing</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="font-medium hover:text-orange-500 transition-colors">Services</a>
              <a href="#benefits" className="font-medium hover:text-orange-500 transition-colors">Why Us</a>
              <a href="#contact" className="font-medium hover:text-orange-500 transition-colors">Contact</a>
              <a 
                href="tel:+8801700000000" 
                className={`${COLORS.primary} text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 ${COLORS.hoverPrimary} transition-all shadow-lg shadow-blue-200`}
              >
                <Phone size={18} /> Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium py-2">Services</a>
                <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium py-2">Why Us</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium py-2">Contact</a>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <a href="tel:+8801700000000" className={`${COLORS.primary} text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2`}>
                    <Phone size={20} /> Call
                  </a>
                  <a href="https://wa.me/8801700000000" className="bg-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] hidden lg:block" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <CheckCircle2 size={16} />
                #1 Roofing Service in Mohammadpur
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Roofing Service in Mohammadpur – <span className={COLORS.textSecondary}>Leak-Free</span> & Waterproof Solutions!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                মোহাম্মদপুরে সেরা ছাদ মেরামত এবং ওয়াটারপ্রুফিং সেবা। আমরা দিচ্ছি ১০০% গ্যারান্টি এবং দ্রুত সমাধান। 
                Fast, reliable, and guaranteed service for your home or building.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+8801700000000" 
                  className={`${COLORS.primary} text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 ${COLORS.hoverPrimary} transition-all shadow-xl shadow-blue-200 group`}
                >
                  <Phone className="group-hover:shake" /> Call Now (কল করুন)
                </a>
                <a 
                  href="https://wa.me/8801700000000" 
                  className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl shadow-green-100"
                >
                  <MessageCircle /> WhatsApp Now
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-orange-500 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-semibold text-gray-700">Trusted by 500+ Homeowners</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/roofing-work/800/600" 
                  alt="Roofing Work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="text-green-600 w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800">Guaranteed</span>
                </div>
                <p className="text-xs text-gray-500">100% Waterproofing & Leakage Solution</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Done", value: "200+" },
              { label: "Years Experience", value: "5+" },
              { label: "Happy Clients", value: "500+" },
              { label: "Team Members", value: "20+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl sm:text-4xl font-black ${COLORS.textPrimary} mb-1`}>{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Professional Services</h2>
            <p className="text-lg text-gray-600">আমরা মোহাম্মদপুরে সব ধরণের ছাদ এবং ওয়াটারপ্রুফিং সমস্যার সমাধান করি।</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`${COLORS.secondary} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <h4 className={`${COLORS.textSecondary} font-bold mb-3`}>{service.titleBn}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
            
            {/* Special CTA Card */}
            <div className={`${COLORS.primary} p-8 rounded-[32px] text-white flex flex-col justify-center relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Need Urgent Help?</h3>
              <p className="mb-6 opacity-90 relative z-10">Emergency roof repair within 24 hours in Mohammadpur area.</p>
              <a href="tel:+8801700000000" className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors relative z-10">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why Choose Our Roofing Service?</h2>
              <div className="space-y-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="bg-white/10 p-4 rounded-2xl shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-blue-100">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/roofing-safety/600/700" 
                alt="Safety First" 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-orange-500 p-8 rounded-3xl shadow-xl">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="font-bold uppercase tracking-wider text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 italic">আমাদের গ্রাহকদের মূল্যবান মতামত</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex text-orange-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin size={12} /> {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16 bg-blue-50">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get a Free Quote Today!</h2>
                <p className="text-lg text-gray-600 mb-10">
                  আপনার ছাদের সমস্যা আমাদের জানান। আমরা দ্রুত সমাধান দেব। 
                  Tell us about your roof problem and get a free estimate.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`${COLORS.primary} p-3 rounded-xl text-white`}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Call Us Anytime</div>
                      <a href="tel:+8801700000000" className="text-xl font-bold hover:text-orange-500 transition-colors">+880 1700 000 000</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-xl text-white">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">WhatsApp Us</div>
                      <a href="https://wa.me/8801700000000" className="text-xl font-bold hover:text-green-600 transition-colors">+880 1700 000 000</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-xl text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="text-xl font-bold">Mohammadpur, Dhaka-1207</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12 lg:p-16">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="bg-green-100 p-6 rounded-full mb-6">
                      <CheckCircle2 className="text-green-600 w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600">We will contact you shortly. ধন্যবাদ!</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name (আপনার নাম)</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Rahim Ahmed"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-0 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number (ফোন নম্বর)</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="017XXXXXXXX"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-0 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Problem Description (সমস্যার বিবরণ)</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Describe your roof problem..."
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-0 transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    <button 
                      disabled={formStatus === 'submitting'}
                      type="submit" 
                      className={`w-full ${COLORS.secondary} text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-100 ${COLORS.hoverSecondary} transition-all flex items-center justify-center gap-3`}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : (
                        <>Send Message <ArrowRight size={20} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-orange-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Limited Slots Available This Week!
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium">
            Call now to secure your spot and get a free inspection in Mohammadpur. 
            দ্রুত সেবার জন্য এখনই কল করুন!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+8801700000000" 
              className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              <Phone size={24} /> CALL NOW
            </a>
            <a 
              href="https://wa.me/8801700000000" 
              className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} /> WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className={`${COLORS.secondary} p-2 rounded-lg`}>
                  <Hammer className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Mohammadpur <span className="text-orange-500">Roofing</span>
                </span>
              </div>
              <p className="max-w-md mb-8 leading-relaxed">
                Professional roofing and waterproofing solutions in Mohammadpur, Dhaka. 
                We provide high-quality materials and skilled labor for all your roofing needs.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><MessageCircle size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><Phone size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><Mail size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
                <li><a href="#benefits" className="hover:text-orange-500 transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-orange-500 shrink-0" size={20} />
                  <span>Mohammadpur, Dhaka-1207, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-orange-500 shrink-0" size={20} />
                  <span>+880 1700 000 000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-orange-500 shrink-0" size={20} />
                  <span>info@mohammadpurroofing.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Mohammadpur Roofing Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40 flex gap-4">
        <a 
          href="tel:+8801700000000" 
          className={`${COLORS.primary} text-white flex-1 py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform`}
        >
          <Phone size={20} /> Call
        </a>
        <a 
          href="https://wa.me/8801700000000" 
          className="bg-green-500 text-white flex-1 py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <MessageCircle size={20} /> WhatsApp
        </a>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .group-hover\\:shake {
          animation: shake 0.5s infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
