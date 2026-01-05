export enum ResourceCategory {
  STUDY_MATERIAL = "STUDY_MATERIAL",
  PYQ = "PYQ",
  CIA_PAPER = "CIA_PAPER"
}

export interface Resource {
  id: string;
  name: string;
  subjectCode: string;
  subjectName: string;
  faculty: string;
  category: ResourceCategory;
  fileUrl?: string;
}
