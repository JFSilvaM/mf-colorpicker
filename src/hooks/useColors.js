import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
  const [color, setColor] = useState(getLastColor());
  const [colorList, setColorList] = useState(getColorList());

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colorList));
  }, [colorList]);

  const handleChangeColor = (e) => setColor(e.target.value);

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();
    const copyColors = [color, ...colorList];
    setColorList(copyColors);
  };

  const handleClickClearColors = () => {
    setColor("#000000");
    setColorList([]);
    localStorage.removeItem("colors");
  };

  return {
    handleChangeColor,
    handleSubmitSaveColor,
    handleClickClearColors,
    color,
    colorList,
  };
};
