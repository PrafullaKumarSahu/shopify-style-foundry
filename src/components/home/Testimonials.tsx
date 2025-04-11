
import React from "react";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "StoreFoundry helped me launch my boutique online in just a weekend. The templates are gorgeous and the interface is so intuitive.",
    name: "Sarah Johnson",
    role: "Owner, Bloom Boutique",
    avatar: "https://placehold.co/100/f5f6fa/a0aec0?text=SJ",
    rating: 5,
  },
  {
    id: 2,
    content:
      "As someone with zero tech skills, I was amazed at how easy it was to build my store. The support team was also incredibly helpful.",
    name: "Michael Chen",
    role: "Founder, Tech Haven",
    avatar: "https://placehold.co/100/f5f6fa/a0aec0?text=MC",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Since moving my store to StoreFoundry, our sales have increased by 40%. The built-in marketing tools are brilliant.",
    name: "Emma Davis",
    role: "CEO, Artisan Crafts",
    avatar: "https://placehold.co/100/f5f6fa/a0aec0?text=ED",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Loved by store owners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers say about their experience with StoreFoundry
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-lg border border-gray-100 shadow-smooth bg-white"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <p className="text-brand-dark font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
