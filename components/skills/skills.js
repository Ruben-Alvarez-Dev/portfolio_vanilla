import { select } from "../../services/services";
import { articleComponent } from "../article/article";
import "./skills.css";
export const skillsComponents = () => {
  select(".section.skills").innerHTML = `
  <div id="skills__container" class="skills__container">
    ${articleComponent(
      "skills",
      "Card Left",
      "Subtitle or Caption",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      articleComponent("skills", "qqw", "d", "qwdwqd", "") +
        articleComponent("skills", "qqw", "d", "qwdwqd", "") +
        articleComponent("skills", "qqw", "d", "qwdwqd", "")
    )}
    ${articleComponent(
      "skills",
      "Card Right",
      "Subtitle or Caption",
      "Lorem ipsum dolor sit amet.",

      articleComponent("skills", "qqw", "d", "qwdwqd", "") +
        articleComponent("skills", "qqw", "d", "qwdwqd", "") +
        articleComponent("skills", "qqw", "d", "qwdwqd", "")
    )}
  </div>
    
  `;
};
