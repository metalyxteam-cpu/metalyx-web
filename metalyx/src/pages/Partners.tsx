import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle2, TrendingUp, Handshake, CreditCard, Banknote, Shield } from 'lucide-react';
import project4 from '@assets/generated_images/project-4.jpg';

export default function Partners() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-sm font-medium text-primary">For Fabricators</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Focus on Manufacturing.<br/>We'll handle the rest.
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join India's most trusted network of verified fabricators. Get consistent project flow, guaranteed payments, and let our project managers handle client communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] text-base">
                Apply for Partnership
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/20 text-base">
                  Contact Partner Support
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <img src={project4} alt="Partner manufacturing" className="w-full h-[600px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-white font-medium">Partner Dashboard</div>
                <div className="text-primary text-sm font-bold bg-primary/20 px-3 py-1 rounded-full">Active</div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-primary w-3/4" />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Current Project Progress</span>
                <span>75%</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Partner With METALYX?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We solve the biggest pain points of running a fabrication business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            { icon: TrendingUp, title: "Consistent Project Flow", desc: "Access high-value commercial and industrial projects without spending on marketing." },
            { icon: Handshake, title: "No Client Hassle", desc: "Our project managers handle all client communication, approvals, and revisions." },
            { icon: Banknote, title: "Predictable Payments", desc: "Milestone-based payment structure ensures you never face cash flow issues." },
            { icon: CreditCard, title: "Fair Commission Model", desc: "Transparent markup structure. We succeed only when you succeed." },
            { icon: Shield, title: "Legal Protection", desc: "We handle the contracts, liabilities, and insurance requirements." },
            { icon: CheckCircle2, title: "Growth Support", desc: "Get access to raw material financing and machinery upgrade loans through our banking partners." }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]"
            >
              <benefit.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to scale your fabrication capacity?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Our onboarding process evaluates your machinery, past projects, and financial stability. Join the elite network of India's best fabricators.
          </p>
          <Button size="lg" className="rounded-full px-10 h-14 text-base shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            Start Verification Process
          </Button>
        </div>
      </div>
    </div>
  );
}