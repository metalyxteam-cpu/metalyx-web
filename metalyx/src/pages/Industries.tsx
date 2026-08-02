import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { industries } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Factory, Briefcase } from 'lucide-react';
import project10 from '@assets/generated_images/project-10.jpg';

export default function Industries() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
            >
              Powering India's Core Industries
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-8"
            >
              Different industries have vastly different fabrication requirements. A pharmaceutical plant needs absolute hygiene and SS compliance, while a logistics warehouse prioritizes rapid structural erection. We have verified partners specialized in every domain.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-12 px-8">Discuss Your Project</Button>
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={project10} alt="Logistics Warehouse" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const getIcon = () => {
              if (['Factories', 'Industrial', 'Warehouses'].includes(ind)) return <Factory className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />;
              if (['Corporate Offices', 'Retail', 'Commercial Buildings'].includes(ind)) return <Briefcase className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />;
              return <Building className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />;
            };
            return (
              <motion.div 
                key={ind}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.05 }}
                className="group flex items-center justify-between p-6 rounded-xl bg-card border border-white/[0.05] hover:border-primary/50 hover:bg-white/[0.04] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {getIcon()}
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{ind}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
}