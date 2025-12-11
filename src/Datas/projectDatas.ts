export type ProjectItems = {
  id: number;
  img: string;
  name: string;
  category: "GAME DEVELOPMENT" | "WEB DEVELOPMENT" | "APP DEVELOPMENT";
  description: string;
  href: string;
  categories: string[];
};

export const projectDatas: ProjectItems[] = [
  {
    id: 1,
    name: "RUINS OF ARTHAMERTA",
    img: "ruins.png",
    category: "GAME DEVELOPMENT",
    description:
      "RUINS OF ARTHAMERTA IS A 2D ACTION ADVENTURE GAME SET IN A FANTASY WORLD INSPIRED BY INDONESIAN MYTHOLOGY.",
    href: "https://exelcoeg.itch.io/ruins-of-arthamerta",
    categories: ["Unity", "C#"],
  },
  {
    id: 2,
    name: "CARROTS MY WAY HOME",
    img: "carrots.png",
    category: "GAME DEVELOPMENT",
    description:
      "Carrots My Way Home IS A GAME ABOUT A RABBIT THAT WANTS TO GO HOME BY COLLECTING CARROTS ALONG THE WAY.",
    categories: ["Unity", "C#"],
    href: "https://exelcoeg.itch.io/carrots-my-way-home",
  },
  {
    id: 3,
    name: "GLOOMSHINE DEFENSE",
    img: "gloomshine.png",
    category: "GAME DEVELOPMENT",
    description:
      "GLOOMSHINE DEFENSE IS A TOWER DEFENSE GAME SET IN A FANTASY WORLD FULL OF MYSTERIOUS CREATURES AND CHALLENGING LEVELS. Project for IGDX Bootcamp 2023",
    href: "https://ohm195.itch.io/gloomshine-defense",
    categories: ["Unity", "C#"],
  },
  {
    id: 4,
    name: "RUPAN",
    img: "rupan.png",
    category: "GAME DEVELOPMENT",
    description:
      "RUPAN IS A BRACKEYS GAME JAM SUBMISSION THEMED `CALM BEFORE THE STORM`",
    href: "https://exelcoeg.itch.io/rupan",
    categories: ["Unity", "C#"],
  },
  {
    id: 5,
    name: "TOO MANY TASKS",
    img: "tmt.jpg",
    category: "GAME DEVELOPMENT",
    description:
      "TOO MANY TASKS IS A MULTI-TASKING GAME, WE OPERATED MULTIPLE PARTS OF A JOB ALL AT ONCE, THIS GAME IS CURRENTLY IN PROGRESS FOR THE GAMESEED 2024 GAMEJAM",
    href: "https://nanta-adji.itch.io/110-raionexe-student-too-many-tasks",
    categories: ["Unity", "C#"],
  },
  {
    id: 6,
    name: "AWARELY",
    img: "awarely.png",
    category: "WEB DEVELOPMENT",
    description:
      "AWARELY IS A WEBSITE THAT FOCUSES ON COUNSELING, REPORT, AND SOCIAL JUSTICE UPON COLLEGE STUDENTS IN FILKOM UB. I USED REACT.JS & NODEJS (EXPRESS) FOR THIS WEB !",
    href: "https://awarely-five.vercel.app/",
    categories: ["React.JS", "Express.js"],
  },
  {
    id: 7,
    name: "CHATIFY",
    img: "chatify.png",
    category: "WEB DEVELOPMENT",
    description:
      "CHATIFY IS A REAL-TIME CHAT APPLICATION BUILT WITH REACT.JS FOR THE FRONTEND AND MONGODB FOR THE BACKEND, ALLOWING USERS TO SEND MESSAGES INSTANTLY.",
    href: "https://chatify-roan.vercel.app/",
    categories: ["React.JS", "Next.JS", "MongoDB", "Socket.io"],
  },
  {
    id: 8,
    name: "TRIVQUIZ",
    img: "trivquiz.png",
    category: "WEB DEVELOPMENT",
    description:
      "TRIVQUIZ IS A FUN AND INTERACTIVE QUIZ APPLICATION THAT TESTS YOUR KNOWLEDGE ACROSS VARIOUS TOPICS, BUILT USING REACT.JS. THIS IS MY MINI PROJECT FOR DOT Indonesia Internship 2025 Application.",
    href: "https://triv-quiz-app.vercel.app/",
    categories: ["React.JS", "UI/UX"],
  },
  {
    id: 9,
    name: "RENSA",
    img: "rensa.png",
    category: "WEB DEVELOPMENT",
    description:
      "RENSA IS A WEB APPLICATION THAT ALLOWS USERS TO SHARE PHOTOS WITH THEIR SETTINGS AND CONNECT WITH OTHERS",
    href: "https://triv-quiz-app.vercel.app/",
    categories: ["React.JS", "MongoDB", "Next.JS", "Express.JS", "Cloudinary"],
  },
];
