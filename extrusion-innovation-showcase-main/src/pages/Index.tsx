import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Users, Globe, Award, ArrowUpRight, Rocket, Package, Car, Building, Stethoscope, Leaf, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import techAnimation from "../assets/tech-animation.json";
import { FeatureSteps } from "@/components/blocks/feature-section";
import { StrengthsSection } from "@/components/blocks/strengths-section";
import { PreFooterCTA } from "@/components/blocks/pre-footer-cta";

const features = [
  { 
    step: 'Step 1', 
    title: 'Advanced Technology',
    content: 'Experience cutting-edge extrusion technology that sets new industry standards.', 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Quality Manufacturing',
    content: 'Our state-of-the-art manufacturing processes ensure the highest quality products.',
    image: 'https://images.unsplash.com/photo-1581092160607-7685fa1c1f1f?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Global Solutions',
    content: 'Delivering innovative extrusion solutions to clients worldwide.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64926?q=80&w=2070&auto=format&fit=crop'
  },
]

const Index = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={targetRef}
        style={{ y, opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Layered background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* White background base */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/98 to-white/95" />
          
          {/* Base grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-70" />
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          {/* Small grid lines */}
          <div className="absolute inset-0 bg-grid-small-white opacity-70" />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-primary/8 to-primary/5 animate-gradient" />
          
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-vignette opacity-90" />
          
          {/* Center spotlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full bg-gradient-radial from-white/40 via-primary/5 to-transparent blur-3xl"
          />
          
          {/* Additional vignette glow */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/30 to-white/60" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2" />
                Innovating Since 1990
              </span>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-2xl rounded-full"
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="inline-block bg-gradient-to-br from-primary via-primary-light to-primary bg-clip-text text-transparent">
                  Innovating the Future
                </span>
                <br className="hidden sm:block" />
                <span className="inline-block bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
                  of Extrusion
                </span>
                <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/10 to-primary-light/10 blur-xl opacity-50 animate-pulse" />
              </motion.h1>
            </div>

            {/* Enhanced Description with Responsive Typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mt-6 max-w-2xl mx-auto"
            >
              <span className="block text-base sm:text-lg text-gray-700 dark:text-gray-200 font-normal leading-relaxed tracking-wide">
                Pioneering advanced extrusion technologies with{" "}
                <span className="text-primary font-semibold">34 years</span> of excellence,{" "}
                <span className="relative inline-block">
                  delivering cutting-edge solutions
                  <svg
                    className="absolute -bottom-0.5 left-0 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    height="2"
                    viewBox="0 0 100 2"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 1C25 1 25 0.5 50 0.5C75 0.5 75 1 100 1"
                      stroke="url(#gradient)"
                      strokeWidth="0.3"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="0">
                        <stop offset="0%" stopColor="#0016a9" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#0016a9" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0016a9" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                for tomorrow's manufacturing challenges.
              </span>
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-white/40 via-transparent to-white/40 blur-sm" />
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4 flex-wrap justify-center"
            >
              <Button
                asChild
                className="group bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <Link to="/products">
                  Explore Solutions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-base rounded-xl border-2 hover:bg-primary/5 transition-all duration-300"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <StrengthsSection />

      {/* New Achievement Section */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Driving Industry Excellence</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Installations Worldwide" },
              { number: "31+", label: "Years of Excellence" },
              { number: "24/7", label: "Technical Support" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Industries Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">Industries We Serve</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Powering Diverse Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are trusted across multiple sectors, delivering precision and reliability where it matters most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Packaging",
                description: "Advanced solutions for flexible packaging and film manufacturing",
                icon: Package
              },
              {
                title: "Automotive",
                description: "Precision components for automotive applications",
                icon: Car
              },
              {
                title: "Construction",
                description: "Durable materials for building and infrastructure",
                icon: Building
              },
              {
                title: "Medical",
                description: "High-precision solutions for medical devices",
                icon: Stethoscope
              },
              {
                title: "Agriculture",
                description: "Sustainable solutions for agricultural applications",
                icon: Leaf
              },
              {
                title: "Consumer Goods",
                description: "Quality materials for everyday products",
                icon: ShoppingBag
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-xl group-hover:scale-175 transition-transform" />
                  <div className="relative bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-lg">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of advanced extrusion technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monolayer Blown Film Plant",
                description: "Advanced single layer film production with precise control",
                features: ["High Output", "Energy Efficient", "Easy Operation"],
              },
              {
                title: "AB/ABA Multilayer Plant",
                description: "Dual layer film production for enhanced properties",
                features: ["Multiple Layers", "Cost Effective", "Superior Quality"],
              },
              {
                title: "ABC Three Layer Plant",
                description: "Triple layer film production for specialized applications",
                features: ["Complex Structures", "Versatile Usage", "Premium Results"],
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Link to={`/products/${product.title.toLowerCase().replace(/ /g, "-")}`}>
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-4 bg-background">
        <FeatureSteps 
          features={features}
          title="Innovation in Extrusion"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
          className="py-16"
        />
      </div>

      <PreFooterCTA />
    </div>
  );
};

export default Index;
