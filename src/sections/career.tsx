import { Badge } from "@/components/ui/badge";
import careers from "@/data/careers";

export default function Career() {
  return (
    <>
      {careers.map((career) => (
        <div key={career.company} className="flex flex-col gap-6">
          <h2 className="text-lg font-bold">{career.company}</h2>
          <div className="flex flex-col gap-2 text-xs font-medium opacity-60">
            <div className="flex items-center gap-3">
              <span>{career.team}</span>
              <span className="block w-[6px] h-[6px] bg-black rounded-full" />
              <span>{career.position}</span>
            </div>
            {career.period}
          </div>
          <div className="text-sm whitespace-normal [&>*]:my-3">
            {career.summary.map((sum, index) => (
              <span key={`${career.company}-summary-${index}`}>{sum}</span>
            ))}
          </div>
          <span className="font-bold">진행 프로젝트</span>
          <div className="flex flex-col gap-3.5">
            {career.projects.map((project) => (
              <div key={project.title}>
                <h3 className="text-sm font-medium">🌐{project.title}</h3>
                {project.summary.map((sum, sumIndex) => (
                  <span
                    key={`${project.title}-summary-${sumIndex}`}
                    className="block my-2 text-xs opacity-60"
                  >
                    {sum}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {career.skills.map((skill) => (
              <Badge
                key={`${career.company}-skill-${skill}`}
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
