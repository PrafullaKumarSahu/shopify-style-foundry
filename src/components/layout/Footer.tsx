
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-light py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-brand-teal" />
              <span className="text-xl font-bold text-brand-dark">StoreFoundry</span>
            </Link>
            <p className="text-gray-600 max-w-sm">
              Build and launch your online store in minutes. No coding required.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-dark mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-dark mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-dark mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} StoreFoundry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
