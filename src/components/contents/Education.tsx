import FadeIn from '@/components/ui/FadeIn.motion'
import YellowPoint from '@/components/ui/YellowPoint'
import educations from '@/data/educations'

export default function Education() {
  return (
    <>
      {educations.map((education) => (
        <div key={education.organization} className="flex flex-col gap-6">
          <FadeIn>
            <h2 className="text-lg font-bold">
              <YellowPoint>{education.organization}</YellowPoint>
            </h2>
          </FadeIn>
          <FadeIn>
            <span className="text-xs font-medium opacity-60">{education.period}</span>
          </FadeIn>
          <FadeIn>
            <div className="text-sm">
              {education.summary.map((sum, index) => (
                <span key={`${education.organization}-${index}`}>{sum}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      ))}
    </>
  )
}