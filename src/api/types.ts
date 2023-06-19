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
