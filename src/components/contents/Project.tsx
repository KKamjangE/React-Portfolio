import styled from 'styled-components'
import { Badge } from '@/components/ui/Badge.styeld'
import FadeIn from '@/components/ui/FadeIn.motion'
import HoverMotion from '@/components/ui/HoverMotion'
import YellowPoint from '@/components/ui/YellowPoint'
import projects from '@/data/projects'

export default function Project() {
  return (
    <>
      {projects.map((project) => (
        <ProjectLayout key={project.title}>
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
              <span>{project.contributor}</span>
            </FadeIn>
            <FadeIn>
              <span>{project.period}</span>
            </FadeIn>
          </div>
          <div className="summary">
            {project.summary.map((item, index) => (
              <FadeIn key={`${project.title}-summary-${index}`}>
                <span>{item}</span>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <span className="feature-title">구현 기능</span>
          </FadeIn>
          <div className="features">
            {project.features.map((feature, index) => (
              <FadeIn key={`${project.title}-feature-${index}`}>📌{feature}</FadeIn>
            ))}
          </div>
          {project.urls.length > 0 ? (
            <div className="urls">
              {project.urls.map(({ name, url }, index) => (
                <FadeIn key={`${project.title}-url-${index}`}>
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
          <FadeIn>{project.performance && <span className="feature-title">성과</span>}</FadeIn>
          <div className="performance">
            {project.performance?.map((performance, index) => (
              <FadeIn key={`${project.title}-performance-${index}`}>🔥{performance}</FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="skills">
              {project.skills.map((skill, index) => (
                <Badge key={`${project.title}-skill-${index}`} $text={skill}>
                  {skill}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </ProjectLayout>
      ))}
    </>
  )
}

const ProjectLayout = styled.div`
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
            font-size: 1.2rem;
            font-weight: bold;
        }
        span {
            font-weight: 500;
            white-space: nowrap;
        }
    }
    .summary {
        font-size: 0.8rem;
        & > * {
            margin: 12px 0;
        }
    }
    .feature-title {
        font-weight: bold;
    }
    .features,
    .performance {
        font-size: 0.8rem;
        & > * {
            margin: 14px 0;
            font-weight: 500;
        }
    }
    .contribute {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 0.7rem;
        font-weight: 500;
        opacity: 0.6;
    }
    .skills {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }
    .urls {
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-size: 0.8rem;
        font-weight: 500;
        p {
            padding: 4px;
        }
    }
    @media screen and (max-width: 1024px) {
        .title {
            flex-direction: column;
            align-items: baseline;
            gap: 8px;
            flex-wrap: warp;
            h2 {
                white-space: normal;
            }
        }
    }
`
