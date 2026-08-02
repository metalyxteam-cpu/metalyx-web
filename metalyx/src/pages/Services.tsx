import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { services } from '@/lib/data';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6"
          >
            Managed Fabrication Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            From conceptualization to final installation, we manage the entire lifecycle of your fabrication requirements across diverse domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = (Icons as any)[service.icon] || Icons.Cog;
            return (
              <Link key={service.id} href={`/services/${service.id}`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 8) * 0.05 }}
                  className="group p-8 rounded-2xl bg-card border border-white/[0.05] hover:border-primary/50 hover:bg-white/[0.04] transition-all cursor-pointer h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm flex-1">{service.desc}</p>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}