import styled from 'styled-components'

export default function YellowPointLayout({ children }: { children: React.ReactNode }) {
    return (
        <YellowPointLayoutStyled>
            {children}
            <span className="yellow-point">.</span>
        </YellowPointLayoutStyled>
    )
}

const YellowPointLayoutStyled = styled.p`
    span.yellow-point {
        color: var(--accent-yellow);
    }
`
