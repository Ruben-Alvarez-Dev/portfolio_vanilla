import "./app.css";
import { headerComponent } from "../header/header.js";
import { mainComponent } from "../main/main.js";
import { footerComponent } from "../footer/footer.js";

export const appComponent = () => {
  return `
      ${headerComponent()}
      ${mainComponent()}
      ${footerComponent()}
      
    `;
};
