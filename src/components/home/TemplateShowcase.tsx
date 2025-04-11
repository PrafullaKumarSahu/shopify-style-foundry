
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Fashion Boutique",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Fashion+Template",
    category: "Fashion",
  },
  {
    id: 2,
    name: "Tech Store",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Tech+Template",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Home Decor",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Home+Decor+Template",
    category: "Home & Garden",
  },
];

const TemplateShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Start with a beautiful template
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Choose from our collection of professionally designed templates and customize to fit your brand
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link to="/templates">
              <Button variant="outline" className="group">
                Browse all templates
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="rounded-lg overflow-hidden bg-white border border-gray-100 shadow-smooth hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-brand-teal font-medium">
                  {template.category}
                </span>
                <h3 className="text-xl font-bold text-brand-dark mt-1">
                  {template.name}
                </h3>
                <div className="mt-4">
                  <Link to={`/templates/${template.id}`}>
                    <Button variant="secondary" className="w-full">
                      View template
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
