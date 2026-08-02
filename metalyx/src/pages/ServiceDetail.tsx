import React from 'react';
import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import project2 from '@assets/generated_images/project-2.jpg';

export default function ServiceDetail() {
  const [match, params] = useRoute('/services/:slug');
  const slug = params?.slug;
  const service = services.find(s => s.id === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">Service not found</h1>
        <Link href="/services">
          <Button variant="outline">Back to Services</Button>
        </Link>
      </div>
    );
  }

  const Icon = (Icons as any)[service.icon] || Icons.Cog;

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <Link href="/services" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-12 transition-colors">
          <Icons.ArrowLeft size={16} className="mr-2" /> Back to all services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {service.desc} Our verified partners execute these projects with precision, guided by our stringent quality control parameters.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 h-12 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Request Quote for {service.title}
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden aspect-[4/3] relative"
          >
            <img src={project2} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Precision Engineering", desc: "Every component is fabricated exactly to your structural drawings and specifications." },
            { title: "Quality Materials", desc: "We ensure only certified, high-grade materials (with MTC) are used by our partners." },
            { title: "Timely Execution", desc: "Professional project management ensures your timeline is respected and met." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
            >
              <Icons.CheckCircle2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}