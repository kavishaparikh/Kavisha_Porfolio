import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, Users } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  icon: any;
}

const experiences: Experience[] = [
  {
    company: "Tech Solutions Inc",
    role: "Senior Full-Stack Developer",
    period: "2023 - Present",
    achievements: [
      "Led development of cloud integration platform serving 500+ users",
      "Reduced deployment time by 60% through CI/CD automation",
      "Mentored 5 junior developers in modern web technologies",
      "Architected microservices infrastructure handling 10M+ requests/month",
    ],
    icon: Briefcase,
  },
  {
    company: "Digital Innovations Ltd",
    role: "Full-Stack Developer",
    period: "2021 - 2023",
    achievements: [
      "Built enterprise SSO system supporting 1000+ concurrent users",
      "Improved application performance by 40% through optimization",
      "Collaborated with cross-functional teams on 15+ projects",
      "Implemented testing frameworks increasing code coverage to 85%",
    ],
    icon: Users,
  },
  {
    company: "Freelance Projects",
    role: "Independent Developer",
    period: "2020 - 2021",
    achievements: [
      "Delivered 20+ successful projects for clients across industries",
      "Maintained 5-star rating on freelance platforms",
      "Specialized in rapid prototyping and MVP development",
      "Built long-term relationships with repeat clients",
    ],
    icon: Award,
  },
];

function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background"
        data-testid={`timeline-node-${index}`}
      />

      <Card className="p-6 hover-elevate transition-all duration-300" data-testid={`card-experience-${index}`}>
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <experience.icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">{experience.role}</h3>
            <p className="text-primary font-semibold">{experience.company}</p>
            <Badge variant="secondary" className="mt-2">{experience.period}</Badge>
          </div>
        </div>
        
        <ul className="space-y-2 ml-16">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of delivering impactful solutions and driving technical excellence
          </p>
        </motion.div>

        <div className="mt-12">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
