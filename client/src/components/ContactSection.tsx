import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, MessageCircle, Clock } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleContact = (method: string) => {
    console.log(`Contact via ${method} clicked`);
  };

  return (
    <section
      id="contact"
      className="py-10 px-6 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Let's Build Something Amazing Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how I
            can help bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Available for New Projects</span>
              </div>
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Typically responds within 24 hours
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Button
                size="lg"
                variant="outline"
                className="h-auto py-6 flex-col gap-2 hover-elevate"
                onClick={() => handleContact("email")}
                data-testid="button-contact-email"
              >
                <Mail className="w-6 h-6" />
                <span className="font-semibold">Email</span>
                <span className="text-xs text-muted-foreground">
                  Quick response
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-auto py-6 flex-col gap-2 hover-elevate"
                onClick={() => handleContact("calendar")}
                data-testid="button-contact-calendar"
              >
                <Calendar className="w-6 h-6" />
                <span className="font-semibold">Schedule Call</span>
                <span className="text-xs text-muted-foreground">
                  Book a meeting
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-auto py-6 flex-col gap-2 hover-elevate"
                onClick={() => handleContact("message")}
                data-testid="button-contact-message"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-semibold">Chat</span>
                <span className="text-xs text-muted-foreground">
                  Instant messaging
                </span>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
