export const profile = {
  greeting: "Hola, soy",
  name: "Nombre",
  avatar: "/assets/avatar.jpg",
  links: {
    cv: "/assets/CV-Simon.pdf",
    contact: "mailto:simon@example.com",
    github: "https://github.com/tu-usuario",
    linkedin: "https://www.linkedin.com/in/tu-usuario",
  },
};

export const experienceData = {
  experience1: {
    // date: "Ene. 2022 - Presente",
    img: "./projects-imgs/vector.png",
    tech: ["React", "Node", "MongoDB", "SQL", "Docker"],
    impactLevel: 5,
  },
  experience2:{
    // date: "Jul. 2019 - Dic. 2021",
    img: "./projects-imgs/ecommerce.png",
    tech: ["Express.js", "PostgreSQL", "Prisma", "AWS S3", "Redis"],
    impactLevel: 4,
  },
  experience3: {
    // date: "Feb. 2018 - Jun. 2019",
    img: "./projects-imgs/saas.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Jest"],
    impactLevel: 3
  },
  experience4: {
    // date: "Sep. 2017 - Ene. 2018",
    img: "./projects-imgs/cms.png",
    tech: ["Next.js", "Strapi (Headless CMS)", "SQL", "Vercel", "Chakra UI"],
    impactLevel: 4,
  },
  experience5: {
    // date: "Abr. 2017 - Ago. 2017",
    img: "./projects-imgs/game.png",
    tech: ["Node.js", "AWS Lambda", "DynamoDB", "Serverless Framework", "Jest"],
    impactLevel: 2,
  },
};

export const projectsData = {
  project1: {
    img: "./projects-imgs/vector.png",
    tech: ["React", "Node", "MongoDB", "sql", "Docker"],
    impactLevel: 5,
  },
  project2: {
    img: "./projects-imgs/ecommerce.png",
    tech: ["Express.js", "PostgreSQL", "Prisma", "AWS S3", "Redis"],
    impactLevel: 4,
  },
  project3: {
    img: "./projects-imgs/saas.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Jest"],
    impactLevel: 3,
  },
};
// "React", "Node.js", "Express", "Mysql", "ReactNative"
export const tools = [
  {
    name: "React",
    category: "Frameworks",
    complement: "Vite",
    techs: ["React", "Vite"],
    // Porcentajes del 1 al 100
    percentage: 70,
    img: "./assets/icons/react.svg",
    complement_img: "./vite.svg",
  },
  {
    name: "React Native",
    category: "Frameworks",
    complement: "Expo",
    techs: ["R Native", "Expo"],
    percentage: 70,
    img: "./assets/icons/react.svg",
    complement_img: "./vite.svg",
  },
  {
    name: "Javascript",
    category: "Lenguajes",
    complement: "",
    techs: ["Javascript"],
    percentage: 100,
    img: "./assets/icons/js.svg",
    complement_img: "",
  },
  {
    name: "MySQL",
    category: "Bases de Datos",
    complement: "",
    techs: ["MySQL"],
    percentage: 30,
    img: "./assets/icons/sql.svg",
    complement_img: "",
  },
  {
    name: "NodeJS",
    category: "Frameworks",
    complement: "Express",
    techs: ["NodeJS", "Express"],
    percentage: 70,
    img: "./assets/icons/node.svg",
    complement_img: "./vite.svg",
  },
  {
    name: "GIT",
    category: "Control de Versiones",
    complement: "Github",
    techs: ["GIT", "Github"],
    percentage: 100,
    img: "./vite.svg",
    complement_img: "././assets/icons/github.svg",
  },
  {
    name: "Python",
    category: "Lenguajes",
    complement: "PyQT",
    techs: ["Python", "PyQT"],
    percentage: 40,
    img: "./vite.svg",
    complement_img: "./vite.svg",
  },
];

export const aboutImgs = [
  {
    img: "./projects-imgs/vector.png"
  },
  {
    img: "./projects-imgs/buenos dias.jpg"
  },
  {
    img: "./projects-imgs/gusano.jpg"
  },
];
