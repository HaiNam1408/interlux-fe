export interface IMenu {
  title: string;
  listMenu: IMenuChild[];
}

export interface IMenuChild {
  title: string;
  linkTitle?: string;
  listChild?: IMenuChild[];
  linkImg?: string;
}
