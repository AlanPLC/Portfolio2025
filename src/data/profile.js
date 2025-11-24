export const profile = {
    greeting: "Hola, soy",
    name: "Nombre",
    role: "Full Stack Developer",
    description:
      "Me especializo en construir experiencias web rápidas, accesibles y con diseño cuidado. Trabajo con React, Vite y APIs modernas. Me interesa el rendimiento y la UX pixel-perfect.",
    avatar: "/assets/avatar.jpg",
    about: "u perro amigo mira que yo nunca lloré por un tema igual no estoy llorando por el tema amigo osea me hizo re reflexionar una banda de cosas perro que yo capaz no me rescato este vago un fla amigo me hace pone pensar na amigo me hace poner pensar que ahora capaz cuando vuelva a mi casa yo voy a poder decir que tengo una isla del encanto con coscu amigo",
    links: {
      cv: "/assets/CV-Simon.pdf",
      contact: "mailto:simon@example.com",
      github: "https://github.com/tu-usuario",
      linkedin: "https://www.linkedin.com/in/tu-usuario"
    }
  };
  
  export const experienceData = [
    {
      // No tienes fechas en tus datos, las he omitido o puedes agregarlas si quieres que aparezcan
      // date: "Ene. 2022 - Presente", // Agrega esta propiedad si quieres una fecha
      img: "./projects-imgs/vector.png", // Aunque en el diseño actual no mostramos la imagen aquí
      role: "Full Stack Developer",
      company: "Empresa X",
      description:
        "Desarrollo de aplicaciones web usando React, Node.js y bases de datos SQL/NoSQL. Mejora de performance y optimización de UX. Mejora de performance y optimización de UX.",
      achievements: [
        "Implementé un sistema que redujo los tiempos de carga en un 40%",
        "Desarrollé un dashboard completo con autenticación JWT",
        "Diseñé componentes reutilizables con patrones avanzados de React"
      ],
      tech: ["React", "Node", "MongoDB", "SQL", "Docker"],
      impactLevel: 5
    },
    {
      // date: "Jul. 2019 - Dic. 2021",
      img: "./projects-imgs/ecommerce.png",
      role: "E-commerce Platform Backend",
      company: "Freelance Project",
      description:
        "Desarrollo completo del backend para una plataforma de e-commerce escalable, manejando inventario, órdenes de compra y pasarelas de pago. Implementación de microservicios para desacoplar la lógica de negocio.",
      achievements: [
        "Diseñé e implementé una API RESTful para la gestión de productos y usuarios.",
        "Integración exitosa con Stripe para el procesamiento de pagos.",
        "Aseguré la consistencia de datos mediante transacciones en la base de datos."
      ],
      tech: ["Express.js", "PostgreSQL", "Prisma", "AWS S3", "Redis"],
      impactLevel: 4
    },
    {
      // date: "Feb. 2018 - Jun. 2019",
      img: "./projects-imgs/saas.png",
      role: "SaaS Analytics Dashboard (Frontend Focus)",
      company: "Startup Innovadora",
      description:
        "Creación de una interfaz de usuario avanzada para un producto SaaS de análisis de datos. Desarrollo de visualizaciones interactivas de datos en tiempo real y componentes de tabla altamente configurables.",
      achievements: [
        "Rediseño completo de la UI/UX, resultando en un aumento del 25% en la retención de usuarios.",
        "Implementé gráficos dinámicos con D3.js y Chart.js para mostrar métricas clave.",
        "Optimización del rendimiento del frontend usando React Context y memoization."
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Jest"],
      impactLevel: 3
    },
    {
      // date: "Sep. 2017 - Ene. 2018",
      img: "./projects-imgs/cms.png",
      role: "Custom CMS Development",
      company: "Agencia Digital",
      description:
        "Desarrollo de un Sistema de Gestión de Contenidos (CMS) personalizado para clientes. El sistema permite la creación y publicación dinámica de contenido, con un potente editor de texto enriquecido.",
      achievements: [
        "Construcción de un editor de contenido WYSIWYG personalizado basado en Draft.js.",
        "Implementación de control de acceso basado en roles (RBAC) para diferentes niveles de usuario.",
        "Configuración de la infraestructura con despliegue continuo (CI/CD) usando GitHub Actions."
      ],
      tech: ["Next.js", "Strapi (Headless CMS)", "SQL", "Vercel", "Chakra UI"],
      impactLevel: 4
    },
    {
      // date: "Abr. 2017 - Ago. 2017",
      img: "./projects-imgs/game.png",
      role: "Mobile Game API & Database",
      company: "Indie Studio Collab",
      description:
        "Diseño y desarrollo de la API y la base de datos para manejar datos de jugadores, puntuaciones altas y logros para un juego móvil independiente. Priorización de baja latencia y alta concurrencia.",
      achievements: [
        "Implementé una solución de almacenamiento de datos de baja latencia usando DynamoDB.",
        "Desarrollé endpoints de autenticación y leaderboard usando serverless functions (Lambda).",
        "Optimicé las consultas de la base de datos para manejar picos de tráfico de usuarios."
      ],
      tech: ["Node.js", "AWS Lambda", "DynamoDB", "Serverless Framework", "Jest"],
      impactLevel: 2
    }
  ];




  export const experience = [
    {
      img: "./projects-imgs/vector.png",
      role: "Full Stack Developer",
      company: "Empresa X",
      description:
        "Desarrollo de aplicaciones web usando React, Node.js y bases de datos SQL/NoSQL. Mejora de performance y optimización de UX. Mejora de performance y optimización de UX.",
      achievements: [
        "Implementé un sistema que redujo los tiempos de carga en un 40%",
        "Desarrollé un dashboard completo con autenticación JWT",
        "Diseñé componentes reutilizables con patrones avanzados de React"
      ],
      tech: ["React", "Node", "MongoDB","sql", "Docker"],
      impactLevel: 5 
    },
    {
      img: "./projects-imgs/ecommerce.png",
      role: "E-commerce Platform Backend",
      company: "Freelance Project",
      description:
        "Desarrollo completo del backend para una plataforma de e-commerce escalable, manejando inventario, órdenes de compra y pasarelas de pago. Implementación de microservicios para desacoplar la lógica de negocio.",
      achievements: [
        "Diseñé e implementé una API RESTful para la gestión de productos y usuarios.",
        "Integración exitosa con Stripe para el procesamiento de pagos.",
        "Aseguré la consistencia de datos mediante transacciones en la base de datos.",
      ],
      tech: ["Express.js", "PostgreSQL", "Prisma", "AWS S3", "Redis"],
      impactLevel: 4 
    },
    {
      img: "./projects-imgs/saas.png",
      role: "SaaS Analytics Dashboard (Frontend Focus)",
      company: "Startup Innovadora",
      description:
        "Creación de una interfaz de usuario avanzada para un producto SaaS de análisis de datos. Desarrollo de visualizaciones interactivas de datos en tiempo real y componentes de tabla altamente configurables.",
      achievements: [
        "Rediseño completo de la UI/UX, resultando en un aumento del 25% en la retención de usuarios.",
        "Implementé gráficos dinámicos con D3.js y Chart.js para mostrar métricas clave.",
        "Optimización del rendimiento del frontend usando React Context y memoization.",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Jest"],
      impactLevel: 3
    },
    {
      img: "./projects-imgs/cms.png",
      role: "Custom CMS Development",
      company: "Agencia Digital",
      description:
        "Desarrollo de un Sistema de Gestión de Contenidos (CMS) personalizado para clientes. El sistema permite la creación y publicación dinámica de contenido, con un potente editor de texto enriquecido.",
      achievements: [
        "Construcción de un editor de contenido WYSIWYG personalizado basado en Draft.js.",
        "Implementación de control de acceso basado en roles (RBAC) para diferentes niveles de usuario.",
        "Configuración de la infraestructura con despliegue continuo (CI/CD) usando GitHub Actions.",
      ],
      tech: ["Next.js", "Strapi (Headless CMS)", "SQL", "Vercel", "Chakra UI"],
      impactLevel: 4
    },
    {
      img: "./projects-imgs/game.png",
      role: "Mobile Game API & Database",
      company: "Indie Studio Collab",
      description:
        "Diseño y desarrollo de la API y la base de datos para manejar datos de jugadores, puntuaciones altas y logros para un juego móvil independiente. Priorización de baja latencia y alta concurrencia.",
      achievements: [
        "Implementé una solución de almacenamiento de datos de baja latencia usando DynamoDB.",
        "Desarrollé endpoints de autenticación y leaderboard usando serverless functions (Lambda).",
        "Optimicé las consultas de la base de datos para manejar picos de tráfico de usuarios.",
      ],
      tech: ["Node.js", "AWS Lambda", "DynamoDB", "Serverless Framework", "Jest"],
      impactLevel: 2
    },
  ];
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
    complement_img: "./vite.svg"
  },
  {
    name: "React Native",
    category: "Frameworks",
    complement: "Expo",
    techs: ["R Native", "Expo"],
    percentage: 70,
    img: "./assets/icons/react.svg",
    complement_img: "./vite.svg"
  },
  {
    name: "Javascript",
    category: "Lenguajes",
    complement: "",
    techs: ["Javascript"],
    percentage: 100,
    img: "./assets/icons/js.svg",
    complement_img: ""
  },
  {
    name: "MySQL",
    category: "Bases de Datos",
    complement: "",
    techs: ["MySQL"],
    percentage: 30,
    img: "./assets/icons/sql.svg",
    complement_img: ""
  },
  {
    name: "NodeJS",
    category: "Frameworks",
    complement: "Express",
    techs: ["NodeJS", "Express"],
    percentage: 70,
    img: "./assets/icons/node.svg",
    complement_img: "./vite.svg"
  },
  {
    name: "GIT",
    category: "Control de Versiones",
    complement: "Github",
    techs: ["GIT", "Github"],
    percentage: 100,
    img: "./vite.svg",
    complement_img: "././assets/icons/github.svg"
  },
  {
    name: "Python",
    category: "Lenguajes",
    complement: "PyQT",
    techs: ["Python", "PyQT"],
    percentage: 40,
    img: "./vite.svg",
    complement_img: "./vite.svg"
  }
]