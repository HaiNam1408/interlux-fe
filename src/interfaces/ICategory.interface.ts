
export interface ICategory {
    id: number;
    name: string;
    slug: string;
    image: string | null;
    children: ICategory[];
}