
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Palette, 
  ShoppingCart, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  Globe,
  Layout,
  Settings,
  Bell,
  Truck,
  Search,
  Tag 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featureGroups = [
  {
    title: "Store Design",
    description: "Customize your store's look and feel with our powerful design tools",
    features: [
      {
        icon: <Layout className="h-6 w-6 text-brand-teal" />,
        name: "Drag & Drop Editor",
        description: "Easily design your store with our intuitive drag and drop interface"
      },
      {
        icon: <Palette className="h-6 w-6 text-brand-teal" />,
        name: "Theme Customization",
        description: "Change colors, fonts, and layouts to match your brand identity"
      },
      {
        icon: <Smartphone className="h-6 w-6 text-brand-teal" />,
        name: "Mobile Responsive",
        description: "All stores look great on any device, from desktop to mobile"
      }
    ]
  },
  {
    title: "E-commerce Tools",
    description: "Everything you need to manage products and orders",
    features: [
      {
        icon: <ShoppingCart className="h-6 w-6 text-brand-teal" />,
        name: "Product Management",
        description: "Easily add, edit, and organize your products"
      },
      {
        icon: <CreditCard className="h-6 w-6 text-brand-teal" />,
        name: "Payment Processing",
        description: "Accept credit cards, PayPal, and other payment methods"
      },
      {
        icon: <Truck className="h-6 w-6 text-brand-teal" />,
        name: "Shipping Options",
        description: "Set up various shipping methods and rates for your customers"
      }
    ]
  },
  {
    title: "Marketing & Analytics",
    description: "Tools to grow your business and track performance",
    features: [
      {
        icon: <Globe className="h-6 w-6 text-brand-teal" />,
        name: "SEO Optimization",
        description: "Optimize your store for search engines to drive more traffic"
      },
      {
        icon: <BarChart3 className="h-6 w-6 text-brand-teal" />,
        name: "Sales Analytics",
        description: "Track your store's performance with detailed reports"
      },
      {
        icon: <Bell className="h-6 w-6 text-brand-teal" />,
        name: "Marketing Campaigns",
        description: "Create email campaigns and promotions to boost sales"
      }
    ]
  },
  {
    title: "Store Management",
    description: "Tools to run your business efficiently",
    features: [
      {
        icon: <Settings className="h-6 w-6 text-brand-teal" />,
        name: "Store Settings",
        description: "Configure tax rates, currencies, and store policies"
      },
      {
        icon: <Search className="h-6 w-6 text-brand-teal" />,
        name: "Inventory Management",
        description: "Track stock levels and get low inventory alerts"
      },
      {
        icon: <Tag className="h-6 w-6 text-brand-teal" />,
        name: "Discount Codes",
        description: "Create and manage promotional discounts and coupons"
      }
    ]
  }
];

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-brand-light py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Powerful features to build your store
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Everything you need to create, launch, and grow your online business
            </p>
            <div className="flex justify-center">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8">
                  Start building your store
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          {featureGroups.map((group, index) => (
            <div 
              key={group.title} 
              className={`container mx-auto px-4 sm:px-6 lg:px-8 ${
                index > 0 ? "mt-24" : ""
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-dark mb-4">
                  {group.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {group.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {group.features.map((feature) => (
                  <div 
                    key={feature.name} 
                    className="p-6 rounded-lg border border-gray-100 shadow-smooth hover:shadow-lg transition-all duration-300 bg-white"
                  >
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-brand-teal bg-opacity-10 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="py-16 bg-gradient-to-r from-brand-teal to-brand-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
              Join thousands of entrepreneurs who are building their online stores with StoreFoundry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start for free
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-brand-blue">
                  Browse templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
