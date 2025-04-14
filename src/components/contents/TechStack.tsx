import { Badge } from '@/components/ui/Badge.styeld'
import FadeIn from '@/components/ui/FadeIn.motion'
import { motion } from 'motion/react'
import { Fragment } from 'react/jsx-runtime'
import styled from 'styled-components'

export default function TechStack() {
    const skills = {
        'FrontEnd Core': [
            { name: 'TypeScript', level: 85 },
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 60 },
        ],
    }

    const frontEndLibraries = [
        'tanstack-Query',
        'zustand',
        'react-hook-form',
        'formik',
        'zod',
        'yup',
        'tailwind CSS',
        'MUI',
    ]

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
            <h2>FrontEnd Libraries</h2>
            <div className="badges">
                {frontEndLibraries.map((badge) => (
                    <Badge $text={badge}>{badge}</Badge>
                ))}
            </div>
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
    .badges {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
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
