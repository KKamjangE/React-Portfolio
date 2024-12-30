import styled from 'styled-components'

export default function YellowPoint({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <YellowPointStyled>.</YellowPointStyled>
        </div>
    )
}

const YellowPointStyled = styled.span`
    color: var(--accent-yellow);
`
