import ContentLayout from '@/components/contents/ContentLayout'
import FadeIn from '@/components/ui/FadeIn.motion'
import { Badge } from '@/components/ui/Badge.styeld'
import YellowPoint from '@/components/ui/YellowPoint'
import careers from '@/data/careers'
import styled from 'styled-components'

export default function Career() {
    return (
        <ContentLayout title="Career">
            {careers.map((career, idx) => (
                <CareerLayout key={idx}>
                    <FadeIn>
                        <h2 className="title">
                            <YellowPoint>{career.company}</YellowPoint>
                        </h2>
                    </FadeIn>
                    <div className="work-experience">
                        <FadeIn>
                            <div className="team-role">
                                <span>{career.team}</span>
                                <span className="circle" />
                                <span>{career.position}</span>
                            </div>
                        </FadeIn>
                        <FadeIn>{career.period}</FadeIn>
                    </div>
                    <div className="summary">
                        {career.summary.map((sum, index) => (
                            <FadeIn key={index}>{sum}</FadeIn>
                        ))}
                    </div>
                    <FadeIn>
                        <span className="project-title">진행 프로젝트</span>
                    </FadeIn>
                    <div className="project">
                        {career.projects.map((project, index) => (
                            <div key={index}>
                                <FadeIn>
                                    <h3>🌐{project.title}</h3>
                                </FadeIn>
                                {project.summary.map((sum, sumIndex) => (
                                    <FadeIn key={sumIndex}>
                                        <span>{sum}</span>
                                    </FadeIn>
                                ))}
                            </div>
                        ))}
                    </div>
                    <FadeIn>
                        <div className="skills">
                            {career.skills.map((skill, index) => (
                                <Badge key={index} $text={skill}>
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </FadeIn>
                </CareerLayout>
            ))}
        </ContentLayout>
    )
}

const CareerLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    .title {
        font-size: 1.4rem;
        font-weight: bold;
    }
    .work-experience {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 0.8rem;
        font-weight: 500;
        opacity: 0.6;
        .team-role {
            display: flex;
            align-items: center;
            gap: 12px;
            .circle {
                display: block;
                border-radius: 50px;
                background-color: #000;
                width: 6px;
                height: 6px;
            }
        }
    }
    .summary {
        font-size: 0.9rem;
        white-space: normal;
        & > * {
            margin: 12px 0;
        }
    }
    .project-title {
        font-weight: bold;
    }
    .project {
        display: flex;
        flex-direction: column;
        gap: 14px;
        h3 {
            font-size: 0.9rem;
            font-weight: 500;
        }
        span {
            display: block;
            margin: 8px 0;
            font-size: 0.8rem;
            opacity: 0.6;
        }
    }
    .skills {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }
    @media screen and (max-width: 1024px) {
        gap: 12px;
    }
`
