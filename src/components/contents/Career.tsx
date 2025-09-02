import { Badge } from '@/components/ui/badge'
import FadeIn from '@/components/ui/FadeIn.motion'
import YellowPoint from '@/components/ui/YellowPoint'
import careers from '@/data/careers'

export default function Career() {
  return (
    <>
      {careers.map((career) => (
        <div key={career.company} className="flex flex-col gap-6">
          <FadeIn>
            <h2 className="text-lg font-bold">
              <YellowPoint>{career.company}</YellowPoint>
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-2 text-xs font-medium opacity-60">
            <FadeIn>
              <div className="flex items-center gap-3">
                <span>{career.team}</span>
                <span className="block w-[6px] h-[6px] bg-black rounded-full" />
                <span>{career.position}</span>
              </div>
            </FadeIn>
            <FadeIn>{career.period}</FadeIn>
          </div>
          <div className="text-sm whitespace-normal [&>*]:my-3">
            {career.summary.map((sum, index) => (
              <FadeIn key={`${career.company}-summary-${index}`}>
                <span>{sum}</span>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <span className="font-bold">진행 프로젝트</span>
          </FadeIn>
          <div className="flex flex-col gap-3.5">
            {career.projects.map((project) => (
              <div key={project.title}>
                <FadeIn>
                  <h3 className="text-sm font-medium">🌐{project.title}</h3>
                </FadeIn>
                {project.summary.map((sum, sumIndex) => (
                  <FadeIn key={`${project.title}-summary-${sumIndex}`}>
                    <span className="block my-2 text-xs opacity-60">{sum}</span>
                  </FadeIn>
                ))}
              </div>
            ))}
          </div>
          <FadeIn>
            <div className="flex items-center flex-wrap gap-2">
              {career.skills.map((skill) => (
                <Badge key={`${career.company}-skill-${skill}`}>
                                    {skill}
                                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      ))}
    </>
  )
}