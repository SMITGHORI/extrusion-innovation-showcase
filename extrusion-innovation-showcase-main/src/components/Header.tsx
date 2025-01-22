import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/70 backdrop-blur-lg shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            <span className="relative z-10">ExInn</span>
            <div className="absolute inset-0 bg-primary/10 blur-lg rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              ["Home", "/"],
              ["Products", "/products"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="relative group text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <span className="relative z-10">{label}</span>
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-gray-600 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed inset-0 z-40 bg-white/90 backdrop-blur-lg md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  {[
                    ["Home", "/"],
                    ["Products", "/products"],
                    ["About", "/about"],
                    ["Contact", "/contact"],
                  ].map(([label, path]) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-medium text-gray-800 hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}