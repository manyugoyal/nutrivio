import { GraduationCap, Award, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const qualifications = [
    { icon: GraduationCap, text: "B.Sc. in Nutrition & Dietetics" },
    { icon: Award, text: "Post Graduate Diploma" },
    { icon: GraduationCap, text: "M.Sc. in Nutrition & Dietetics" },
    { icon: Heart, text: "Certified Wellness Coach" },
  ];

  const values = [
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Every individual is unique, and so is their nutrition plan",
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Addressing mind, body, and lifestyle for complete health",
    },
    {
      icon: Award,
      title: "Science-Backed",
      description: "Evidence-based nutrition combined with practical wisdom",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <div className="relative animate-fade-in-left order-2 lg:order-1">
            <div className="relative">
              {/* Background shapes */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-primary/10 rounded-3xl" />
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-accent/10 rounded-3xl" />
              
              {/* Main content card */}
              <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
                <div className="space-y-6">
                  
                  
                  <div className="space-y-4">
                    <h3 className="font-display text-3xl font-bold text-foreground">
                      Qualifications & Expertise
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {qualifications.map((qual) => (
                        <div
                          key={qual.text}
                          className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl"
                        >
                          <qual.icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-body text-sm text-foreground">
                            {qual.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-in-right order-1 lg:order-2">
            {/* Section header */}
            <div className="space-y-4">
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
                About Me
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Passionate About Your{" "}
                <span className="text-primary">Health Journey</span>
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I am a qualified dietitian with a B.Sc., Post Graduate Diploma, and M.Sc. 
                in Nutrition and Dietetics. As the founder of Nutrivio, I specialise in 
                weight loss, PCOD/PCOS, thyroid balance, diabetes reversal, and therapeutic 
                nutrition.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I blend science-backed expertise with a soulful, personalized approach 
                to empower lasting health transformations. My mission is to help you 
                achieve not just physical wellness, but complete harmony of mind and body.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {values.map((value) => (
                <div key={value.title} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-xl mb-3">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
