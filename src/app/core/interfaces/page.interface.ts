import { BaseInterface } from "./base.interface";

export interface Page extends BaseInterface {
  title: string;
  slug?: string;
  markdown: string;
}