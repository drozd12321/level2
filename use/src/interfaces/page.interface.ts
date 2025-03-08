export enum TopLevelCategory {
  Coureses,
  Services,
  Books,
  Products,
}
export interface TopPageAdvantage {
  _id: string;
  title: string;
  description: string;
}
export interface hhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updateAt: Date;
}
export interface TopPageModal {
  tags: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: TopPageAdvantage[];
  createAt: Date;
  updateAt: Date;
  hh: hhData;
}
