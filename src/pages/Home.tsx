import { useState } from 'react'
import Content from '@/components/contents/Content'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Nav from '@/components/Nav'
import Toggle from '@/components/toggle'
import ProgressBar from '@/components/ui/ProgressBar'
import ScrollTopBtn from '@/components/ui/ScrollTopBtn'
import Layout from '@/pages/Layout'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const onCloseToggle = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Toggle isOpen={isOpen} onToggle={onToggle} />
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
