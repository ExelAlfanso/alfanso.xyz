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
    translate: "translate-x-20 lg:-translate-x-20",
  },
  {
    id: 2,
    label: "About",
    href: "#About",
    bg: "bg-secondary",
    translate: "translate-x-30 lg:-translate-x-0",
  },
  {
    id: 3,
    label: "Experiences",
    href: "#Experiences",
    bg: "bg-[#470F12]",
    translate: "translate-x-40 lg:translate-x-20",
  },
  {
    id: 4,
    label: "TechStack",
    href: "#TechStack",
    bg: "bg-[#59181B]",
    translate: "translate-x-50 lg:translate-x-40",
  },
  {
    id: 5,
    label: "Projects",
    href: "#Projects",
    bg: "bg-[#712528]",
    translate: "translate-x-60 lg:translate-x-60",
  },
];
