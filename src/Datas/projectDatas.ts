export type ProjectItems = {
  img: string;
  name: string;
  category: "GAME DEVELOPMENT" | "WEB DEVELOPMENT" | "APP DEVELOPMENT";
  description: string;
  href: string;
  categories: string[];
};

export const collaborativeProjectDatas: ProjectItems[] = [
  {
    name: "Carrots My Way Home",
    img: "carrots.png",
    category: "GAME DEVELOPMENT",
    description:
      "Carrots My Way Home is a game about a rabbit that wants to go home by collecting carrots along the way.",
    categories: ["Unity", "C#"],
    href: "https://exelcoeg.itch.io/carrots-my-way-home",
  },
  {
    name: "Gloomshine Defense",
    img: "gloomshine.png",
    category: "GAME DEVELOPMENT",
    description:
      "Gloomshine Defense is a tower defense game set in a fantasy world full of mysterious creatures and challenging levels. Project for IGDX Bootcamp 2023.",
    href: "https://ohm195.itch.io/gloomshine-defense",
    categories: ["Unity", "C#"],
  },
  {
    name: "Rupan",
    img: "rupan.png",
    category: "GAME DEVELOPMENT",
    description:
      "Rupan is a Brackeys Game Jam submission themed 'Calm Before the Storm'.",
    href: "https://exelcoeg.itch.io/rupan",
    categories: ["Unity", "C#"],
  },
  {
    name: "Too Many Tasks",
    img: "tmt.jpg",
    category: "GAME DEVELOPMENT",
    description:
      "Too Many Tasks is a multi-tasking game where we operate multiple parts of a job all at once. This game is currently in progress for the GameSeed 2024 GameJam.",
    href: "https://nanta-adji.itch.io/110-raionexe-student-too-many-tasks",
    categories: ["Unity", "C#"],
  },
  {
    name: "Ruins of Arthamerta",
    img: "ruins.png",
    category: "GAME DEVELOPMENT",
    description:
      "Ruins of Arthamerta is a 2D action adventure game set in a fantasy world inspired by Indonesian mythology.",
    href: "https://exelcoeg.itch.io/ruins-of-arthamerta",
    categories: ["Unity", "C#"],
  },
];
export const personalProjectDatas: ProjectItems[] = [
  {
    name: "Awarely",
    img: "awarely.png",
    category: "WEB DEVELOPMENT",
    description:
      "Awarely is a website that focuses on counseling, reporting, and social justice for college students in FILKOM UB. Built with React.js and Node.js (Express).",
    href: "https://awarely-five.vercel.app/",
    categories: ["React.JS", "Express.js"],
  },
  {
    name: "Chatify",
    img: "chatify.png",
    category: "WEB DEVELOPMENT",
    description:
      "Chatify is a real-time chat application built with React.js for the frontend and MongoDB for the backend, allowing users to send messages instantly.",
    href: "https://chatify-roan.vercel.app/",
    categories: ["React.JS", "Next.JS", "MongoDB", "Socket.io"],
  },
  {
    name: "TrivQuiz",
    img: "trivquiz.png",
    category: "WEB DEVELOPMENT",
    description:
      "TrivQuiz is a fun and interactive quiz application that tests your knowledge across various topics, built using React.js. This is my mini project for DOT Indonesia Internship 2025 application.",
    href: "https://triv-quiz-app.vercel.app/",
    categories: ["React.JS", "UI/UX"],
  },
  {
    name: "Rensa",
    img: "rensa.png",
    category: "WEB DEVELOPMENT",
    description:
      "Rensa is a web application that allows users to share photos with their settings and connect with others.",
    href: "https://rensa.site",
    categories: ["React.JS", "MongoDB", "Next.JS", "Express.JS", "Cloudinary"],
  },
];
