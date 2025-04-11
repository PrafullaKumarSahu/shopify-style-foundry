
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const allTemplates = [
  {
    id: 1,
    name: "Fashion Boutique",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Fashion+Template",
    category: "Fashion",
    description: "Perfect for clothing stores and fashion brands.",
  },
  {
    id: 2,
    name: "Tech Store",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Tech+Template",
    category: "Electronics",
    description: "Ideal for electronics and gadget retailers.",
  },
  {
    id: 3,
    name: "Home Decor",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Home+Decor+Template",
    category: "Home & Garden",
    description: "Showcase your home goods and furniture beautifully.",
  },
  {
    id: 4,
    name: "Jewelry Shop",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Jewelry+Template",
    category: "Jewelry",
    description: "Elegant design for jewelry and accessories.",
  },
  {
    id: 5,
    name: "Bookstore",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Book+Template",
    category: "Books",
    description: "Perfect for bookstores and publishers.",
  },
  {
    id: 6,
    name: "Organic Market",
    image: "https://placehold.co/600x400/f5f6fa/a0aec0?text=Food+Template",
    category: "Food & Drink",
    description: "Showcase organic products and fresh food items.",
  },
];

const categories = [
  "All",
  "Fashion",
  "Electronics",
  "Home & Garden",
  "Jewelry",
  "Books",
  "Food & Drink",
];

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredTemplates = allTemplates.filter((template) => {
    const matchesSearch = template.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-brand-light py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-6">
              Store Templates
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Choose from our professionally designed templates to kickstart your online store
            </p>
            
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search templates..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-48">
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredTemplates.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTemplates.map((template) => (
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
                    <p className="text-gray-600 mt-2 mb-4">
                      {template.description}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="default"
                        className="flex-1"
                        onClick={() => alert(`Use ${template.name} template`)}
                      >
                        Use template
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => alert(`Preview ${template.name}`)}
                      >
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                No templates found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
