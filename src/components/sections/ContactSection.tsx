import { useState } from "react";
import { Mail, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_d70bhaq",
        "template_1xuvfpb",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "cmHudBVWYDxSwDeUk"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    }catch (error) {
  console.log("EmailJS Error:", error);
  toast({
    title: "Error",
    description: "Failed to send message. Please try again.",
    variant: "destructive",
  });
}


    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manyugoyal123@gmail.com",
      href: "mailto:manyugoyal123@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7973259053",
      href: "#",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Online Worldwide",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
            Get In Touch
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Let's Begin Your <span className="text-primary">Wellness Journey</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Ready to transform your health? Reach out for a consultation and let's
            create a personalized nutrition plan just for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-xl animate-fade-in-left">
            <CardContent className="p-6 md:p-8 lg:p-10">

              <h3 className="font-display text-2xl font-bold text-card-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-body text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background border-border focus:border-primary font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-body text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-background border-border focus:border-primary font-body"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="font-body text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary font-body"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-body text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your health goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background border-border focus:border-primary font-body resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-5 h-5" />
                </Button>

              </form>
            </CardContent>
          </Card>

          {/* Contact Information – KEPT INTACT */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h3>

              <p className="font-body text-muted-foreground leading-relaxed">
                I'm here to help you achieve your health goals. Feel free to reach
                out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <p className="font-body text-sm text-muted-foreground">
                      {info.label}
                    </p>

                    <p className="font-body font-medium text-foreground">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
