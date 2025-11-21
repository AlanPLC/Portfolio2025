const map = {
  react: "/assets/icons/react.svg",
  "react.js": "/assets/icons/react.svg",

  ts: "/assets/icons/ts.svg",
  typescript: "/assets/icons/ts.svg",

  tailwind: "/assets/icons/tailwind.svg",

  next: "/assets/icons/next.svg",

  node: "/assets/icons/node.svg",
  express: "/assets/icons/node.svg",

  mongo: "/assets/icons/mongo.svg",
  mongodb: "/assets/icons/mongo.svg",

  php: "/assets/icons/php.svg",

  wordpress: "/assets/icons/wordpress.svg",

  redis: "/assets/icons/redis.svg",

  docker: "/assets/icons/docker.svg",

  html: "/assets/icons/html.svg",
  css: "/assets/icons/css.svg",
  js: "/assets/icons/js.svg",

  github: "/assets/icons/github.svg",
  linkedin: "/assets/icons/linkedin.svg",

  bootstrap: "/assets/icons/bootstrap.svg",
  sass: "/assets/icons/sass.svg",
  sql: "/assets/icons/sql.svg",
};

export function normalizeTech(s) {
  return String(s).trim().toLowerCase().replace(/\s+/g, "");
}

export function getTechIcon(tech) {
  const key = normalizeTech(tech);
  return map[key] || null;
}