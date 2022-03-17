import { BaseInterface } from "./base.interface";

export interface Menu extends BaseInterface {
  name: string;
  parent: string | null;
  pageId: string;
  matIcon: string;
}