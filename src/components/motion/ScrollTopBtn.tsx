import ScrollTopBtnView from './ScrollTopBtnView'

export default function ScrollTopBtn() {
    const scrollToTop = () => {
        // 스크롤을 맨 위로 이동시키는 함수
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return <ScrollTopBtnView scrollToTop={scrollToTop} />
}
