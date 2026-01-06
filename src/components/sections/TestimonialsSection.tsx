import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Coming Soon",
    role: "Client Testimonial",
    content:
      "Testimonials from satisfied clients will be displayed here. Real stories of transformation and success.",
    rating: 5,
  },
  {
    name: "Coming Soon",
    role: "Client Testimonial",
    content:
      "Share your journey with Nutrivio and inspire others on their path to wellness.",
    rating: 5,
  },
  {
    name: "Coming Soon",
    role: "Client Testimonial",
    content:
      "Your success story could be featured here. Let's begin your transformation today.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Client{" "}
            <span className="text-primary">Transformations</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Real stories from real people who transformed their health with Nutrivio's 
            personalized nutrition programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-accent/50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-card-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note for future testimonials */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-2xl px-6 py-4">
            <p className="font-body text-muted-foreground">
              ✨ Client testimonials coming soon! Your transformation story could be featured here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
