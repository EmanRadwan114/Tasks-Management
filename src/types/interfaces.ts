export interface IIcon {
  className?: string;
}

export interface INavItem {
  title: string;
  icon: React.ComponentType<IIcon>;
  href: string;
}
