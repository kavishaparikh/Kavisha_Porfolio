import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "Quasytech",
    role: "Software Developer",
    location: "Toronto, Canada",
    period: "May 2024 - Oct 2024",
    achievements: [
      "Built React.js web applications to support QA management processes",
      "Worked across all phases of SDLC cycle, including requirements gathering to deployment",
      "Developed RESTful APIs using Java Spring Boot for seamless frontend-backend communication",
      "Created production-ready builds and deployed React applications on Vercel",
    ],
  },
  {
    company: "Visilean Pvt. Ltd.",
    role: "Software Developer",
    location: "Ahmedabad, India",
    period: "Jul 2021 - Jan 2024",
    achievements: [
      "Migrated legacy UI from Knockout.js to React.js, improving user retention by 50%",
      "Improved application performance by 40% through lazy loading, code splitting, and optimization",
      "Integrated Google Drive, OneDrive, and Dropbox APIs enabling seamless file sharing",
      "Implemented JWT authentication for secure login and enhanced user experience",
      "Built real-time WebSocket integrations and configured RabbitMQ for event-driven communication",
      "Led a team of 3 developers on successful frontend migration project using Agile practices",
      "Managed Git workflows, reviewed pull requests, ensuring high-quality maintainable code",
    ],
  },
  {
    company: "Magenta Insights",
    role: "Frontend Developer Intern",
    location: "Ahmedabad, India",
    period: "Jan 2021 - Jun 2021",
    achievements: [
      "Developed interactive React + TypeScript dashboards for client reporting",
      "Built multiple views: Trend View, GP View, Summary View to enhance data visualization",
      "Improved state management using Redux, resulting in 15% faster performance",
      "Built and consumed RESTful APIs with Express.js, reducing response time",
      "Implemented JWT-based authentication improving data security and session handling",
    ],
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
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">{experience.role}</h3>
            <p className="text-primary font-semibold">{experience.company}</p>
            <p className="text-sm text-muted-foreground">{experience.location}</p>
            <Badge variant="secondary" className="mt-2">{experience.period}</Badge>
          </div>
        </div>
        
        <ul className="space-y-2 ml-16">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
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
            3.5+ years of hands-on experience in full-stack development across diverse industries
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
