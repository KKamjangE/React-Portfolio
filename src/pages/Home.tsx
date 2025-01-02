import Content from '@/components/contents/Content'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Layout from '@/pages/Layout'
import ProgressBar from '@/components/ui/ProgressBar'
import Nav from '@/components/Nav'
import ScrollTopBtn from '@/components/ui/ScrollTopBtn'
import { useState } from 'react'
import Toggle from '@/components/toggle'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const onOpenToggle = () => {
        setIsOpen(true)
    }

    const onCloseToggle = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Toggle isOpen={isOpen} onOpenToggle={onOpenToggle} />
            <Nav isOpen={isOpen} onCloseToggle={onCloseToggle} />
            <ProgressBar />
            <Layout>
                <Intro />
                <Content />
                <Footer />
            </Layout>
            <ScrollTopBtn />
        </>
    )
}
