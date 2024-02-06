import { select } from "../../services/services";
import { articleComponent } from "../article/article";
import "./training.css";
export const trainingComponents = () => {
  select(".section.training").innerHTML = `
  <div id="training__container" class="training__container">
    ${articleComponent(
      "training",
      "Card Left",
      "Subtitle or Caption",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      articleComponent("training", "qqw", "d", "qwdwqd", "") +
        articleComponent("training", "qqw", "d", "qwdwqd", "") +
        articleComponent("training", "qqw", "d", "qwdwqd", "")
    )}
    ${articleComponent(
      "training",
      "Card Right",
      "Subtitle or Caption",
      "Lorem ipsum dolor sit amet.",

      articleComponent("training", "qqw", "d", "qwdwqd", "") +
        articleComponent("training", "qqw", "d", "qwdwqd", "") +
        articleComponent("training", "qqw", "d", "qwdwqd", "")
    )}
  </div>
    
  `;
};
