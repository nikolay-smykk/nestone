export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  id: number;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    title: string;
    count: number;
    junior: number;
    middle: number;
    senior: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoTest: string;
  tagsTitle: string;
  tags: string[];
}
