import { select } from "../../services/services";
import { articleComponent } from "../article/article";
import "./about.css";
export const aboutComponents = () => {
  select(".section.about").innerHTML = `
  <div id="about__container" class="about__container">
    ${articleComponent(
      "about",
      "Card Left",
      "Subtitle or Caption",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      articleComponent("about", "qqw", "d", "qwdwqd", "") +
        articleComponent("about", "qqw", "d", "qwdwqd", "") +
        articleComponent("about", "qqw", "d", "qwdwqd", "")
    )}
    ${articleComponent(
      "about",
      "Card Right",
      "Subtitle or Caption",
      "Lorem ipsum dolor sit amet.",

      articleComponent("about", "qqw", "d", "qwdwqd", "") +
        articleComponent("about", "qqw", "d", "qwdwqd", "") +
        articleComponent("about", "qqw", "d", "qwdwqd", "")
    )}
  </div>
    
  `;
};
