export interface ResponseData {
  data: DataType[];
}

interface DataType {
  id: number;
  title: string;
  data: ContentDataType[];
}

export interface ContentDataType {
  id: number;
  position?: string;
  classification?: string;
  title: string;
  titleURL?: string;
  period?: string;
  discription?: string[];
  URL?: URLType;
  skill?: string[];
}

export interface URLType {
  githubURL?: string;
  videoURL?: string;
  wikiURL?: string;
}

export interface skillsType {
  data: {
    react: string;
    typescript: string;
    styledcomponent: string;
    framermotion: string;
    axios: string;
    yarn: string;
    vite: string;
    vercel: string;
    reactquery: string;
    recoil: string;
    zustand: string;
    emotion: string;
    amplify: string;
    jquery: string;
    gsap: string;
    aos: string;
    swiperjs: string;
  };
}
