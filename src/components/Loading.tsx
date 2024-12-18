import { Oval } from 'react-loader-spinner'
import styled from 'styled-components'

export default function Loading() {
    return (
        <LoadingStyled>
            <p>Loading...</p>
            <Oval
                visible={true}
                ariaLabel="정보를 불러오는 중입니다."
                height={100}
                width={100}
                color="#f8cd07"
                secondaryColor="#202224"
            />
        </LoadingStyled>
    )
}

const LoadingStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 50px;
    p {
        font-size: 0.8rem;
        opacity: 0.6;
        margin-bottom: 50px;
    }
`
