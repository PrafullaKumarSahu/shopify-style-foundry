
import React from "react";
import { 
  Palette, 
  ShoppingCart, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: <Palette className="h-8 w-8 text-brand-teal" />,
    title: "Customizable Templates",
    description:
      "Choose from dozens of professionally designed templates and customize them to match your brand.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-brand-teal" />,
    title: "Product Management",
    description:
      "Easily add, organize, and manage your products with our intuitive dashboard.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-brand-teal" />,
    title: "Secure Payments",
    description:
      "Accept payments from customers around the world with our secure checkout system.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-brand-teal" />,
    title: "Analytics & Insights",
    description:
      "Track your store's performance with detailed analytics and actionable insights.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-brand-teal" />,
    title: "Mobile Responsive",
    description:
      "Your store will look great on any device, from desktops to smartphones.",
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-teal" />,
    title: "SEO Friendly",
    description:
      "Optimize your store for search engines to attract more customers organically.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Everything you need to build your store
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools to help you create, manage, and grow your online business
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 shadow-smooth hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-brand-teal bg-opacity-10 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
