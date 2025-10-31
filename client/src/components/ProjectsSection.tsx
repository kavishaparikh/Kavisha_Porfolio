import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";
import project1 from "@assets/generated_images/Cloud_storage_platform_interface_14eef75f.png";
import project2 from "@assets/generated_images/SSO_authentication_dashboard_interface_adf2782e.png";
import project3 from "@assets/generated_images/Construction_management_dashboard_interface_4a6fe419.png";

interface Project {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  image: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Cloud Storage Integration Platform",
    subtitle: "40% Faster File Access & Collaboration",
    challenge: "Organizations struggled with data scattered across Google Drive, OneDrive, and Dropbox, leading to inefficient collaboration and security concerns.",
    solution: "Built a centralized platform that seamlessly integrates multiple cloud storage providers, enabling unified file management, real-time collaboration, and enhanced security protocols.",
    results: [
      { metric: "Performance", value: "+40%" },
      { metric: "Users", value: "500+" },
      { metric: "Storage Unified", value: "5TB+" },
    ],
    image: project1,
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Docker", "RabbitMQ"],
  },
  {
    title: "Enterprise SSO Authentication System",
    subtitle: "Secure Single Sign-On for 1000+ Users",
    challenge: "Manual user management across multiple applications created security vulnerabilities and administrative overhead for enterprise clients.",
    solution: "Developed a custom Keycloak-based SSO solution with real-time user federation, reducing manual processes by 80% while strengthening security compliance.",
    results: [
      { metric: "Manual Work", value: "-80%" },
      { metric: "Active Users", value: "1000+" },
      { metric: "Apps Integrated", value: "15+" },
    ],
    image: project2,
    techStack: ["Java", "Quarkus", "MySQL", "JavaScript", "OAuth"],
  },
  {
    title: "Construction Management Platform",
    subtitle: "Advanced Project Planning & Scheduling",
    challenge: "Construction teams needed better visibility into complex project lifecycles with efficient scheduling and resource management capabilities.",
    solution: "Created a comprehensive project management system with Gantt charts, schedulers, and multi-format data import/export, empowering teams with real-time insights.",
    results: [
      { metric: "Planning Speed", value: "+60%" },
      { metric: "Projects Managed", value: "50+" },
      { metric: "Team Efficiency", value: "+45%" },
    ],
    image: project3,
    techStack: ["React", "TypeScript", "Spring Boot", "MySQL", "Git"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-20"
    >
      <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-project-${index}`}>
        <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? "" : "lg:grid-flow-dense"}`}>
          <div className={`relative overflow-hidden ${isEven ? "" : "lg:col-start-2"}`}>
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              data-testid={`img-project-${index}`}
            />
          </div>
          
          <div className="p-8 lg:p-12 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {project.title}
              </h3>
              <p className="text-primary font-semibold text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {project.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Challenge</h4>
                <p className="text-foreground">{project.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Solution</h4>
                <p className="text-foreground">{project.solution}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Results</h4>
              <div className="grid grid-cols-3 gap-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="text-center p-3 bg-primary/5 rounded-lg" data-testid={`text-result-${index}-${idx}`}>
                    <div className="text-2xl font-bold text-primary">{result.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Button variant="outline" className="gap-2" data-testid={`button-view-case-${index}`}>
              View Case Study
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Case studies showcasing problem-solving approaches and measurable results
          </p>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
