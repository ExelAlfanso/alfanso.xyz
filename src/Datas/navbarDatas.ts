export type NavItem = {
  id: number;
  label: string;
  href: string;
  isExternal?: boolean;
  bg: string;
  translate: string;
};

export const navigationItems: NavItem[] = [
  {
    id: 1,
    label: "Home",
    href: "#Hero",
    bg: "bg-primary",
    translate: "-translate-x-60",
  },
  {
    id: 2,
    label: "About",
    href: "#About",
    bg: "bg-secondary",
    translate: "-translate-x-35",
  },
  {
    id: 3,
    label: "Experiences",
    href: "#Experiences",
    bg: "bg-[#470F12]",
    translate: "-translate-x-10",
  },
  {
    id: 4,
    label: "TechStack",
    href: "#TechStack",
    bg: "bg-[#59181B]",
    translate: "translate-x-15",
  },
  {
    id: 5,
    label: "Projects",
    href: "#Projects",
    bg: "bg-[#712528]",
    translate: "translate-x-40",
  },
];
