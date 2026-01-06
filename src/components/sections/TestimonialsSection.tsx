import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ritika, 29",
    content:
      "I struggled with weight gain problem for years, trying every diet without success. Dt Saloni’s personalised plan finally helped me shed kilos in a healthy, sustainable way. I feel lighter, more energetic, and confident without ever feeling deprived.",
    rating: 4.8,
  },
  {
    name: "Neha, 26",
    content:
      "Living with PCOS was exhausting, but Dt Saloni helped me. The diet plan balanced my hormones, reduced bloating, and even regulated my cycle. I finally feel in control of my health again.",
    rating: 4.6,
  },
  {
    name: "Simran, 31",
    content:
      "Mood swings and low energy used to affect my daily life. Dt Saloni helped me balance my hormones and improve my sleep. I wake up refreshed and motivated every morning.",
    rating: 4.3,
  },
  {
    name : "Aman, 34",
    content : "I had constant fatigue and weight fluctuations due to hypothyroidism. With the help of Dt Saloni, I managed to lose 15 kgs and my thyroid reduced from 6.2 to 4.1 in 6 months. Now I can focus better at work and feel like myself again.",
rating: 4.2,
  },
  {
    name : "Sandeep, 44",
    content : "I used to feel tired all the time. After following this weight loss plan, I not only lost 10 kilos in 3 months but also regained my energy. I can play with my kids without feeling exhausted, and that’s priceless.",
    rating : 3.9,

  },
  {
    name: "Amit, 45",
    content:
      "My sugar levels were always unstable, and I relied heavily on medication. With Dt Saloni’s guidance, I learned how to eat smart and manage my diabetes naturally. My HbA1c reduced from 10.9 to 7.5 in 3 months. My doctor was amazed at the progress.",
    rating: 4.7,
  },
  {
    name: "Karan, 28",
    content:
      "What I love most about this programme is the constant support. The daily motivation on WhatsApp kept me accountable, and the personalised plan felt like it was made just for me. It’s more than a diet- it’s a lifestyle change.",
    rating: 4.4,
  },
];

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only 3 testimonials on main page when collapsed
  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 3);

  // Helper to render decimal star ratings
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // Full star
        stars.push(
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        );
      } else if (rating >= i - 0.5) {
        // Half/partial star effect
        stars.push(
          <Star
            key={i}
            className="w-5 h-5 text-yellow-400 fill-yellow-400 opacity-70"
          />
        );
      } else {
        // Empty star
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
      }
    }

    return <div className="flex gap-1 mb-4">{stars}</div>;
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-xl md:text-2xl font-semibold text-gray-900 uppercase tracking-wider">

            Success Stories
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Client <span className="text-gray-900">Transformations</span>
          </h2>

          <p className="font-body text-lg text-gray-900">
            Real stories from real people who transformed their health through
            science-backed personalized nutrition programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">

                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-emerald-200" />
                </div>

                {/* Decimal Rating */}
                {renderStars(testimonial.rating)}

                {/* Content */}
                <p className="font-body text-gray-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-emerald-700">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Improved Show All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-semibold text-l px-8 py-3 rounded-2xl bg-primary hover:text-gray-900 text-white shadow-md transition-all duration-300"
          >
            {showAll ? "Show Less Testimonials" : "Show All Testimonials"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
