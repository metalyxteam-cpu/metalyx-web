import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Terms of Service
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none text-gray-400"
        >
          <p>Last updated: January 2025</p>

          <h2 className="text-white mt-8 mb-4">1. Agreement to Terms</h2>
          <p>By accessing or using METALYX's platform, services, or website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our service.</p>

          <h2 className="text-white mt-8 mb-4">2. Description of Service</h2>
          <p>METALYX operates a managed marketplace connecting clients seeking fabrication services with verified fabrication partners. We provide project management, quality assurance, and payment facilitation services. We act as the principal contractor for the client and subcontract the physical manufacturing to our verified partners.</p>

          <h2 className="text-white mt-8 mb-4">3. Quotations and Pricing</h2>
          <p>All quotations provided through the platform are valid for the duration specified on the quote (typically 7-14 days due to raw material price fluctuations). Once a project is initiated and advance payment is received, the price is locked unless the client requests changes in scope.</p>

          <h2 className="text-white mt-8 mb-4">4. Project Execution</h2>
          <p>We are responsible for ensuring the project is executed according to the approved drawings and specifications. Timelines provided are estimates based on standard conditions. Force majeure events or client-driven changes may affect final delivery dates.</p>

          <h2 className="text-white mt-8 mb-4">5. Intellectual Property</h2>
          <p>Any designs, drawings, or specifications provided by the client remain their intellectual property. METALYX retains the rights to our platform, software, and proprietary project management methodologies.</p>

          <h2 className="text-white mt-8 mb-4">6. Limitation of Liability</h2>
          <p>In no event shall METALYX be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        </motion.div>
      </div>
    </div>
  );
}