import { Leaf, Mail, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Leaf className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display text-2xl font-semibold">
                Nutrivio
              </span>
            </div>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Soulful Nutrition, Backed by Science. Empowering lasting health transformations through personalized, holistic nutrition solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 font-body">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3 font-body">
              <a
                href="mailto:manyugoyal123@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>manyugoyal123@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/salonigarg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/nutrivio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body text-primary-foreground/70">
            <p>© {currentYear} Nutrivio. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Saloni Garg
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
