import * as staticExample from "./staticData.example.js";

let data;

try {
  const modules = import.meta.glob("./staticData.js", { eager: true });
  data = modules["./staticData.js"] || staticExample;
} catch (e) {
  data = staticExample;
}

export const { profile, experienceData, projectsData, toolsData } = data;