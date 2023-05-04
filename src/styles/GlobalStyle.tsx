import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        /** 색상 변수 */
        --primary-100:#0085ff;
        --primary-200:#69b4ff;
        --primary-300:#e0ffff;
        --accent-100:#006fff;
        --accent-200:#e1ffff;
        --text-100:#FFFFFF;
        --text-200:#9e9e9e;
        --bg-100:#1E1E1E;
        --bg-200:#2d2d2d;
        --bg-300:#454545;

        /** 스타일 변수 */
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 24px;
        background-color: var(--bg-100);
        color: var(--text-100);
    }
`;

export default GlobalStyle;
