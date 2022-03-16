import { baseInterface } from "./base.interface";

export interface Post extends baseInterface {
  title: string;
  slug: string;
  markdown: string;
}