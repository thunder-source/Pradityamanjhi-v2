import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Form Builder",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND", "Node.js", "MongoDB", "Node Mailer"],
    image: {
      LIGHT: "/images/projects/form-builder.webp",
      DARK: "/images/projects/form-builder.webp",
    },
  },
  {
    index: 1,
    title: "Tesla clone",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/tesla.webp",
      DARK: "/images/projects/tesla.webp",
    },
  },
  {
    index: 2,
    title: "Crypto Tracker",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/crypto.webp",
      DARK: "/images/projects/crypto.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Form Builder",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/form-builder.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    // sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Crypto Tracker",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/crypto.webp",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    // sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  {
    name: "Tesla clone",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/tesla.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    // sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/images/projects/logos/favicon.ico",
    imageUrl: [
      "/images/projects/portfolio-dark.webp",
      "/images/projects/portfolio-light.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    // sourceCodeHref: "https://github.com/BUMBAIYA/pradityamanjhi-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
