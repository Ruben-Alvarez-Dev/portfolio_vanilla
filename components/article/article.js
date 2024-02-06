import "./article.css";
export const articleComponent = (
  section = "",
  title = "",
  subtitle = "",
  content = "",
  display = ""
) => {
  return `
    <article class="${section} article__container">
      ${title ? `<h2 class="${section} article__title">${title}</h2>` : ""}
      ${
        subtitle
          ? `<h3 class="${section} article__subtitle">${subtitle}</h3>`
          : ""
      }
      ${content ? `<p class="${section} article__content">${content}}</p>` : ""}
      ${
        display
          ? `<div class="${section} article__display">${display}</div>`
          : ""
      }
    </article>`;
};
