import Container from "@/components/ui/Container";
import { RiFacebookCircleFill, RiHeart2Fill, RiInstagramFill, RiMailFill, RiMapPin2Fill, RiPhoneFill } from "@remixicon/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-surfaceAlt/40 pt-16 pb-8">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-primary">
              Delightful Cakes
            </h3>
            <p className="text-sm text-textMuted leading-relaxed max-w-xs">
              Handcrafting premium artisan cakes and gourmet pastries using the finest local ingredients for your most cherished celebrations.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-border/40 text-textMuted hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-xs"
              >
                <RiInstagramFill className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-border/40 text-textMuted hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-xs"
              >
                <RiFacebookCircleFill className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-text uppercase tracking-wider mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-textMuted hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-textMuted hover:text-primary transition-colors duration-300">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-textMuted hover:text-primary transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sm text-textMuted hover:text-primary transition-colors duration-300">
                  Sweet Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-body text-sm font-semibold text-text uppercase tracking-wider mb-5">
              Specialties
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-textMuted hover:text-primary cursor-pointer transition-colors duration-300">
                Celebration Cakes
              </li>
              <li className="text-sm text-textMuted hover:text-primary cursor-pointer transition-colors duration-300">
                Luxury Wedding Cakes
              </li>
              <li className="text-sm text-textMuted hover:text-primary cursor-pointer transition-colors duration-300">
                Artisan Bakery Items
              </li>
              <li className="text-sm text-textMuted hover:text-primary cursor-pointer transition-colors duration-300">
                Dessert Platters
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-body text-sm font-semibold text-text uppercase tracking-wider mb-1">
              Say Hello
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-textMuted">
                <RiMapPin2Fill className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>123 Baker Street, Sweet Ville, CA 90210</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-textMuted">
                <RiPhoneFill className="w-4 h-4 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-textMuted">
                <RiMailFill className="w-4 h-4 text-primary shrink-0" />
                <span>hello@delightfulcakes.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-textMuted">
            © {new Date().getFullYear()} Delightful Cakes. All rights reserved.
          </p>
          <p className="text-xs text-textMuted flex items-center gap-1 font-medium">
            Made with <RiHeart2Fill className="w-3.5 h-3.5 fill-primary text-primary inline animate-pulse" /> for cake lovers.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;