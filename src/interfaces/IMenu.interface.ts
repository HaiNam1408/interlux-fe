export interface IMenu {
  title: string;
  listMenu?: IMenuChild[];
  slug?:string;
}

export interface IMenuChild {
  title: string;
  slug?: string;
  listChild?: IMenuChild[];
   image?: {
    type: string;
    fileName: string;
    filePath: string;
  };
}
