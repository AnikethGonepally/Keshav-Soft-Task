import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-primary-blue-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Aniketh Tech</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Full-stack developer and AI/ML engineer passionate about creating innovative 
              solutions that bridge technology and real-world problems.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center hover:bg-primary-blue transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Me" },
                { to: "/contact", label: "Contact" },
                { to: "#", label: "Projects" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/80 hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                "Full-Stack Development",
                "AI/ML Solutions",
                "Cloud Computing",
                "Mobile Applications",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-blue transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-blue" />
                <span className="text-primary-foreground/80 text-sm">+91 6309305551</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-blue" />
                <span className="text-primary-foreground/80 text-sm">anikethgonepally2005@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-blue" />
                <span className="text-primary-foreground/80 text-sm">
                  Gokul Nagar, Tarnaka
                  <br />
                  Hyderabad, India 500017
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Aniketh Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};