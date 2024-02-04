import "./about.css";
import { card } from "../card/card.js";

export const about = () => {
  return `
    <section class="about">
      <h1 class="about__title">About Title</h1>
      <div class="about__container">
        ${card()}
      </div>
    </section>
  `;
};
