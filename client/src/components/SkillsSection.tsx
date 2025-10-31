import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SiJavascript, SiTypescript, SiReact, SiAngular,
  SiNodedotjs, SiSpringboot, SiRedux, SiCplusplus,
  SiMongodb, SiMysql, SiNeo4J, SiGit,
  SiPostman, SiFigma, SiBootstrap, SiTailwindcss,
  SiHtml5, SiCss3, SiJquery
} from "react-icons/si";
import { Code2 } from "lucide-react";

interface Skill {
  name: string;
  icon: any;
}

const mainExpertise: Skill[] = [
  { name: "React.js", icon: SiReact },
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "JavaScript", icon: SiJavascript },
];

const additionalSkills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Angular", icon: SiAngular },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "C++", icon: SiCplusplus },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "jQuery", icon: SiJquery },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Neo4j", icon: SiNeo4J },
  { name: "SQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind", icon: SiTailwindcss },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card 
        className="p-6 hover-elevate transition-all duration-300 text-center" 
        data-testid={`card-skill-${skill.name.toLowerCase()}`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="p-4 bg-primary/10 rounded-lg">
            <skill.icon className="w-10 h-10 text-primary" />
          </div>
          <h3 className="font-semibold text-base">{skill.name}</h3>
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
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern technologies with hands-on experience in full-stack development
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Main Expertise */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Main Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {mainExpertise.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {additionalSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 4} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 max-w-4xl">
            <Badge variant="secondary">RESTful APIs</Badge>
            <Badge variant="secondary">JWT Authentication</Badge>
            <Badge variant="secondary">WebSocket</Badge>
            <Badge variant="secondary">Agile Methodologies</Badge>
            <Badge variant="secondary">Swagger</Badge>
            <Badge variant="secondary">Material-UI</Badge>
            <Badge variant="secondary">Linux</Badge>
            <Badge variant="secondary">Express.js</Badge>
            <Badge variant="secondary">Knockout JS</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
