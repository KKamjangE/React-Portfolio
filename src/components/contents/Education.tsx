import ContentLayout from '@/components/contents/ContentLayout'
import FadeIn from '@/components/ui/FadeIn.motion'
import YellowPoint from '@/components/ui/YellowPoint'
import educations from '@/data/educations'
import styled from 'styled-components'

export default function Education() {
    return (
        <ContentLayout title="Education">
            {educations.map((education, idx) => (
                <EducationLayout key={idx}>
                    <FadeIn>
                        <h2>
                            <YellowPoint>{education.organization}</YellowPoint>
                        </h2>
                    </FadeIn>
                    <FadeIn>
                        <span className="period">{education.period}</span>
                    </FadeIn>
                    <div className="summary">
                        {education.summary.map((sum, index) => (
                            <FadeIn key={index}>
                                <span>{sum}</span>
                            </FadeIn>
                        ))}
                    </div>
                </EducationLayout>
            ))}
        </ContentLayout>
    )
}

const EducationLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    h2 {
        font-size: 1.4rem;
        font-weight: bold;
    }
    .period {
        font-size: 0.8rem;
        font-weight: 500;
        opacity: 0.6;
    }
    .summary {
        font-size: 0.9rem;
    }
`
