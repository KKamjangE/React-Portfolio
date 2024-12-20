import {
    ContentsContainer,
    ProgressBar,
    ScrollTopBtn,
    Nav,
    Intro,
    FooterView,
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
                <FooterView />
            </Layout>
            <ScrollTopBtn />
        </>
    )
}
