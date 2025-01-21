import { useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Leading Innovation in{" "}
              <span className="text-primary">Extrusion Technology</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in delay-200">
              31 years of experience in extrusion machinery industry with proven
              engineering and 100% performance assurance.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors animate-fade-in delay-300"
            >
              Explore Our Products
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="scroll-animate opacity-0 bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="scroll-animate opacity-0 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;