import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Building, Package, Image, Briefcase, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 2px 10px rgba(0, 0, 0, 0.1)"]
  );

  const menuItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Company", icon: Building, path: "/company" },
    { name: "Products", icon: Package, path: "/products" },
    { name: "Exhibition", icon: Image, path: "/exhibition" },
    { name: "Works", icon: Briefcase, path: "/works" },
    { name: "Contact us", icon: Mail, path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        background: headerBackground,
        boxShadow: headerShadow,
      }}
      className="fixed w-full z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
              Ashok Extrusion
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="flex items-center text-gray-700 hover:text-primary transition-colors relative group"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white absolute top-20 left-0 w-full shadow-lg"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center py-2 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="text-base font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;