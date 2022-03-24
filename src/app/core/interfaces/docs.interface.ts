import { BaseInterface } from "./base.interface";

export interface Doc extends BaseInterface {
  icon?: string | null;
  cover?: string | null;
  title: string;
  slug?: string;
  content: string;
  pages?: Array<string> | null ;
  author?:  string ;
  parentPage?: string | null;
}