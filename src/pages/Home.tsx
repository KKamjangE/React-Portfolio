import {
    ContentsContainer,
    ProgressBar,
    ScrollTopBtn,
    NavContainer,
    Intro,
    FooterView,
    Layout,
} from '@/components'

export default function Home() {
    return (
        <>
            <NavContainer />
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
