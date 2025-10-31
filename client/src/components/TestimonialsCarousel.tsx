import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar1 from "@assets/generated_images/Client_testimonial_avatar_1_ab83e15d.png";
import avatar2 from "@assets/generated_images/Client_testimonial_avatar_2_7ab2b429.png";
import avatar3 from "@assets/generated_images/Client_testimonial_avatar_3_c3834bb8.png";
import avatar4 from "@assets/generated_images/Client_testimonial_avatar_4_d3e0f2fa.png";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc",
    content: "Outstanding work! The cloud integration platform exceeded our expectations. The developer delivered on time and implemented features we didn't even know we needed. Our team productivity increased by 40%.",
    avatar: avatar1,
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Enterprise Solutions",
    content: "Exceptional technical skills and communication. The SSO system was delivered flawlessly with comprehensive documentation. Highly responsive to feedback and went above and beyond to ensure our success.",
    avatar: avatar2,
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Director",
    company: "BuildCo",
    content: "The construction management platform transformed how we operate. Clean code, intuitive UI, and powerful features. The developer truly understood our business needs and delivered a solution that works.",
    avatar: avatar3,
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "StartupLab",
    content: "Best freelance developer I've worked with. Fast turnaround, high quality code, and excellent problem-solving skills. Will definitely hire again for future projects. Highly recommended!",
    avatar: avatar4,
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by companies and entrepreneurs worldwide
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 lg:p-12 max-w-4xl mx-auto" data-testid={`card-testimonial-${currentIndex}`}>
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                
                <p className="text-lg lg:text-xl mb-8 text-foreground leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16" data-testid={`avatar-testimonial-${currentIndex}`}>
                    <AvatarImage src={testimonials[currentIndex].avatar} />
                    <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <span key={i} className="text-primary">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={previous}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            
            <Button
              size="icon"
              variant="outline"
              onClick={next}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
