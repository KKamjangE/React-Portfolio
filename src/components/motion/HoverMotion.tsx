import styled from 'styled-components'
import YellowPointLayout from '../layout/YellowPointLayout'

export default function HoverMotion({
    children,
    isNav,
}: {
    children: React.ReactNode
    isNav?: boolean
}) {
    return (
        <HoverMotionStyled isNav={isNav}>
            <YellowPointLayout>{children}</YellowPointLayout>
        </HoverMotionStyled>
    )
}

const HoverMotionStyled = styled.div<{ isNav?: boolean }>`
    padding: ${(props) => (props.isNav ? '10px' : '0')};
    text-decoration: ${(props) => (props.isNav ? 'none' : 'underline')};
    display: ${(props) => (props.isNav ? 'block' : 'inline-block')};
    background: linear-gradient(to right, transparent 50%, var(--accent-yellow) 50%);
    background-position: 0, 0;
    background-size: 200%;
    transition: 0.25s ease;
    :hover {
        background-position: -100% 0;
    }
`
