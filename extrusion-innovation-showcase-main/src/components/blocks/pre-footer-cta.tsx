import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const PreFooterCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-primary/10 via-primary/5 to-background border border-border"
        >
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Transform Your Manufacturing Process?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Join industry leaders who trust our extrusion solutions for their manufacturing needs.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <button className="inline-flex items-center justify-center rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 mt-8">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
