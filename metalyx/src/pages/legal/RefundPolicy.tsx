import React from 'react';
import { motion } from 'framer-motion';

export default function RefundPolicy() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Refund Policy
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none text-gray-400"
        >
          <p>Last updated: January 2025</p>

          <h2 className="text-white mt-8 mb-4">1. General Policy</h2>
          <p>Because our services involve custom manufacturing and fabrication based on specific client requirements, our refund policy strictly follows the project phases. Once raw materials are procured or fabrication begins, full refunds are not possible.</p>

          <h2 className="text-white mt-8 mb-4">2. Phase-Based Refund Structure</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Pre-Procurement Phase:</strong> If a project is cancelled after the advance payment but before raw materials have been procured (usually within 48 hours of payment), a 100% refund will be issued minus a 2% administrative processing fee.</li>
            <li><strong>Post-Procurement Phase:</strong> If cancelled after raw materials have been purchased but before fabrication begins, the cost of raw materials and logistics will be deducted from the advance. The raw materials can be transported to the client's location at their expense if requested.</li>
            <li><strong>Fabrication Phase:</strong> Once cutting, bending, welding, or assembly has commenced, no refunds will be issued for that specific milestone. The client will be liable for the costs incurred up to the point of cancellation.</li>
          </ul>

          <h2 className="text-white mt-8 mb-4">3. Quality Defects</h2>
          <p>We stand by our quality. If delivered components deviate critically from approved engineering drawings and cannot be rectified or replaced by our partners within a mutually agreed reasonable timeframe, a full or partial refund will be provided based on the severity of the defect and usability of the components.</p>

          <h2 className="text-white mt-8 mb-4">4. Processing Time</h2>
          <p>Approved refunds will be processed within 10-15 business days to the original source of payment.</p>
        </motion.div>
      </div>
    </div>
  );
}