type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};

export type BlogDetail = {
  id_blog: number;
  header: string;
  link: string;
  header_paragraph: string;
  image: string;
  fitur: string;
  point: string[];
  end: string;
};
