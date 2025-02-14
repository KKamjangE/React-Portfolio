import FadeIn from '@/components/ui/FadeIn.motion'
import { motion } from 'motion/react'
import { Fragment } from 'react/jsx-runtime'
import styled from 'styled-components'
import { SiReactquery } from 'react-icons/si'

export default function TechStack() {
    const skills = {
        'FrontEnd Core': [
            { name: 'JavaScript', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 90 },
        ],
        'FrontEnd Frameworks': [
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 60 },
        ],
    }

    const dummy = {
        'FrontEnd Libraries': [
            { name: 'Tanstack-Query', level: 90 },
            { name: 'Zustand', level: 90 },
            { name: 'React-hook-form', level: 90 },
            { name: 'Zod', level: 90 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'MUI', level: 80 },
        ],
        'Testing Libraries': [
            { name: 'Cypress', level: 60 },
            { name: 'Jest', level: 40 },
        ],
    }

    return (
        <SkillsLayout>
            {Object.entries(skills).map(([category, skills]) => (
                <Fragment key={category}>
                    <FadeIn>
                        <h2>{category}</h2>
                    </FadeIn>
                    {skills.map(({ name, level }, index) => (
                        <FadeIn key={index}>
                            <div className="skill">
                                <span>{name}</span>
                                <span>{level}%</span>
                            </div>
                            <div className="progress">
                                <motion.div
                                    initial={{ width: 0 }}
                                    transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
                                    whileInView={{ width: `${level}%` }}
                                    viewport={{ once: true }}
                                    className="progress-bar"
                                />
                            </div>
                        </FadeIn>
                    ))}
                </Fragment>
            ))}
            <SiReactquery />
        </SkillsLayout>
    )
}

const SkillsLayout = styled.div`
    h2 {
        font-size: 32px;
        font-weight: bold;
    }
    span {
        font-size: 20px;
    }
    .skill {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .progress {
        background-color: #d1d5db;
        border-radius: 16px;
        .progress-bar {
            height: 16px;
            background: linear-gradient(0.25turn, #3b82f6, #6366f1);
            border-radius: 16px;
        }
    }
    @media screen and (max-width: 1024px) {
        .progress-bar {
            height: 10px;
        }
    }
    @media screen and (max-width: 1024px) {
        h2 {
            font-size: 28px;
        }
        span {
            font-size: 16px;
        }
    }
`
