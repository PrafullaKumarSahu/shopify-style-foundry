
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-brand-teal" />
              <span className="text-xl font-bold text-brand-dark">StoreFoundry</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/features" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">
                Features
              </Link>
              <Link to="/templates" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">
                Templates
              </Link>
              <Link to="/pricing" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">
                Pricing
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Start free trial</Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-6 mt-6">
                  <Link to="/" className="flex items-center space-x-2 mb-6">
                    <ShoppingBag className="h-6 w-6 text-brand-teal" />
                    <span className="text-xl font-bold text-brand-dark">StoreFoundry</span>
                  </Link>
                  <Link to="/features" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">
                    Features
                  </Link>
                  <Link to="/templates" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">
                    Templates
                  </Link>
                  <Link to="/pricing" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">
                    Pricing
                  </Link>
                  <div className="flex flex-col space-y-4 pt-6">
                    <Link to="/login">
                      <Button variant="outline" className="w-full">Log in</Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full">Start free trial</Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
