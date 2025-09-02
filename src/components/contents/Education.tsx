import styled from 'styled-components'
import FadeIn from '@/components/ui/FadeIn.motion'
import YellowPoint from '@/components/ui/YellowPoint'
import educations from '@/data/educations'

export default function Education() {
  return (
    <>
      {educations.map((education) => (
        <EducationLayout key={education.organization}>
          <FadeIn>
            <h2>
              <YellowPoint>{education.organization}</YellowPoint>
            </h2>
          </FadeIn>
          <FadeIn>
            <span className="period">{education.period}</span>
          </FadeIn>
          <FadeIn>
            <div className="summary">
              {education.summary.map((sum, index) => (
                <span key={`${education.organization}-${index}`}>{sum}</span>
              ))}
            </div>
          </FadeIn>
        </EducationLayout>
      ))}
    </>
  )
}

const EducationLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    h2 {
        font-size: 1.2rem;
        font-weight: bold;
    }
    .period {
        font-size: 0.7rem;
        font-weight: 500;
        opacity: 0.6;
    }
    .summary {
        font-size: 0.8rem;
    }
`
