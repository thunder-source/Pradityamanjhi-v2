import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { SkillsIconsByName } from './skills';

const { aws, bootstrap, sass, shardcn, socketio, docker, postgress, postman, prisma, linux, mui, materialUI, reactnative, threeJs, fontAwesome, css, jquery, express, framermotion, formik, html, javascript, styledComponents, firebase, jwt, mongodb, nextjs, nodejs, radixui, reactjs, reactrouterdom, reduxtk, tanstack, charkaUI, zustand, tailwindcss, typescript, vite, swiper } = SkillsIconsByName;

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
    favicon: "/images/projects/form-builder/favicon.ico",
    imageUrl: [
      "/images/projects/form-builder/img2.webp",
      "/images/projects/form-builder/img3.webp",
      "/images/projects/form-builder/img1.webp",
      "/images/projects/form-builder/img6.webp",
    ],
    description:
      "Form Builder where users can build custom form by dragging and dropping components and share them to clients. Features: drag and drop, search, user authentication, upload image, share forms, view submitted form result.",
    technology: [reactjs, nodejs, express, mongodb, typescript, jwt, zustand, radixui, tanstack,],
    liveWebsiteHref: "https://form-builder-client-rosy.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/images/projects/logos/favicon.ico",
    imageUrl: [
      "/images/projects/portfolio/portfolio-dark.webp",
      "/images/projects/portfolio/portfolio-light.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    technology: [nextjs, typescript, framermotion, tailwindcss, formik],
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Tesla Clone",
    favicon: "/images/projects/tesla/favicon.ico",
    imageUrl: [
      "images/projects/tesla/img2.webp",
      "images/projects/tesla/img4.webp",
      "images/projects/tesla/img3.webp",
      "images/projects/tesla/img1.webp",
    ],
    technology: [reactjs, reduxtk, typescript, firebase, tailwindcss, styledComponents],
    description: "Tesla Clone with Responsive Design with add to cart and purchase page.",
    liveWebsiteHref: "https://tesla-reactjs.vercel.app/",
  },
  {
    name: "Crypto Tracker",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/crypto/img1.webp",
      "/images/projects/crypto/img2.webp",
      "/images/projects/crypto/img3.webp",
      "/images/projects/crypto/img4.webp",
    ],
    description:
      "Crypto Tracker is can be used to check the price of the crypto coins and check the data of crypto in chart format",
    technology: [reactjs, vite, firebase, javascript, charkaUI, framermotion, reactrouterdom],
    liveWebsiteHref: "https://crypto-pro-drab.vercel.app/",
  },
  {
    name: "Apple",
    favicon: "/images/projects/apple/apple.svg",
    imageUrl: [
      "images/projects/apple/img1.webp",
      "images/projects/apple/img4.webp",
      "images/projects/apple/img2.webp",
      "images/projects/apple/img3.webp",
    ],
    technology: [reactjs, css, javascript, threeJs],
    description: "Apple Iphone Home page Clone Created using react, gsap and javascript.",
    liveWebsiteHref: "https://apple-iphone-home-page.vercel.app/",
  },
  {
    name: "Inxtera",
    favicon: "/images/projects/inxtera/favicon.ico",
    imageUrl: [
      "images/projects/inxtera/img2.webp",
      "images/projects/inxtera/img3.webp",
      "images/projects/inxtera/img4.webp",
      "images/projects/inxtera/img1.webp",
    ],
    technology: [nextjs, tailwindcss, typescript,],
    description: "Inxtera Website Template Created by using Next.js, tailwindCss, typescript.",
    liveWebsiteHref: "https://inxtera-website.vercel.app/",
  },
  {
    name: "Nobelshaadi",
    favicon: "/images/projects/nobelshaadi/favicon.ico",
    imageUrl: [
      "images/projects/nobelshaadi/img1.webp",
      "images/projects/nobelshaadi/img2.webp",
      "images/projects/nobelshaadi/img3.webp",
      "images/projects/nobelshaadi/img4.webp",
    ],
    technology: [reactjs, css, javascript, fontAwesome, swiper, sass],
    description: "Nobelshaadi Website Create by using React,sass and javascript.",
    liveWebsiteHref: "https://nobleshaadi.vercel.app/",
  },
  {
    name: "Smart Doors",
    favicon: "/images/projects/logos/door.ico",
    imageUrl: [
      "images/projects/smart_doors/img3.webp",
      "images/projects/smart_doors/img4.webp",
      "images/projects/smart_doors/img5.webp",
      "images/projects/smart_doors/img1.webp",
      "images/projects/smart_doors/img2.webp",
    ],
    technology: [html, css, javascript, swiper],
    description: "Smart Doors e-commerce Template with Responsive Design.",
    liveWebsiteHref: "https://smart-doors.vercel.app/",
  },
  {
    name: "Quick Bites",
    favicon: "/images/projects/quick-bites/favicon.png",
    imageUrl: [
      "images/projects/quick-bites/img4.webp",
      "images/projects/quick-bites/img3.webp",
      "images/projects/quick-bites/img2.webp",
      "images/projects/quick-bites/img1.webp",
    ],
    technology: [html, css, javascript],
    description: "Food Ordering Website Drop page.",
    liveWebsiteHref: "https://restaurant-website-black-five.vercel.app/",
  },
  {
    name: "Cryptocash",
    favicon: "/images/projects/cryptocash/favicon.png",
    imageUrl: [
      "images/projects/cryptocash/img1.webp",
      "images/projects/cryptocash/img3.webp",
      "images/projects/cryptocash/img2.webp",
      "images/projects/cryptocash/img4.webp",
    ],
    technology: [html, css, javascript, bootstrap, jquery],
    description: "Crypto Cash Website Template Create by using HTML, CSS, Javascript.",
    liveWebsiteHref: "https://cryptocash-seven.vercel.app/",
  },
  {
    name: "Beatrex",
    favicon: "/images/projects/beatrex/favicon.ico",
    imageUrl: [
      "images/projects/beatrex/img5.webp",
      "images/projects/beatrex/img3.webp",
      "images/projects/beatrex/img4.webp",
      "images/projects/beatrex/img2.webp",
      "images/projects/beatrex/img1.webp",
    ],
    technology: [html, css, javascript, bootstrap, jquery],
    description: "Beatrex Website Template Create by using HTML, CSS, Javascript.",
    liveWebsiteHref: "https://beatrex.vercel.app/",
  },

];
