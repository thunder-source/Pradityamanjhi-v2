import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiBootstrap, SiLinux,
  SiFirebase,
  SiMaterialdesign,
  SiStyledcomponents,
  SiChakraui,
  SiJquery,
  SiFontawesome,
  SiSwiper,
  SiThreedotjs
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import {
  FramerMotionIcon,
  ReactRouterDomIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import RadixUISvg from "@/public/icons/radix-ui.svg";
import ShardcnSvg from "@/public/icons/shardcn.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import JwtSvg from "@/public/icons/jwt.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

import SwiperJs from "@/public/icons/swiper-logo.svg";
import Formik from "@/public/icons/formik.svg";
import zustandSvg from "@/public/icons/zustand.svg";
import tanstackSvg from "@/public/icons/tanstack.svg";



export const SkillsIconsByName = {
  html: {
    name: "HTML",
    icon: HtmlSvg
  },
  fontAwesome: {
    name: "Font Awesome",
    icon: SiFontawesome
  },
  threeJs: {
    name: "Three.js",
    icon: SiThreedotjs
  },
  materialUI: {
    name: "Material UI",
    icon: SiMaterialdesign
  },
  styledComponents: {
    name: "Styled Components",
    icon: SiStyledcomponents
  },
  zustand: {
    name: "Zustand",
    icon: zustandSvg
  },
  tanstack: {
    name: "Tanstack",
    icon: tanstackSvg
  },
  charkaUI: {
    name: "CharkaUI",
    icon: SiChakraui
  },
  jquery: {
    name: "Jquery",
    icon: SiJquery
  },
  firebase: {
    name: "Firebase",
    icon: SiFirebase
  },
  swiper: {
    name: "Swiper",
    icon: SwiperJs
  },
  formik: {
    name: "Formik",
    icon: Formik
  },
  css: {
    name: "CSS",
    icon: CsssSvg
  },
  sass: {
    name: "SASS",
    icon: SassSvg
  },
  javascript: {
    name: "Javascript",
    icon: JavascriptSvg
  },
  typescript: {
    name: "Typescript",
    icon: TypescriptSvg
  },
  reactjs: {
    name: "Reactjs",
    icon: ReactjsSvg
  },
  reactnative: {
    name: "React Native",
    icon: TbBrandReactNative
  },
  nextjs: {
    name: "Nextjs",
    icon: SiNextdotjs
  },
  reactrouterdom: {
    name: "React Router Dom",
    icon: ReactRouterDomIcon
  },
  reduxtk: {
    name: "Redux Toolkit",
    icon: ReduxSvg
  },
  tailwindcss: {
    name: "Tailwindcss",
    icon: TailwindcssSvg
  },
  mui: {
    name: "MUI",
    icon: MuiSvg
  },
  radixui: {
    name: "Radix UI",
    icon: RadixUISvg
  },
  shardcn: {
    name: "Shard-cn",
    icon: ShardcnSvg
  },
  bootstrap: {
    name: "BootStrap",
    icon: SiBootstrap
  },
  framermotion: {
    name: "Framer motion",
    icon: FramerMotionIcon
  },
  vite: {
    name: "Vite",
    icon: ViteSvg
  },
  nodejs: {
    name: "Nodejs",
    icon: NodejsSvg
  },
  express: {
    name: "Express",
    icon: SiExpress
  },
  socketio: {
    name: "Socket.io",
    icon: SiSocketdotio
  },
  jwt: {
    name: "JWT",
    icon: JwtSvg
  },
  mongodb: {
    name: "MongoDB",
    icon: MongoDBSvg
  },
  postgress: {
    name: "Postgress",
    icon: PostgressSvg
  },
  prisma: {
    name: "Prisma",
    icon: SiPrisma
  },
  git: {
    name: "Git",
    icon: GitSvg
  },
  docker: {
    name: "Docker",
    icon: DockerSvg
  },
  aws: {
    name: "AWS",
    icon: AwsSvg
  },
  postman: {
    name: "Postman",
    icon: PostmanSvg
  },
  linux: {
    name: "Linux",
    icon: SiLinux
  }
};


export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "React Native",
        icon: TbBrandReactNative,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux Toolkit",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Radix UI",
        icon: RadixUISvg,
      },
      {
        name: "Shard-cn",
        icon: ShardcnSvg,
      },
      {
        name: "BootStrap",
        icon: SiBootstrap,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "JWT",
        icon: JwtSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Linux",
        icon: SiLinux,
      },
    ],
  },
];
