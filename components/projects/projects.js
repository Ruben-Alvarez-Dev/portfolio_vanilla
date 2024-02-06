import { select } from "../../services/services";
import { articleComponent } from "../article/article";
import "./projects.css";
export const projectsComponents = () => {
  select(".section.projects").innerHTML = `
  <div id="projects__container" class="projects__container">
    ${articleComponent(
      "projects",
      "Card Left",
      "Subtitle or Caption",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      articleComponent("projects", "qqw", "d", "qwdwqd", "") +
        articleComponent("projects", "qqw", "d", "qwdwqd", "") +
        articleComponent("projects", "qqw", "d", "qwdwqd", "")
    )}
    ${articleComponent(
      "projects",
      "Card Right",
      "Subtitle or Caption",
      "Lorem ipsum dolor sit amet.",

      articleComponent("projects", "qqw", "d", "qwdwqd", "") +
        articleComponent("projects", "qqw", "d", "qwdwqd", "") +
        articleComponent("projects", "qqw", "d", "qwdwqd", "")
    )}
  </div>
    
  `;
};
