import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, 
  SiPython, SiDocker, SiKubernetes, SiMongodb, 
  SiPostgresql, SiRedis, SiGit, SiAmazon 
} from "react-icons/si";

interface Skill {
  name: string;
  icon: any;
  years: number;
  level: number;
}

const mainSkills: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, years: 3, level: 90 },
  { name: "TypeScript", icon: SiTypescript, years: 2, level: 85 },
  { name: "React", icon: SiReact, years: 3, level: 90 },
  { name: "Node.js", icon: SiNodedotjs, years: 3, level: 85 },
  { name: "Python", icon: SiPython, years: 2, level: 75 },
  { name: "Docker", icon: SiDocker, years: 2, level: 80 },
];

const otherSkills = [
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "Git", icon: SiGit },
  { name: "AWS", icon: SiAmazon },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 hover-elevate transition-all duration-300" data-testid={`card-skill-${skill.name.toLowerCase()}`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <skill.icon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{skill.name}</h3>
            <p className="text-sm text-muted-foreground">{skill.years} years</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Proficiency</span>
            <span className="font-medium">{skill.level}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks with a focus on delivering scalable solutions
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Main Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
          <div className="flex flex-wrap gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="p-3 gap-2 hover-elevate cursor-pointer"
                  data-testid={`badge-skill-${skill.name.toLowerCase()}`}
                >
                  <skill.icon className="w-5 h-5" />
                  <span>{skill.name}</span>
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
