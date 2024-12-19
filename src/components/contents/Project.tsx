import { FadeIn, YellowPoint } from '@/components'
import ContentLayout from '@/components/contents/ContentLayout'
import projects from '@/data/projects'
import styled from 'styled-components'

export default function Project() {
    return (
        <ContentLayout title="Project">
            {projects.map((project) => (
                <ProjectLayout>
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
                    <FadeIn>{project.period}</FadeIn>
                    {project.summary.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                    <p>구현 기능</p>
                    {project.features.map((feature, index) => (
                        <FadeIn key={index}>{feature}</FadeIn>
                    ))}
                    {project.skills.map((skill, index) => (
                        <FadeIn key={index}>{skill}</FadeIn>
                    ))}
                    <FadeIn>{project.contributor}</FadeIn>
                    {project.urls.map(({ name, url }, index) => (
                        <a href={url} key={index}>
                            <FadeIn>🔗{name}</FadeIn>
                        </a>
                    ))}
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
    }
`
