import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-body text-sm font-medium text-muted-foreground">
                Soulful Nutrition, Backed by Science
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Saloni Garg
              </h1>
              <p className="font-display text-xl md:text-2xl lg:text-3xl text-primary font-medium">
                Dietitian, Wellness Entrepreneur & Founder of Nutrivio
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transforming lives through personalized, holistic nutrition solutions. 
              Empowering you to achieve lasting health with science-backed expertise 
              and a soulful approach.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection("#services")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-base px-8 py-6 group"
              >
                View Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold text-base px-8 py-6"
              >
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              {[
                { value: "500+", label: "Clients Transformed" },
                { value: "8+", label: "Years Experience" },
                { value: "6", label: "Specializations" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-primary rounded-full opacity-50" />
              
              {/* Real Profile Image */}
<div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-secondary flex items-center justify-center">
  <img
    src="/images/nutrivo.jpeg"
    alt="Saloni Garg"
    className="w-full h-full object-cover"
  />
</div>



              
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
};

export default HeroSection;
