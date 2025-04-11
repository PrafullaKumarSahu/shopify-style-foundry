
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6">
            Build your online store without code
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Launch your e-commerce business with our powerful and easy-to-use
            store builder. No technical skills required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8">
                Start for free
              </Button>
            </Link>
            <Link to="/templates">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Browse templates
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="relative mt-8 lg:mt-12 h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-16 z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
          <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200 animate-float">
            <img 
              src="https://placehold.co/1200x600/f5f6fa/a0aec0?text=Store+Builder+Interface" 
              alt="Store Builder Interface" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
