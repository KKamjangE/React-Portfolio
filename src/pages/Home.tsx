import ContentsContainer from '@/components/contents/ContentsContainer'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Layout from '@/pages/Layout'
import ProgressBar from '@/components/ui/ProgressBar'
import Nav from '@/components/Nav'
import ScrollTopBtn from '@/components/ui/ScrollTopBtn'

export default function Home() {
    return (
        <>
            <Nav />
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
