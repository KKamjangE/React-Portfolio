import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projects from "@/data/projects";
import { getSkillBadgeClasses } from "@/lib/skill-colors";
export default function Project() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title} className="space-y-6">
          <div className="flex justify-between items-center max-lg:flex-col max-lg:items-baseline max-lg:gap-2">
            <h2 className="text-2xl font-bold whitespace-nowrap">
              {project.title}
            </h2>
            <span className="text-lg font-semibold whitespace-nowrap">
              {project.affiliation}
            </span>
          </div>
          <div className="flex flex-col gap-2 text-base font-medium opacity-60">
            <span>{project.contributor}</span>
            <span>{project.period}</span>
          </div>
          <div className="flex flex-col gap-3">
            {project.summary.map((item, index) => (
              <p
                key={`${project.title}-summary-${index}`}
                className="font-medium"
              >
                {item}
              </p>
            ))}
          </div>
          <ul className="list-disc ml-4 flex flex-col gap-3">
            {project.features.map((feature, index) => (
              <li
                key={`${project.title}-feature-${index}`}
                className="font-medium"
              >
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start">
            {project.urls?.map(({ name, url }, index) => (
              <Button
                key={`${project.title}-url-${index}`}
                variant={"link"}
                size={"lg"}
                className="text-lg p-0 text-secondary font-bold"
                asChild
              >
                <a href={url} target="_blank">
                  {name}
                </a>
              </Button>
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <Badge
                key={`${project.title}-skill-${index}`}
                className={"text-sm font-semibold " + getSkillBadgeClasses(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
