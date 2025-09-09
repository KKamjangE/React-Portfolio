import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in.motion";
import HoverMotion from "@/components/ui/hover-motion";
import YellowPoint from "@/components/ui/yellow-point";
import projects from "@/data/projects";

export default function Project() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title}>
          <FadeIn>
            <div className="flex justify-between items-center max-lg:flex-col max-lg:items-baseline max-lg:gap-2">
              <h2 className="text-lg font-bold max-lg:whitespace-normal">
                <YellowPoint>{project.title}</YellowPoint>
              </h2>
              <YellowPoint>
                <span className="font-medium whitespace-nowrap">
                  {project.affiliation}
                </span>
              </YellowPoint>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-2 text-xs font-medium opacity-60">
            <FadeIn>
              <span>{project.contributor}</span>
            </FadeIn>
            <FadeIn>
              <span>{project.period}</span>
            </FadeIn>
          </div>
          <div className="text-sm [&>*]:my-3">
            {project.summary.map((item, index) => (
              <FadeIn key={`${project.title}-summary-${index}`}>
                <span>{item}</span>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <span className="font-bold">구현 기능</span>
          </FadeIn>
          <div className="text-sm [&>*]:my-3.5 [&>*]:font-medium">
            {project.features.map((feature, index) => (
              <FadeIn key={`${project.title}-feature-${index}`}>
                {feature}
              </FadeIn>
            ))}
          </div>
          {project.urls.length > 0 ? (
            <div className="flex flex-col gap-3 text-sm font-medium">
              {project.urls.map(({ name, url }, index) => (
                <FadeIn key={`${project.title}-url-${index}`}>
                  <HoverMotion>
                    <a href={url} target="_blank" className="p-1">
                      {name}
                    </a>
                  </HoverMotion>
                </FadeIn>
              ))}
            </div>
          ) : null}
          <FadeIn>
            {project.performance && <span className="font-bold">성과</span>}
          </FadeIn>
          <div className="text-sm [&>*]:my-3.5 [&>*]:font-medium">
            {project.performance?.map((performance, index) => (
              <FadeIn key={`${project.title}-performance-${index}`}>
                {performance}
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="flex items-center flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <Badge key={`${project.title}-skill-${index}`}>{skill}</Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      ))}
    </>
  );
}
