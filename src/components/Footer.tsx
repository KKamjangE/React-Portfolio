import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterStyled>
            <p>Copyright 2023. Anjemin all rights reserved.</p>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 300px 0 100px;
    p {
        font-size: 0.6rem;
        opacity: 0.4;
    }
    @media screen and (max-width: 1024px) {
        padding-top: 150px;
    }
`
