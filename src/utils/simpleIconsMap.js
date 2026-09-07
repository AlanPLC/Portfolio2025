import {
  siTypescript,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siSupabase,
  siNodedotjs,
  siMake,
  siWhatsapp,
  siDocker,
  siJavascript,
  siExpress,
  siMysql,
  siSequelize,
  siVite,
  siExpo,
} from "simple-icons";

const ICON_MAP = {
  typescript: siTypescript,
  "next.js": siNextdotjs,
  react: siReact,
  reactnative: siReact,
  "tailwind css": siTailwindcss,
  supabase: siSupabase,
  "node.js": siNodedotjs,
  make: siMake,
  "whatsapp business api": siWhatsapp,
  docker: siDocker,
  javascript: siJavascript,
  express: siExpress,
  "express.js": siExpress,
  mysql: siMysql,
  "sequelize orm": siSequelize,
  vite: siVite,
  expo: siExpo,
};

export function getTechIcon(name) {
  return ICON_MAP[name.trim().toLowerCase()] || null;
}
