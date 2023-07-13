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
  titleurl?: string;
  period?: string;
  description?: string[];
  url?: UrlType;
  skill?: string[];
}

export interface UrlType {
  github?: string;
  video?: string;
  notion?: string;
}

export interface SkillDescType {
  data: {
    [react: string]: string;
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
