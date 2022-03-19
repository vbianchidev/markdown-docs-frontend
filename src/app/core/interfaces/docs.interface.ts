import { BaseInterface } from "./base.interface";

export interface Doc extends BaseInterface {
  title: string;
  slug?: string;
  markdown: string;
}