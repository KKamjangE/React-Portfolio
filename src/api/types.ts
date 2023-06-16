export interface getDataTypes {
  data: Array<dataTitleTypes>;
}

interface dataTitleTypes {
  id: number;
  title: string;
  data: Array<dataTypes>;
}

interface dataTypes {
  id: number;
  position?: string;
  classification?: string;
  title: string;
  period?: string;
  discription: Array<string>;
  URL?: {
    githubURL?: string;
    siteURL?: string;
    videoURL?: string;
    wikiURL?: string;
  };
  skill?: Array<string>;
}
