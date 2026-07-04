export interface FooterData {
  href: string;
  id: number;
  isExternal?: boolean;
  label: string;
}

export const footerDatas: FooterData[] = [
  {
    id: 1,
    label: "twitter",
    href: "https://twitter.com/exelcoeg",
  },
  {
    id: 2,
    label: "linkedin",
    href: "https://www.linkedin.com/in/exel-boy-alfanso-a78bb2221/",
  },
  {
    id: 3,
    label: "github",
    href: "https://github.com/ExelAlfanso",
  },
  {
    id: 4,
    label: "instagram",
    href: "https://www.instagram.com/exel.alfanso",
  },
  {
    id: 5,
    label: "itch.io",
    href: "https://exelcoeg.itch.io/",
  },
];
