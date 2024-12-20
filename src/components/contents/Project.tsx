import { FadeIn, HoverMotion, YellowPoint } from '@/components'
import ContentLayout from '@/components/contents/ContentLayout'
import { Badge } from '@/components/ui/Badge.styeld'
import projects from '@/data/projects'
import styled from 'styled-components'

export default function Project() {
    return (
        <ContentLayout title="Project">
            {projects.map((project, idx) => (
                <ProjectLayout key={idx}>
                    <FadeIn>
                        <div className="title">
                            <h2>
                                <YellowPoint>{project.title}</YellowPoint>
                            </h2>
                            <YellowPoint>
                                <span>{project.affiliation}</span>
                            </YellowPoint>
                        </div>
                    </FadeIn>
                    <div className="contribute">
                        <FadeIn>
                            <span className="contributor">{project.contributor}</span>
                        </FadeIn>
                        <FadeIn>
                            <span className="period">{project.period}</span>
                        </FadeIn>
                    </div>
                    <div className="summary">
                        {project.summary.map((item, index) => (
                            <FadeIn key={index}>
                                <span>{item}</span>
                            </FadeIn>
                        ))}
                    </div>
                    <FadeIn>
                        <span className="feature-title">구현 기능</span>
                    </FadeIn>
                    <div className="features">
                        {project.features.map((feature, index) => (
                            <FadeIn key={index}>📌{feature}</FadeIn>
                        ))}
                    </div>
                    {project.urls.length > 0 ? (
                        <div className="urls">
                            {project.urls.map(({ name, url }, index) => (
                                <FadeIn key={index}>
                                    🔗
                                    <HoverMotion>
                                        <a href={url} target="_blank">
                                            {name}
                                        </a>
                                    </HoverMotion>
                                </FadeIn>
                            ))}
                        </div>
                    ) : null}
                    <FadeIn>
                        <div className="skills">
                            {project.skills.map((skill, index) => (
                                <Badge key={index} text={skill}>
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </FadeIn>
                </ProjectLayout>
            ))}
        </ContentLayout>
    )
}

const ProjectLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
            font-size: 1.4rem;
            font-weight: bold;
        }
        span {
            font-weight: 500;
        }
    }
    .summary {
        font-size: 0.9rem;
        /* display: flex; */
        & > * {
            margin: 12px 0;
        }
    }
    .feature-title {
        font-weight: bold;
    }
    .features {
        font-size: 0.9rem;
        & > * {
            margin: 14px 0;
            font-weight: 500;
        }
    }
    .contribute {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .contributor {
            font-size: 0.8rem;
            font-weight: 500;
            opacity: 0.6;
        }
        .period {
            font-size: 0.8rem;
            font-weight: 500;
            opacity: 0.6;
        }
    }
    .skills {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .urls {
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-size: 0.9rem;
        font-weight: 500;
        p {
            padding: 4px;
        }
    }
`
