import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import project1 from "@assets/generated_images/Construction_management_dashboard_interface_4a6fe419.png";
import project2 from "@assets/stock_images/business_analytics_d_018471b4.jpg";
import project4 from "@assets/stock_images/quasytech.png";

interface Project {
  title: string;
  subtitle: string;
  challenge: string;
  solutions: string[];
  results: { metric: string; value: string }[];
  image?: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Construction Management Platform",
    subtitle: "50% Improvement in User Retention",
    challenge:
      "Legacy UI built with Knockout.js was outdated, slow, and hindering user experience. The platform needed modernization without disrupting ongoing operations.",
    solutions: [
      "Migrated entire UI from Knockout.js to React.js with component-based architecture",
      "Implemented lazy loading and code splitting for optimal performance",
      "Optimized components and reduced bundle size by 40%",
      "Led team of 3 developers through Agile migration process",
      "Integrated Google Drive, OneDrive, and Dropbox APIs for seamless file sharing",
    ],
    results: [
      { metric: "User Retention", value: "+50%" },
      { metric: "Performance", value: "+40%" },
      { metric: "Team Size", value: "3 Devs" },
    ],
    image: project1,
    techStack: [
      "React.js",
      "TypeScript",
      "Java",
      "Microservices",
      "Spring Boot",
      "JWT",
      "WebSocket",
      "RabbitMQ",
    ],
  },
  {
    title: "InsightStream Analytics Platform",
    subtitle: "Real-Time Business Intelligence Dashboard",
    challenge:
      "Clients needed fast, intuitive ways to analyze complex business data without manual paperwork or time-consuming processes.",
    solutions: [
      "Built interactive dashboards with React and TypeScript for real-time data visualization",
      "Developed multiple specialized views: Trend View, GP View, Summary View, Item View, and Map View",
      "Implemented Redux for efficient state management, improving performance by 15%",
      "Created RESTful APIs with Express.js for fast data retrieval",
      "Integrated JWT-based authentication for secure data access",
    ],
    results: [
      { metric: "Performance", value: "+15%" },
      { metric: "Views Built", value: "5+" },
      { metric: "Response Time", value: "Optimized" },
    ],
    image: project2,
    techStack: ["React", "TypeScript", "Redux", "Express.js", "Node.js", "JWT"],
  },
  {
    title: "Cloud Storage Integration Hub",
    subtitle: "Unified Multi-Cloud File Management",
    challenge:
      "Users struggled with managing files across multiple cloud storage platforms, leading to inefficient workflows and collaboration bottlenecks.",
    solutions: [
      "Integrated Google Drive, OneDrive, and Dropbox APIs into a unified interface",
      "Built seamless file sharing and collaboration features using React",
      "Implemented real-time WebSocket communication for instant updates",
      "Configured RabbitMQ for asynchronous event-driven architecture",
      "Developed RESTful APIs with Java Spring Boot for backend processing",
    ],
    results: [
      { metric: "Platforms", value: "3 Clouds" },
      { metric: "Collaboration", value: "Enhanced" },
      { metric: "Real-time", value: "WebSocket" },
    ],
    techStack: [
      "React",
      "Java",
      "Spring Boot",
      "WebSocket",
      "RabbitMQ",
      "JWT",
      "Cloud APIs",
    ],
  },
  {
    title: "QA Management Web Platform",
    subtitle: "Streamlined Quality Assurance Workflow",
    challenge:
      "Quality assurance processes needed a modern web platform to support comprehensive testing workflows across the full SDLC.",
    solutions: [
      "Built React.js web applications to support QA management processes",
      "Worked across all phases of SDLC cycle from requirements gathering to deployment",
      "Developed RESTful APIs using Java Spring Boot for seamless frontend-backend communication",
      "Created production-ready builds and deployed React applications on Vercel",
      "Ensured fast and reliable hosting with optimized performance",
    ],
    results: [
      { metric: "Full SDLC", value: "Coverage" },
      { metric: "Platform", value: "Vercel" },
      { metric: "Performance", value: "Optimized" },
    ],
    image: project4,
    techStack: ["React.js", "Java", "Spring Boot", "RESTful APIs", "Vercel"],
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
      className="mb-5"
    >
      <Card
        className="overflow-hidden hover-elevate transition-all duration-300"
        data-testid={`card-project-${index}`}
      >
        <div
          className={`grid ${
            project.image ? "lg:grid-cols-2" : "lg:grid-cols-1"
          } gap-0 ${isEven || !project.image ? "" : "lg:grid-flow-dense"}`}
        >
          {project.image && (
            <div
              className={`relative overflow-hidden ${
                isEven ? "" : "lg:col-start-2"
              }`}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-testid={`img-project-${index}`}
              />
            </div>
          )}

          <div className="p-8 lg:p-12 space-y-6">
            <div>
              <h3
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {project.title}
              </h3>
              <p className="text-primary font-semibold text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {project.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                  Challenge
                </h4>
                <p className="text-foreground">{project.challenge}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                  Solutions Delivered
                </h4>
                <ul className="space-y-2">
                  {project.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                Results
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {project.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="text-center p-3 bg-primary/5 rounded-lg"
                    data-testid={`text-result-${index}-${idx}`}
                  >
                    <div className="text font-bold text-primary">
                      {result.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    data-testid={`badge-tech-${tech.toLowerCase()}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
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
    <section id="projects" className="py-10 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world solutions showcasing technical expertise and measurable
            impact
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
