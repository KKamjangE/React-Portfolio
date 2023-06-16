export interface getDataTypes {
  data: Array<CommonDataTypes>;
}

export interface CommonDataTypes {
  id: number;
  title: string;
  data: Array<detailDataTypes>;
}

interface detailDataTypes {
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
