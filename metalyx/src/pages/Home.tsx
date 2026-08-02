import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Factory, HardHat, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, industries, projects } from '@/lib/data';
import heroBg from '@assets/generated_images/hero.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-0" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-gray-300">India's Premier Managed Network</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
              India's Smart Fabrication <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Management Platform</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              We connect you with verified fabrication experts and manage your project from quotation to completion. Professionalism, transparency, and uncompromised quality.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/partners">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-white/20 hover:bg-white/5">
                  Become a Partner
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { value: "500+", label: "Verified Fabricators" },
              { value: "1200+", label: "Completed Projects" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "25+", label: "Cities Served" },
              { value: "300+", label: "Industrial Clients" },
              { value: "50+", label: "Years Combined Exp" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">How METALYX Works</h2>
            <p className="text-gray-400 text-lg">A seamless, professionally managed workflow that guarantees quality and on-time delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Submit Requirement", desc: "Share your structural drawings or basic requirements with our engineering team." },
              { step: "02", title: "Smart Quotation", desc: "We provide a transparent, standardized quote based on current material rates." },
              { step: "03", title: "Partner Selection", desc: "We assign the perfect verified partner based on capability and location." },
              { step: "04", title: "Project Management", desc: "Our supervisors oversee fabrication, ensuring strict quality control." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group"
              >
                <div className="text-5xl font-black text-white/10 mb-6 group-hover:text-primary/20 transition-colors">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why METALYX */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-white mb-6 sticky top-32">Why Choose METALYX</h2>
              <p className="text-gray-400 text-lg mb-8">We bring corporate professionalism to the highly fragmented fabrication industry.</p>
              <Link href="/about">
                <Button variant="outline" className="rounded-full rounded-full border-white/20 hover:bg-white/5">
                  Learn more about us
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Verified Partners", desc: "Every fabricator undergoes a rigorous 40-point technical and financial audit." },
                { icon: HardHat, title: "Expert Management", desc: "Dedicated project managers handle communication, scheduling, and logistics." },
                { icon: CheckCircle2, title: "Quality Assurance", desc: "Stage-wise inspections and Material Test Certificates (MTC) provided." },
                { icon: Zap, title: "Technology Driven", desc: "Track progress, view inspection reports, and manage billing through our portal." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-card border border-white/[0.05]"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-400 text-lg max-w-2xl">Comprehensive fabrication management across all major domains.</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors">
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group block p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/50 hover:bg-white/[0.04] transition-all cursor-pointer h-full"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A glimpse into the complex structural challenges our network has solved.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/5">
                Explore Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Experience the future of fabrication management. Get a transparent, competitive quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-base rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}