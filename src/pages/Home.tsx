import {
    ContentsContainer,
    ProgressBar,
    ScrollTopBtn,
    Nav,
    Intro,
    Footer,
    Layout,
} from '@/components'

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
