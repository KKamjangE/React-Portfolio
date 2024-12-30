import ContentsContainer from '@/components/contents/ContentsContainer'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Layout from '@/pages/Layout'
import ProgressBar from '@/components/ui/ProgressBar'
import Nav from '@/components/Nav'
import ScrollTopBtn from '@/components/ui/ScrollTopBtn'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function Home() {
    const isTablet = useMediaQuery('(max-width: 1024px)')
    const [isOpen, setIsOpen] = useState(false)
    const onClickToggle = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <>
            {isTablet ? (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={isOpen ? { x: 0 } : { x: '-100%' }}
                    transition={{ duration: 0.5 }}
                >
                    <Nav />
                </motion.div>
            ) : (
                <Nav />
            )}
            <button onClick={onClickToggle}>Toggle</button>
            <ProgressBar />
            <Layout>
                <Intro />
                <ContentsContainer />
                <Footer />
            </Layout>
            <ScrollTopBtn />
        </>
    )
}
