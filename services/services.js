export const select = (selector) => {
  return document.querySelector(selector);
};
export const clear = (target) => {
  target.innerHTML = "";
};
