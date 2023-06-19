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
  URL?: URLTypes;
  skill?: string[];
}

interface URLTypes {
  githubURL?: string;
  videoURL?: string;
  wikiURL?: string;
}
