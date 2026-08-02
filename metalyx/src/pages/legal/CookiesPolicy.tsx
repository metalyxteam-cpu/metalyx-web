import React from 'react';
import { motion } from 'framer-motion';

export default function CookiesPolicy() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Cookies Policy
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none text-gray-400"
        >
          <p>Last updated: January 2025</p>

          <h2 className="text-white mt-8 mb-4">1. What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

          <h2 className="text-white mt-8 mb-4">2. How We Use Cookies</h2>
          <p>METALYX uses cookies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the operation of our platform, enabling you to log into secure areas like the partner dashboard.</li>
            <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website when using it. This helps us improve the way our website works.</li>
            <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
          </ul>

          <h2 className="text-white mt-8 mb-4">3. Managing Cookies</h2>
          <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you.</p>
        </motion.div>
      </div>
    </div>
  );
}