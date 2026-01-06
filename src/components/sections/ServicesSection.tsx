import { Scale, Heart, Zap, Activity, Sparkles, UserCheck, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scale,
    title: "Weight Loss Programs",
    description:
      "At Nutrivio, weight loss is never about crash diets or deprivation. We design personalized, science-backed plans that fit seamlessly into your lifestyle, focusing on metabolism, portion control, and mindful eating. With ongoing support and practical strategies, you'll achieve healthy, lasting results that feel natural and sustainable.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "PCOD / PCOS Management",
    description:
      "Managing PCOD/PCOS requires more than just diet—it's about restoring balance. Our programs target insulin resistance, reduce inflammation, and support hormonal health through tailored nutrition. With the right foods and lifestyle guidance, you'll experience improved energy, reduced symptoms, and greater cycle regularity.",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Zap,
    title: "Thyroid Balance",
    description:
      "Thyroid health impacts energy, metabolism, and overall wellness. We create nutrition plans that support thyroid hormone production and address both hypo- and hyperthyroidism. By combining targeted foods with stress-reducing lifestyle tips, you'll feel more energized, balanced, and in control of your health.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Activity,
    title: "Diabetes Reversal & Management",
    description:
      "Nutrivio's diabetes programs focus on stabilizing blood sugar naturally. Through low-glycemic meal planning, balanced food combinations, and smart swaps, we help you reduce dependency on medication and reclaim your health. The goal is long-term stability, improved sugar levels, and a healthier, more confident you.",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Sparkles,
    title: "Hormonal Balance Programs",
    description:
      "Hormonal imbalances affect mood, energy, and overall vitality. Our holistic approach combines nutrition, lifestyle coaching, and stress management to restore harmony. By supporting adrenal and reproductive health, these programs help you feel balanced, vibrant, and emotionally well.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: UserCheck,
    title: "Personalized Wellness Coaching",
    description:
      "Every individual's journey is unique. With one-on-one coaching, we provide customized diet plans, daily motivation via WhatsApp/Instagram, and regular progress tracking. This interactive support ensures you stay on track, feel guided, and enjoy a truly personalized wellness experience.",
    color: "bg-accent/20 text-accent",
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Transform Your Health With{" "}
            <span className="text-primary">Expert Care</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Comprehensive nutrition programs designed to address your unique health 
            challenges and empower lasting transformations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <CardTitle className="font-display text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="font-body text-lg text-muted-foreground mb-6">
            Ready to start your transformation journey?
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-base px-8 py-6 group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
