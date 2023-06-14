interface titleTypes {
  title: string;
}

export interface WorkTypes extends titleTypes {
  data: [
    {
      id: number;
      position: string;
      companyName: string;
      companyURL: string;
      period: string;
      discription: Array<string>;
    }
  ];
}

export interface ProjectTypes extends titleTypes {
  data: [
    {
      id: number;
      classification: string;
      projectName: string;
      period: string;
      position: string;
      discription: Array<string>;
      URL: {
        githubURL?: string;
        videoURL?: string;
        siteURL?: string;
      };
      skill: Array<string>;
    }
  ];
}

export interface EducationTypes extends titleTypes {
  data: [
    {
      id: number;
      classification: string;
      name: string;
      period: string;
      discription?: Array<string>;
      URL?: string;
    }
  ];
}

export interface ShareTypes extends titleTypes {
  data: [
    {
      id: number;
      classification: string;
      name: string;
      discription: Array<string>;
    }
  ];
}
