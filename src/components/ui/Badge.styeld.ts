import styled from 'styled-components'

const stringToHslColor = (str: string): string => {
    let hash = 0
    Array.from(str).forEach((s) => {
        hash = s.charCodeAt(0) + ((hash << 5) - hash)
    })
    const h = hash % 360
    const s = 70 + (hash % 30)
    const l = 65 + (hash % 20)
    return `hsl(${h}, ${s}%, ${l}%)`
}

const getTextColor = (bgColor: string): string => {
    const l = parseInt(bgColor.match(/\d+%\)$/)![0])
    return l > 60 ? '#000' : '#fff'
}

export const Badge = styled.span<{ $text: string }>`
    white-space: nowrap;
    background-color: ${({ $text }) => stringToHslColor($text)};
    border-radius: 12px;
    padding: 6px 10px;
    font-size: 0.7rem;
    font-weight: bold;
    color: ${({ $text }) => getTextColor(stringToHslColor($text))};
`
