import "./main.css";
import { clear, select } from "../../services/services.js";
import { sectionComponent } from "../../components/section/section.js";
export const initMain = () => {
  return `
    <main class="main">
      <h1>Main</h1>
    </main>
  `;
};
export const mainComponents = (target) => {
  clear(target);
  target.innerHTML += `
    ${sectionComponent("about")}
    ${sectionComponent("projects")}
    ${sectionComponent("skills")}
    ${sectionComponent("training")}
  `;
};
