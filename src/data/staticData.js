export const profile = {
  name: "Nombre",
  avatar: "/assets/avatar.jpg",
  links: {
    cv: "/assets/CV-Simon.pdf",
    contact: "simon@example.com",
    github: "https://github.com/tu-usuario",
    linkedin: "https://www.linkedin.com/in/tu-usuario",
  },
  stats: {
    experience: "4+",
    skills: "7+",
    projects: "10+"
  }
};

export const experienceData = {
  experience1:{
    img: "./projects-imgs/vector.png",
    tech: ["React", "Node", "MongoDB", "SQL", "Docker"],
    impactLevel: 5,
  },
  experience2:{
    img: "./projects-imgs/ecommerce.png",
    tech: ["Express.js", "PostgreSQL", "Prisma", "AWS S3", "Redis"],
    impactLevel: 4,
  },
  experience3: {
    img: "./projects-imgs/saas.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Jest"],
    impactLevel: 3
  },
  experience4: {
    img: "./projects-imgs/cms.png",
    tech: ["Next.js", "Strapi (Headless CMS)", "SQL", "Vercel", "Chakra UI"],
    impactLevel: 4,
  },
  experience5: {
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
    liveUrl:"lol",
    codeUrl:"lol",
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
export const toolsData = {
  react: {
    name: "React",
    complement: "Vite",
    techs: ["React", "Vite"],
    percentage: 70,
  },
  reactNative: {
    name: "React Native",
    complement: "Expo",
    techs: ["R Native", "Expo"],
    percentage: 70,
  },
  javascript: {
    name: "Javascript",
    complement: "",
    techs: ["Javascript"],
    percentage: 100,
  },
  mysql: {
    name: "MySQL",
    complement: "",
    techs: ["MySQL"],
    percentage: 30,
  },
  nodejs: {
    name: "NodeJS",
    complement: "Express",
    techs: ["NodeJS", "Express"],
    percentage: 70,
  },
  git: {
    name: "GIT",
    complement: "Github",
    techs: ["GIT", "Github"],
    percentage: 100,
  },
  python: {
    name: "Python",
    complement: "PyQT",
    techs: ["Python", "PyQT"],
    percentage: 40,
  }
};

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
