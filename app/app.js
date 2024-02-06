import "./app.css";
import { initHeader, headerComponents } from "./header/header.js";
import { initMain, mainComponents } from "./main/main.js";
import { initFooter, footerComponents } from "./footer/footer.js";
import { clear, select } from "../services/services.js";
import { aboutComponents } from "../components/about/about.js";
import { projectsComponents } from "../components/projects/projects.js";
import { skillsComponents } from "../components/skills/skills.js";
import { trainingComponents } from "../components/training/training.js";

export const init = async (target) => {
  // Init Header, Main and Footer
  initApp(target);

  // Init Component lists at each page
  initComponents();
};
const initApp = (target) => {
  clear(target);
  target.innerHTML = `
  ${initHeader()}
  ${initMain()}
  ${initFooter()}
`;
};
const initComponents = () => {
  // Header, Main and Footer
  headerComponents(select(".header"));
  mainComponents(select(".main"));
  footerComponents(select(".footer"));

  // About
  aboutComponents(select(".section.about"));
  // Projects
  projectsComponents(select(".section.projects"));
  // Skills
  skillsComponents(select(".section.skills"));
  // Training
  trainingComponents(select(".section.training"));
};
