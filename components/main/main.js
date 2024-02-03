import "./main.css";
import { about } from "./about/about.js";
import { projects } from "./projects/projects.js";
import { training } from "./traning/training.js";
import { skills } from "./skills/skills.js";

export const mainComponent = () => {
  return `
    <main>
      ${about()}
      ${projects()}
      ${training()}
      ${skills()}
    </main>
    `;
};
