import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6"
          >
            Let's Discuss Your Project
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Get a free, transparent quotation for your fabrication requirement within 48 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6 text-gray-400">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Phone / WhatsApp</p>
                    <a href="tel:+919898323876" className="hover:text-primary transition-colors">+91 98983 23876</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Email Address</p>
                    <a href="mailto:metalyx.team@gmail.com" className="hover:text-primary transition-colors">metalyx.team@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Headquarters</p>
                    <p>Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Business Hours</p>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 h-64 relative overflow-hidden">
              {/* Google Maps placeholder */}
              <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center">
                <MapPin className="w-12 h-12 text-white/20 mb-4" />
                <span className="text-white/40 absolute mt-12 font-medium">Map View</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Send us an Enquiry</h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Request Received</h4>
                  <p className="text-gray-400 mb-8">Thank you for reaching out. One of our project managers will contact you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another Request</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
                      <input 
                        id="name" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">Company Name</label>
                      <input 
                        id="company" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address *</label>
                      <input 
                        id="email" 
                        type="email"
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number *</label>
                      <input 
                        id="phone" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-300">Project Type *</label>
                    <select 
                      id="service" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled selected className="text-gray-900">Select a service</option>
                      <option value="steel" className="bg-[#1A1A1A]">Steel Fabrication</option>
                      <option value="warehouse" className="bg-[#1A1A1A]">Warehouse Structure</option>
                      <option value="interior" className="bg-[#1A1A1A]">Corporate Interior</option>
                      <option value="railing" className="bg-[#1A1A1A]">Railings & Staircases</option>
                      <option value="other" className="bg-[#1A1A1A]">Other / Custom</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details *</label>
                    <textarea 
                      id="message" 
                      required 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Please provide basic details about your requirement..."
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} size="lg" className="w-full h-14 text-base rounded-full shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all">
                    {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}