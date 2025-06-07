export interface ICategory {
  id: number;
  name: string;
  slug: string;
  image: {
    type: string;
    fileName: string;
    filePath: string;
  };
  children: ICategory[];
}
