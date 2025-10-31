import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
}

const education: Education[] = [
  {
    degree: "Master of Science in Information Technology",
    field: "M.Sc IT",
    institution: "Dhirubhai Ambani Institute of Information and Communication Technology",
    location: "Gandhinagar, India",
  },
  {
    degree: "Bachelor of Computer Applications",
    field: "B.C.A.",
    institution: "S.D. Jain International College",
    location: "Surat, India",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Strong academic foundation in computer science and information technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full hover-elevate transition-all duration-300" data-testid={`card-education-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{edu.field}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{edu.degree}</p>
                    <p className="text-sm font-medium">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
