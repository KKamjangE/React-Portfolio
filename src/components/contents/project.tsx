import { Badge } from "@/components/ui/badge";
import projects from "@/data/projects";

export default function Project() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title}>
          <div className="flex justify-between items-center max-lg:flex-col max-lg:items-baseline max-lg:gap-2">
            <h2 className="text-lg font-bold max-lg:whitespace-normal">
              {project.title}
            </h2>
            <span className="font-medium whitespace-nowrap">
              {project.affiliation}
            </span>
          </div>
          <div className="flex flex-col gap-2 text-xs font-medium opacity-60">
            <span>{project.contributor}</span>
            <span>{project.period}</span>
          </div>
          <div className="text-sm [&>*]:my-3">
            {project.summary.map((item, index) => (
              <span key={`${project.title}-summary-${index}`}>{item}</span>
            ))}
          </div>
          <span className="font-bold">구현 기능</span>
          <div className="text-sm [&>*]:my-3.5 [&>*]:font-medium">
            {project.features.map((feature, index) => (
              <span key={`${project.title}-feature-${index}`}>{feature}</span>
            ))}
          </div>
          {project.urls.length > 0 ? (
            <div className="flex flex-col gap-3 text-sm font-medium">
              {project.urls.map(({ name, url }, index) => (
                <a
                  key={`${project.title}-url-${index}`}
                  href={url}
                  target="_blank"
                  className="p-1"
                >
                  {name}
                </a>
              ))}
            </div>
          ) : null}
          {project.performance && <span className="font-bold">성과</span>}
          <div className="text-sm [&>*]:my-3.5 [&>*]:font-medium">
            {project.performance?.map((performance, index) => (
              <span key={`${project.title}-performance-${index}`}>{performance}</span>
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <Badge
                key={`${project.title}-skill-${index}`}
                className="bg-black text-white border-transparent"
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
