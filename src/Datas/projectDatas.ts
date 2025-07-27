export type ProjectItems = {
  id: number;
  img: string;
  name: string;
  category: "GAME" | "WEB" | "APP";
  description: string;
};

export const projectDatas: ProjectItems[] = [
  {
    id: 1,
    name: "RUINS OF ARTHAMERTA",
    img: "ruins.png",
    category: "GAME",
    description:
      "THIS PROJECT REALLY IS NOSTALGIC BECAUSE IT IS MY FIRST PROPER GAME MADE WITH UNITY AND COLLAB WITH MY COLLEGE FRIENDS",
  },
  {
    id: 2,
    name: "CARROTS MY WAY HOME",
    img: "carrots.png",
    category: "GAME",
    description: "HUFFT, MY FIRST GAMEJAM WAS A NIGHTMARE, IT WON AN AWARD THO",
  },
  {
    id: 3,
    name: "GLOOMSHINE DEFENSE",
    img: "gloomshine.png",
    category: "GAME",
    description:
      "MY IGDX BOOTCAMP GAME ! MENTORED BY ONE OF THE KINDEST PERSON IN THE INDUSTRY KAK JAYA FROM MIRACLE AKADEMI!",
  },
  {
    id: 4,
    name: "AWARELY",
    img: "awarely.png",
    category: "WEB",
    description:
      "AWARELY IS A WEBSITE THAT FOCUSES ON COUNSELING, REPORT, AND SOSIAL JUSTICE UPON COLLEGE STUDENTS IN FILKOM UB. I USED REACT & NODEJS (EXPRESS) FOR THIS WEB !",
  },
];
