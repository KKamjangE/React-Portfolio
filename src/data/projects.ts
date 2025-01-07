interface Projects {
    title: string
    summary: string[]
    affiliation: string
    period: string
    features: string[]
    urls: { name: string; url: string }[]
    skills: string[]
    contributor: string
    contribution: string
}

const projects: Projects[] = [
    {
        title: '현대 오토에버 Pickup Service POC',
        summary: [
            '현대 오토에버 픽업 주문 서비스입니다.',
            '내비게이션 어플리케이션의 웹 뷰로 서비스가 되는 사용자 서비스와 웹으로 접근하는 관리자 서비스로 나뉩니다.',
            '팀 학습을 통해 TypeScript를 도입한 프로젝트입니다.',
        ],
        affiliation: '(주)아크로퓨처',
        period: '2024.09. ~ 2024.12',
        features: [
            '사용자 서비스 : react-query의 cache를 이용해 서버와 클라이언트 간의 데이터 동기화',
            '사용자 서비스 : 장바구니의 메뉴 삭제 optimistic update 기능 구현',
            '사용자 서비스 : JWT 토큰 로그인 구현',
            '사용자 서비스 : api 공통 error handler 구현',
            '관리자 서비스 : 세션 로그인 기능 구현',
            '관리자 서비스 : 이미지 디스크 캐싱 문제 해결',
            '관리자 서비스 : 이미지 base64 인코딩, 업로드 기능 구현',
        ],
        urls: [],
        skills: [
            'React',
            'TypeScript',
            'react-query',
            'zustand',
            'jotai',
            'MUI',
            'Github',
            'Docker',
            'Kubernetes',
        ],
        contributor:
            'PM 1명, 기획 & 디자인 1명, 프론트엔드 개발 2명, 백엔드 개발 1명, 웹 퍼블리셔 1명',
        contribution: '64%',
    },
    {
        title: '현대 오토에버 Global Contents Provider Service',
        summary: [
            '현대 오토에버 지도 플랫폼 어드민 서비스입니다.',
            '이전 프로젝트의 회고를 통해 팀 내의 컨벤션과 공통 컴포넌트에 대한 기준을 정했습니다.',
        ],
        affiliation: '(주)아크로퓨처',
        period: '2024.03. ~ 2024.09.',
        features: [
            '지도 마커 클러스터링 기능 구현',
            '지도 마커 리렌더링 최적화',
            '공통 컴포넌트 리팩터링',
            'JWT 기반 로그인, 회원가입 기능 구현',
            '지도 poi 검색 및 필터 기능 구현',
            '반응형 웹 디자인',
        ],
        urls: [
            {
                name: '리렌더링 최적화에 대한 포스팅',
                url: 'https://velog.io/@ajm0718/Tanstack-Query-지도-마커-렌더링-최적화하기',
            },
        ],
        skills: ['React', 'MUI', 'react-query', 'zustand', 'react-google-maps', 'Github'],
        contributor: '기획 & 디자인 1명, 프론트엔드 개발 4명, 백엔드 개발 2명, 웹 퍼블리셔 1명',
        contribution: '45%',
    },
    {
        title: '현대 오토에버 Global Poi(Point of Interest) Search Service',
        summary: [
            '현대 오토에버 지도 검색 서비스입니다.',
            '프로젝트 설계 및 구축을 담당하고 기술들을 선정했습니다.',
            'React 학습을 위한 팀 스터디를 주도하여 팀원들의 기술 역량 강화에 기여했습니다.',
        ],
        affiliation: '(주)아크로퓨처',
        period: '2024.01. ~ 2024.05.',
        features: [
            'JWT 기반 로그인, 회원가입, OTP 인증 기능 구현',
            'i18next 다국어 지원 적용',
            'api 공통 error handler 구현',
            '지도 poi 검색 및 필터 기능 구현',
            '공통 dialog 구현',
            '통계 차트 기능 구현',
            '반응형 웹 디자인',
        ],
        urls: [],
        skills: [
            'React',
            'ReCharts',
            'MUI',
            'react-query',
            'zustand',
            'react-google-maps',
            'i18next',
            'Github',
        ],
        contributor: '기획 1명, 디자인 1명, 프론트엔드 개발 4명, 백엔드 개발 2명, 웹 퍼블리셔 1명',
        contribution: '33%',
    },
    {
        title: '개인 포트폴리오 (현재 사이트)',
        summary: ['React로 개발한 개인 포트폴리오 사이트입니다.'],
        affiliation: '개인 프로젝트',
        period: '2023.05. ~ 2025.01.',
        features: [
            'scroll spy 구현',
            'parallax scrolling 구현',
            'scroll progress bar 구현',
            '반응형 웹 디자인',
        ],
        urls: [
            {
                name: 'Github',
                url: 'https://github.com/KKamjangE/React-Portfolio',
            },
            {
                name: 'Site',
                url: 'https://anjemin-portfolio.vercel.app/',
            },
        ],
        skills: ['React', 'TypeScript', 'Styeld Component', 'Motion'],
        contributor: '개발 1명',
        contribution: '100%',
    },
    {
        title: '인터뷰메이트',
        summary: ['AI 화상 면접 연습 서비스입니다.'],
        affiliation: '크래프톤 정글',
        period: '2023.02. ~ 2023.03.',
        features: [
            '면접 녹화 영상 업로드 시간 단축 (85s => 62s)',
            '영상 로딩 속도 단축 (1,830ms => 600ms)',
            'WebRTC를 사용해 실시간 비디오 통신 구현',
            'socket 통신을 사용하여 사용자 간의 상태 공유',
            'react-query 데이터 캐싱',
            'aws amplify 배포',
        ],
        urls: [
            {
                name: 'Github',
                url: 'https://github.com/krafton-jungle-AI-InterviewMate/AI-InterviewMate-FE/tree/main',
            },
        ],
        skills: [
            'React',
            'TypeScript',
            'react-query',
            'recoil',
            'emotion',
            'AWS amplify',
            'Github',
        ],
        contributor: '프론트엔드 개발 2명, 백엔드 개발 3명',
        contribution: '33%',
    },
    {
        title: '코리아메쎄 전시 플랫폼',
        summary: [
            '전시회 기획, 운영, 디자인, 마케팅 서비스를 제공하는 플랫폼입니다.',
            'Figma를 통해 기획, 디자이너와 지속적으로 소통하며 UI/UX 디자인 세부사항을 조율하였습니다.',
            '브랜드의 개성을 표현하고 사용자의 흥미와 몰입도를 높이기 위한 인터랙티브 디자인이 많습니다.',
        ],
        affiliation: '(주)제이에스씨텍',
        period: '2022.07. ~ 2022.09.',
        features: [
            'parallax scrolling 구현',
            'swiper slide 구현',
            'scroll progress bar 구현',
            '전시, 프로젝트, 뉴스 검색 기능 구현',
        ],
        urls: [
            { name: 'Github', url: 'https://github.com/KKamjangE/KOREA_MESSE?tab=readme-ov-file' },
            { name: 'Site', url: 'http://www.koreamesse.kr/main/index' },
        ],
        skills: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Figma'],
        contributor: '프론트엔드 개발 2명, 백엔드 개발 3명',
        contribution: '50%',
    },
]

export default projects
