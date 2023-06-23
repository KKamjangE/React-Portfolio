import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        /** 색상 변수 */
        --accent-yellow:#f8cd07;
        --text-black:#000000;
        --text-white:#ffffff;
        --bg-white:#ffffff;
        --bg-dark-gray:#202224;
        --bg-light-gray:#f5f5f5;

        /** 스타일 변수 */
        font-family: 'Roboto','Noto Sans KR', sans-serif;
        font-size: 24px;
        background-color: var(--bg-light-gray);
        color: var(--text-black);
        a{
            color: var(--text-black);
            text-decoration: none;
        }
    }
`;

export default GlobalStyle;
