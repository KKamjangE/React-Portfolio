import { motion } from 'motion/react'
import { Fragment } from 'react/jsx-runtime'
import { Badge } from '@/components/ui/badge'
import FadeIn from '@/components/ui/FadeIn.motion'

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
    <div>
      {Object.entries(skills).map(([category, skills]) => (
        <Fragment key={category}>
          <FadeIn>
            <h2 className="text-3xl font-bold max-lg:text-2xl">{category}</h2>
          </FadeIn>
          {skills.map(({ name, level }) => (
            <FadeIn key={name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-xl max-lg:text-base">{name}</span>
                <span className="text-xl max-lg:text-base">{level}%</span>
              </div>
              <div className="bg-gray-300 rounded-2xl">
                <motion.div
                  initial={{ width: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  className="h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl max-lg:h-2.5"
                />
              </div>
            </FadeIn>
          ))}
        </Fragment>
      ))}
      <h2 className="text-3xl font-bold max-lg:text-2xl">FrontEnd Libraries</h2>
      <div className="flex flex-wrap gap-3.5">
        {frontEndLibraries.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>
    </div>
  )
}