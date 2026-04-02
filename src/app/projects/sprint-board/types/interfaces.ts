import { IIcon } from "@/types/interfaces";

export interface IBoardNavsItems {
  title: string;
  href: string;
  icon: React.ComponentType<IIcon>;
}

export interface IBoardNavsActions {
  title: string;
  icon: React.ComponentType<IIcon>;
}
