import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ashok Extrusion Tech</h3>
            <p className="text-gray-400 mb-4">
              Leading provider of innovative extrusion technologies and components
              for plastic extrusion since 1990.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@ashokextrusiontech.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                info@ashokextrusiontech.com
              </a>
              <a
                href="tel:+919979840772"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (+91) 9979840772
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Products",
                "About Us",
                "Applications",
                "Exhibition",
                "Works",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <div className="flex text-gray-400">
              <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
              <p>
                Plot no. 984, G.I.D.C. Area: Makapura,
                <br />
                Vadodara - 390010
                <br />
                Gujarat, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Ashok Extrusion Tech Pvt Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;