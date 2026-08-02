import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lightbulb, Users, LineChart, Target } from 'lucide-react';
import project4 from '@assets/generated_images/project-4.jpg';
import project7 from '@assets/generated_images/project-7.jpg';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Redefining the <br />Fabrication Industry
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            METALYX is not a fabricator. We are a technology-driven managed marketplace that brings trust, transparency, and corporate professionalism to industrial fabrication.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              The Indian fabrication industry is highly fragmented. For decades, companies seeking structural steelwork, warehouse framing, or modern architectural fabrication have faced the same persistent issues: delayed timelines, opaque pricing, inconsistent quality, and a complete lack of professional project management.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              METALYX was born to solve this exact problem. By building a network of rigorously vetted fabrication partners and layering it with our own expert project management and quality control, we provide a single point of accountability for clients.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Clients get their projects delivered flawlessly without managing multiple contractors. Fabrication partners receive a steady stream of work without worrying about sales or client management.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <img src={project7} alt="Structural framework" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 rounded-3xl bg-[#0A0A0A] border border-white/5">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 text-lg">
              To standardize the unorganized fabrication sector in India by providing a technology-backed managed marketplace that ensures 100% quality compliance and on-time delivery for every project.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-primary/10 border border-primary/20">
            <Lightbulb className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-primary-100 text-lg">
              To become India's most trusted and widely used platform for industrial and commercial fabrication, empowering local manufacturers while delivering world-class infrastructure.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide our decisions and operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Transparency", desc: "Clear pricing, open communication, and no hidden surprises." },
            { icon: Users, title: "Customer First", desc: "Every process is designed around client convenience and satisfaction." },
            { icon: Lightbulb, title: "Innovation", desc: "Leveraging technology to streamline complex physical workflows." },
            { icon: Shield, title: "Uncompromising Quality", desc: "Zero tolerance for substandard materials or poor craftsmanship." },
            { icon: LineChart, title: "Mutual Growth", desc: "Building systems where both our clients and fabrication partners thrive." },
            { icon: Target, title: "Reliability", desc: "Delivering what we promise, exactly when we promised it." },
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
            >
              <val.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{val.title}</h3>
              <p className="text-gray-400">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}