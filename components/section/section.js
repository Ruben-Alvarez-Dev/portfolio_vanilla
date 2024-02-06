import "./section.css";
export const sectionComponent = (section) => {
  return `
    <section id="${section}" class="section ${section}">
      <div id="${section}__container" class="${section}__container">
      </div>
    </section>
  `;
};
