import styled from 'styled-components'

export default function Layout({ children }: { children: React.ReactNode }) {
    return <LayoutStyled>{children}</LayoutStyled>
}

const LayoutStyled = styled.div`
    padding-left: 20vw;
    @media screen and (max-width: 1024px) {
        padding-left: 0;
    }
`
