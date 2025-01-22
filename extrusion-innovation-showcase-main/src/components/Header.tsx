import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
  { name: "Products", path: "/products" },
  { name: "Exhibition", path: "/exhibition" },
  { name: "Works", path: "/works" },
  { name: "Contact us", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-4">
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative rounded-2xl transition-all duration-500 ${
              isScrolled 
                ? "bg-white/70 backdrop-blur-lg shadow-lg border border-white/20" 
                : "bg-white/30 backdrop-blur-md"
            }`}
          >
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-primary hover:opacity-90 transition-opacity"
                >
                  <span className="text-xl font-semibold tracking-tight">Ashok Extrusion</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Contact Button */}
                <div className="hidden md:flex items-center space-x-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                  >
                    Contact Now
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden border-t"
                >
                  <div className="px-4 py-4 sm:px-6">
                    <nav className="flex flex-col space-y-3">
                      {menuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-2 px-3 py-2 text-base text-center text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
                      >
                        Contact Now
                      </Link>
                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-28" />
    </>
  );
}