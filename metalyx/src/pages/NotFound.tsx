import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[12rem] font-bold tracking-tighter text-white/5 leading-none">
          404
        </h1>
        <h2 className="text-3xl font-semibold mt-4 mb-6">Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full px-8">
            Return to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}