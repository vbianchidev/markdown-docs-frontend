import { BaseInterface } from "../../../core/interfaces/base.interface";

export interface Page extends BaseInterface {
  icon?: string | null;
  cover?: string | null;
  title: string;
  slug?: string;
  content: string;
  pages?: Array<string> | null ;
  author?:  string ;
  parentPage?: string | null;
}