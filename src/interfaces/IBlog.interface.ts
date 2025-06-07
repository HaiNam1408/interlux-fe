export interface IBlogTag {
  tag: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface IBlogThumbnail {
  type: "image";
  fileName: string;
  filePath: string;
}

export interface IBlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: IBlogThumbnail;
  view: number;
  publishedAt: string; // hoặc: Date nếu bạn parse thành Date object
  createdAt: string;
  tags: IBlogTag[];
}
