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
  period?: string;
  discription?: string[];
  URL?: URLTypes;
  skill?: string[];
}

interface URLTypes {
  githubURL?: string;
  siteURL?: string;
  videoURL?: string;
  wikiURL?: string;
  companyURL?: string;
}
