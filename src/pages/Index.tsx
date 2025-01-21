import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Settings, Building } from "lucide-react";

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
    },
    {
      icon: Target,
      value: "100%",
      label: "Focus",
    },
    {
      icon: Building,
      value: "2000+",
      label: "Installation",
    },
    {
      icon: Settings,
      value: "Complete",
      label: "Extrusion Machinery Solution",
    },
  ];

  const products = [
    {
      title: "Monolayer Blown Film Plant",
      image: "/placeholder.svg",
      description:
        "Advanced single layer film production with precise control and high output.",
    },
    {
      title: "AB/ABA Multilayer Blown Film Plant",
      image: "/placeholder.svg",
      description:
        "Dual layer film production for enhanced material properties and cost efficiency.",
    },
    {
      title: "ABC Three Layer Blown Film Plant",
      image: "/placeholder.svg",
      description:
        "Triple layer film production for specialized applications and superior quality.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
              className="text-6xl md:text-7xl font-bold mb-6"
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
            >
              <Link
                to="/products"
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors glass-effect"
              >
                Explore Our Products
                <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl text-center hover:shadow-xl transition-shadow"
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
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
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
                  <Link
                    to={`/products/${product.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="text-primary hover:text-primary-dark inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;