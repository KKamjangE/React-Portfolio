interface Projects {
  title: string;
  summary: string[];
  affiliation: string;
  period: string;
  features: string[];
  urls: { name: string; url: string }[];
  skills: string[];
  contributor: string;
}

const projects: Projects[] = [
  {
    title: "KT 관리 서비스",
    summary: ["대외비 프로젝트"],
    affiliation: "(주)아크로퓨처",
    period: "2025.07. ~ 2025.09",
    features: [
      "가상화 기법을 사용해서 대용량 측위 데이터 렌더링 성능을 40배 개선 (2,000ms → 50ms)",
      "CDN 기반 KT 지도 라이브러리를 React 컴포넌트로 구현하여 마커 렌더링 성능을 개선하고 재사용성을 높임",
      "품질 지표 현황, 모니터링, 측정 지점 관리, 측정 번호 관리, 권한 관리 페이지 개발",
    ],
    urls: [
      {
        name: "가상화 기법을 사용한 렌더링 성능 개선",
        url: "https://velog.io/@ajm0718/React-%EA%B0%80%EC%83%81%ED%99%94%EB%A1%9C-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Material UI",
      "Tanstack Query",
      "React Hook Form",
    ],
    contributor: "프론트엔드 개발 1명, 백엔드 개발 1명",
  },
  {
    title: "KT 수사기관",
    summary: ["대외비 프로젝트"],
    affiliation: "(주)아크로퓨처",
    period: "2025.01. ~ 2025.06",
    features: [
      "JSP 기반 서비스를 서버와 프론트엔드로 분리하여 리뉴얼",
      "기존 사용자 경험을 해치지 않으면서 현대적인 UI/UX를 도입하여 서비스 전환의 이질감 최소화",
      "유지보수성 향상을 위해 자바스크립트에서 타입스크립트로 점진적 마이그레이션을 주도",
      "다수의 사용자 입력 과정을 Multi-step form으로 구현하여 사용자의 인지 부담을 줄이고 사용자 경험을 개선",
      "Tanstack Query의 prefetch 기술을 페이지네이션에 적용해 다음 페이지 데이터를 백그라운드에서 미리 로드함으로써 사용자가 다음 콘텐츠를 빠르게 볼 수 있도록 UX를 개선",
      "위치 등록, 위치 조회, 공지사항, 등록 이력 조회, 사용 이력, 통계 관리, 권한 관리 페이지 개발",
    ],
    urls: [],
    skills: [
      "React",
      "TypeScript",
      "Material UI",
      "Tanstack Query",
      "Zustand",
      "React Hook Form",
    ],
    contributor: "프론트엔드 개발 1명, 백엔드 개발 1명",
  },
  {
    title: "현대 오토에버 Pickup Service POC",
    summary: [
      "SPC 사와 연동하여 내비게이션에서 웹 뷰로 간편하게 주문할 수 있는 픽업 서비스를 개발했습니다.",
      "관리자 서비스와 사용자 웹 뷰 서비스로 구성되었으며, PM 1명, 기획 & 디자인 1명, 프론트 개발 2명, 백엔드 개발 1명, 웹 퍼블리셔 1명이 참여했습니다.",
    ],
    affiliation: "(주)아크로퓨처",
    period: "2024.09. ~ 2024.12",
    features: [
      "서버에서 버킷 명을 이미지 파일명으로 사용하여 발생한 브라우저 캐싱으로 인해 최신 이미지로 업데이트되지 않는 문제를 이미지 파일명에 해시값을 추가하는 방식으로 해결",
      "Tanstack Query의 낙관적 업데이트를 활용해 장바구니 삭제 시 즉각적인 UI 반영을 구현하고 UX를 개선",
      "Mutation Key를 기반으로 관련 Query를 자동 갱신하는 구조를 도입해 DX 향상과 데이터 일관성을 확보",
      "타입스크립트를 도입하여 런타임 오류를 사전에 방지하고, API 요청/응답 타입을 명확히 정의함으로써 안정성과 DX 향상",
      "사용자 서비스: JWT 토큰 방식의 인증 기능 개발",
      "사용자 서비스: 슬라이드, 페이드 인/아웃 애니메이션 효과 개발",
      "사용자 서비스: 픽업 위치, 결제, 상품 옵션, 장바구니, 주문 정보 페이지 개발",
      "사용자 서비스: 다크모드 디자인 개발",
      "관리자 서비스: 세션 방식의 인증 기능 개발",
      "관리자 서비스: 이미지 base64 인코딩 및 업로드 기능 개발",
      "관리자 서비스: 내 정보, 주문/결제 목록, 카테고리 페이지 개발",
    ],
    urls: [],
    skills: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "Material UI",
      "SCSS",
      "React Hook Form",
      "Zustand",
      "Jotai",
    ],
    contributor:
      "PM 1명, 기획 & 디자인 1명, 프론트엔드 개발 2명, 백엔드 개발 1명, 웹 퍼블리셔 1명",
  },
  {
    title: "현대 오토에버 Global Contents Provider Service",
    summary: [
      "전 세계 다양한 CP사로부터 수집된 지도 데이터를 검증하고 단일 통합 지도로 구성하는 통합 플랫폼 서비스입니다.",
      "기획 & 디자인 1명, 프론트 개발 4명, 백엔드 개발 2명, 웹 퍼블리셔 1명이 참여했습니다.",
    ],
    affiliation: "(주)아크로퓨처",
    period: "2024.03. ~ 2024.09.",
    features: [
      "지도에 표시되는 대량의 마커 데이터로 인한 성능 저하 문제를 Tanstack Query의 데이터 캐싱 전략을 적용하여 반복적인 API 호출을 최소화하고 렌더링 성능을 대폭 개선",
      '팀원들과 회고를 통해서 “무분별하게 만들어진 재사용 컴포넌트가 만능 컴포넌트로 변하면서 가독성과 유지보수성을 해칠 수 있다"고 판단하여 정말 재사용할 수 있는 컴포넌트인지 팀원들과 상의하여 공통화를 진행',
      "반복적으로 사용되는 지도 UI와 기능들을 분석하여 재사용 가능한 컴포넌트로 설계",
      "기획자와의 개발자 간 원활한 소통과 즉각적인 피드백을 위해 Ngrok을 활용한 실시간 개발화면 공유 시스템을 구축",
      "로그인, 회원가입, 사고, 과속, 주차, 검색 페이지 개발",
      "반응형 디자인(데스크톱, 태블릿, 모바일) 구현",
    ],
    urls: [
      {
        name: "마커 리렌더링 최적화",
        url: "https://velog.io/@ajm0718/Tanstack-Query-지도-마커-렌더링-최적화하기",
      },
    ],
    skills: [
      "React",
      "Material UI",
      "Tanstack Query",
      "Zustand",
      "Formik",
      "Yup",
    ],
    contributor:
      "기획 & 디자인 1명, 프론트엔드 개발 4명, 백엔드 개발 2명, 웹 퍼블리셔 1명",
  },
  {
    title: "현대 오토에버 Global Poi(Point of Interest) Search Service",
    summary: [
      "CP 사에서 제공받은 POI(Point of Interest) 정보를 현지에서 비교 및 검증하는 글로벌 지도 플랫폼 서비스입니다.",
      "기획 & 디자인 1명, 프론트 개발 4명, 백엔드 개발 2명, 웹 퍼블리셔 1명이 참여했습니다.",
    ],
    affiliation: "(주)아크로퓨처",
    period: "2024.01. ~ 2024.05.",
    features: [
      "Tanstack Query의 keepPreviousData 기능을 페이지네이션과 필터링 기능에 적용하여, 새로운 데이터를 가져오는 동안 이전 데이터를 유지함으로써 화면 깜빡임 없이 매끄러운 사용자 경험을 제공",
      "Figma를 활용하여 기획자, 퍼블리셔와 실시간으로 UI/UX 관련 피드백을 주고받으며 협0",
      "디자인 시스템의 스타일 속성(색상, 여백, 폰트 등)을 정확히 참고하여 디자인 의도에 맞게 구현하여 디자인과 개발 간 일관성을 유지하고 반복적인 수정 작업을 최소화",
      "OTP 및 이메일 인증 기능 개발",
      "i18next를 활용해 다국어 지원 시스템을 구축하여 영어로 서비스를 제공",
      "대시보드, 내 정보, 권한 관리, 권한 목록, 검색 관리, 통계, 로그인 이미지 관리 페이지 개발",
      "반응형 디자인(데스크톱, 태블릿, 모바일) 개발",
      "다크모드 디자인 개발",
    ],
    urls: [],
    skills: [
      "React",
      "ReCharts",
      "MUI",
      "react-query",
      "zustand",
      "react-google-maps",
      "i18next",
      "Github",
    ],
    contributor:
      "기획 1명, 디자인 1명, 프론트엔드 개발 4명, 백엔드 개발 2명, 웹 퍼블리셔 1명",
  },
  {
    title: "인터뷰메이트",
    summary: ["AI 화상 면접 연습 서비스입니다."],
    affiliation: "크래프톤 정글",
    period: "2023.02. ~ 2023.03.",
    features: [
      "WebRTC를 사용해 실시간 비디오 통신 구현",
      "socket 통신을 사용하여 사용자 간의 상태 공유",
      "AWS Amplify 배포",
    ],
    urls: [
      {
        name: "Github",
        url: "https://github.com/krafton-jungle-AI-InterviewMate/AI-InterviewMate-FE/tree/main",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "Recoil",
      "Emotion",
      "AWS Amplify",
    ],
    contributor: "프론트엔드 개발 2명, 백엔드 개발 3명",
  },
  {
    title: "코리아메쎄 전시 플랫폼",
    summary: [
      "전시회 기획, 운영, 디자인, 마케팅 서비스를 제공하는 플랫폼입니다.",
    ],
    affiliation: "(주)제이에스씨텍",
    period: "2022.07. ~ 2022.09.",
    features: [
      "사용자의 관심과 몰입도를 높이기 위해 Parallax Scrolling, Swiper 등 다양한 인터렉티브 디자인 기법 적용",
      "Main, About, Exhibition, Project, News 페이지 개선",
      "반응형 디자인(데스크톱, 태블릿, 모바일) 개발",
    ],
    urls: [
      {
        name: "Github",
        url: "https://github.com/KKamjangE/KOREA_MESSE?tab=readme-ov-file",
      },
      { name: "Site", url: "http://www.koreamesse.kr/main/index" },
    ],
    skills: ["JavaScript", "jQuery", "Photoshop", "Illustrator", "Figma"],
    contributor: "웹 퍼블리셔 1명, 백엔드 개발 1명",
  },
];

export default projects;
