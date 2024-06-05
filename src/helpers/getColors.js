export const getColorList = () =>
  JSON.parse(localStorage.getItem("colors")) || [];

export const getLastColor = () => getColorList()[0] || "#000000";
