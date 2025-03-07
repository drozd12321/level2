export interface PadeItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}
export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PadeItem[];
}
