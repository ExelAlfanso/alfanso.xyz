export type ProjectItems = {
  id: number;
  img: string;
  name: string;
  category: "GAME" | "WEB" | "APP";
  description: string;
  href: string;
};

export const projectDatas: ProjectItems[] = [
  {
    id: 1,
    name: "RUINS OF ARTHAMERTA",
    img: "ruins.png",
    category: "GAME",
    description:
      "MY FIRST COLLABORATION GAME PROJECT, AWARDED AS 4TH PLACE ON I/O FESTIVAL 2024 GAME DEVELOPMENT COMPETITION.",
    href: "https://exelcoeg.itch.io/ruins-of-arthamerta",
  },
  {
    id: 2,
    name: "CARROTS MY WAY HOME",
    img: "carrots.png",
    category: "GAME",
    description:
      "HUFFT, MY FIRST GAMEJAM WAS A NIGHTMARE, AWARDED AS 2ND PLACE ON RAION HACKJAM 2024",
    href: "https://exelcoeg.itch.io/carrots-my-way-home",
  },
  {
    id: 3,
    name: "GLOOMSHINE DEFENSE",
    img: "gloomshine.png",
    category: "GAME",
    description:
      "MY IGDX BOOTCAMP GAME ! MENTORED BY ONE OF THE KINDEST PERSON IN THE INDUSTRY KAK JAYA FROM MIRACLE AKADEMI!",
    href: "https://ohm195.itch.io/gloomshine-defense",
  },
  {
    id: 4,
    name: "RUPAN",
    img: "rupan.png",
    category: "GAME",
    description:
      "RUPAN IS A BRACKEYS GAME JAM SUBMISSION THEMED `CALM BEFORE THE STORM`",
    href: "https://exelcoeg.itch.io/rupan",
  },
  {
    id: 5,
    name: "TOO MANY TASKS",
    img: "tmt.jpg",
    category: "GAME",
    description:
      "TOO MANY TASKS IS A MULTI-TASKING GAME, WE OPERATED MULTIPLE PARTS OF A JOB ALL AT ONCE, THIS GAME IS CURRENTLY IN PROGRESS FOR THE GAMESEED 2024 GAMEJAM",
    href: "https://nanta-adji.itch.io/110-raionexe-student-too-many-tasks",
  },
  {
    id: 6,
    name: "AWARELY",
    img: "awarely.png",
    category: "WEB",
    description:
      "AWARELY IS A WEBSITE THAT FOCUSES ON COUNSELING, REPORT, AND SOCIAL JUSTICE UPON COLLEGE STUDENTS IN FILKOM UB. I USED REACT & NODEJS (EXPRESS) FOR THIS WEB !",
    href: "https://awarely-five.vercel.app/",
  },
  {
    id: 7,
    name: "CHATIFY",
    img: "chatify.png",
    category: "WEB",
    description:
      "SIMPLE CHAT ROOM WEB USING MERN, NEXTJS, AND SOCKET.IO, LEARNT ALOT FROM THIS PROJECT!",
    href: "https://chatify-roan.vercel.app/",
  },
];
