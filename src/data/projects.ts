interface Projects {
    title: string
    summary: string[]
    affiliation: string
    period: string
    features: string[]
    performance?: string[]
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
            '사용자 서비스',
            'JWT 토큰 방식의 인증 기능 구현',
            '네이티브 앱과 웹뷰 간 양방향 통신 인터페이스를 구축하여 실시간 알림 시스템 구현',
            '픽업 위치, 결제, 상품 옵션, 장바구니, 주문 정보 페이지 구현',
            '슬라이드, 페이드 인/아웃 애니메이션 효과 구현',
            '다크모드 디자인 구현',
            '관리자 서비스',
            '세션 방식의 인증 기능 구현',
            '이미지 base64 인코딩 및 업로드 기능 구현',
            '주문/결제 목록, 내 정보, 카테고리 페이지 구현',
            '로그인 실패 로직 구현',
        ],
        performance: [
            '장바구니 상품 삭제 시 API 처리 중에는 상품이 아직 화면에 남아있는 문제 => 낙관적 업데이트로 중복 삭제 방지와 더 나은 사용자 경험 제공',
            '이미지 디스크 캐싱으로 이미지 변경 시 최신 이미지로 표시되지 않는 문제 => 해시값을 기반으로 해결하여 최신 이미지 보장 및 사용자 혼란 제거',
            'mutation key를 활용해 관련된 query들을 재요청할 수 있는 시스템을 구축해 개발 생산성 향상',
            '페이지네이션 prefetch 기술 도입으로 페이지 전환 속도 개선 및 사용자 경험 최적화',
            'MUI Theme를 사용해서 일관된 스타일을 제공해 개발 생산성 향상 및 사용자 경험 제공',
            '쿼리 응답 데이터를 캐싱하여 네트워크 요청 횟수 감소',
            '타입스크립트 도입을 통해 컴파일 단계에서 오류를 발견하여 버그 발생률 감소 및 개발 생산성 향상',
            '타입스크립트의 코드 자동완성 및 타입 추론으로 개발 생산성 향상',
            '백엔드 API 응답 타입과 프론트엔드 타입을 일치시켜 협업 효율성 개선',
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
            'JWT 토큰 방식의 인증 기능 구현',
            '지도 마커 클러스터링 기능 구현',
            '지도 기반 사고 진행 방향 폴리곤 시각화 구현',
            '로그인, 회원가입, 사고, 과속, 주차, 검색 페이지 구현',
            '반응형 디자인(데스크톱, 태블릿, 모바일) 구현',
            '다크모드 디자인 구현',
        ],
        performance: [
            '지도 마커 리렌더링 최적화',
            '@react-google-maps/api 라이브러리를 최신 vis.gl/react-google-maps로 마이그레이션하여 지도 기능 추가 및 마커 렌더링 성능 개선',
            '이전 프로젝트의 공통 컴포넌트를 리펙터링하여 코드 재사용성 증가 및 개발 생산성 향상',
            '기획자와 개발 중인 화면을 공유하기 위해 기획자 PC에 개발환경을 세팅해야하는 문제 => ngrok을 활용해 기획자가 개발 중인 화면 실시간 확인',
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
            'JWT 토큰 방식의 인증 기능 구현',
            'i18next를 활용한 다국어 지원 시스템 개발',
            'OTP 및 이메일 인증 기능 구현',
            '대시보드, 내 정보, 권한 관리, 권한 목록, 검색 관리, 통계, 로그인 이미지 관리 페이지 구현',
            '반응형 디자인(데스크톱, 태블릿, 모바일) 구현',
            '다크모드 디자인 구현',
        ],
        performance: [
            'keepPreviousData를 활용한 페이지네이션 및 필터링 구현으로 화면 깜빡임 현상을 제거하여 사용자 경험 향상',
            '중복 컴포넌트들을 공통화하여 개발 생산성 향상',
            'Figma의 코멘트 기능을 활용해 디자이너, 기획자와의 협업 효율성 개선',
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
            'WebRTC를 사용해 실시간 비디오 통신 구현',
            'socket 통신을 사용하여 사용자 간의 상태 공유',
            'aws amplify 배포',
        ],
        performance: [
            '파일을 청크 단위로 나누어 멀티 파트 방식으로 업로드하여 면접 녹화 영상 업로드 시간 단축 (85s => 62s)',
            '영상 파일을 m3u8 형식으로 컨버팅하여 HTTP Live Streaming(HLS) 서비스를 구현하여 사용자가 타임라인 이동 시 로딩 속도를 단축 (1,830ms => 600ms)',
            'react-query 데이터 캐싱으로 네트워크 요청 횟수 감소',
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
