import React from 'react';
import { motion } from 'framer-motion';

export default function CancellationPolicy() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Cancellation Policy
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none text-gray-400"
        >
          <p>Last updated: January 2025</p>

          <h2 className="text-white mt-8 mb-4">1. Project Cancellation by Client</h2>
          <p>Clients may request to cancel a project by submitting a formal written request to their assigned Project Manager. The impact of cancellation depends entirely on the current stage of the project as detailed in our Refund Policy.</p>

          <h2 className="text-white mt-8 mb-4">2. Cancellation by METALYX</h2>
          <p>METALYX reserves the right to cancel a project under the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Failure by the client to make milestone payments within the stipulated timeframe.</li>
            <li>Client's inability to provide necessary approvals, site access, or required documentation leading to indefinite delays.</li>
            <li>If the project scope is deemed unsafe, legally non-compliant, or technically unfeasible after detailed engineering review.</li>
          </ul>
          <p>In the event METALYX cancels a project due to technical unfeasibility before procurement, a full refund of any advance will be provided.</p>

          <h2 className="text-white mt-8 mb-4">3. Modification of Scope</h2>
          <p>If you need to change the scope rather than cancel, please notify us immediately. Scope changes will result in a revised quotation and timeline. Work on the modified scope will only begin after written approval of the revised terms.</p>
        </motion.div>
      </div>
    </div>
  );
}