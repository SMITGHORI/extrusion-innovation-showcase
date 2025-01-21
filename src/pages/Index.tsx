import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Settings, Building, ChevronRight, Users, Globe, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
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

  const stats = [
    {
      icon: Calendar,
      value: "1990",
      label: "Since",
      description: "Years of Excellence",
    },
    {
      icon: Target,
      value: "100%",
      label: "Focus",
      description: "Customer Satisfaction",
    },
    {
      icon: Building,
      value: "2000+",
      label: "Installation",
      description: "Successful Projects",
    },
    {
      icon: Settings,
      value: "Complete",
      label: "Solution",
      description: "End-to-End Support",
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with innovative extrusion solutions",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with years of industry experience",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO certified manufacturing processes and quality control",
    },
  ];

  const products = [
    {
      title: "Monolayer Blown Film Plant",
      image: "/placeholder.svg",
      description: "Advanced single layer film production with precise control and high output.",
      features: ["High Output", "Energy Efficient", "Easy Operation"],
    },
    {
      title: "AB/ABA Multilayer Blown Film Plant",
      image: "/placeholder.svg",
      description: "Dual layer film production for enhanced material properties and cost efficiency.",
      features: ["Multiple Layers", "Cost Effective", "Superior Quality"],
    },
    {
      title: "ABC Three Layer Blown Film Plant",
      image: "/placeholder.svg",
      description: "Triple layer film production for specialized applications and superior quality.",
      features: ["Complex Structures", "Versatile Usage", "Premium Results"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="gradient-blur bg-primary/30 top-0 left-0" />
        <div className="gradient-blur bg-blue-500/30 bottom-0 right-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
            >
              Leading Innovation in{" "}
              <span className="text-primary">Extrusion Technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-700 mb-8"
            >
              31 years of experience in extrusion machinery industry with proven
              engineering and 100% performance assurance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors glass-effect group"
              >
                Explore Our Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center"
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine decades of experience with cutting-edge technology to deliver
              superior extrusion solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect p-8 rounded-xl hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="gradient-blur bg-primary/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-12"
          >
            Our Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
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
                  <Link
                    to={`/products/${product.title.toLowerCase().replace(/ /g, "-")}`}
                    className="text-primary hover:text-primary-dark inline-flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;