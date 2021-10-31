import { useCallback, useState } from "react";
import "./Cell.scss";

interface Props {}

const COLORS = {
  transparent: "TRANSPARENT",
  green: "GREEN",
  red: "RED",
} as const;

const Cell = (props: Props) => {
  const [color, setColor] = useState<typeof COLORS[keyof typeof COLORS]>(
    COLORS.transparent
  );
  const onClickCell = useCallback(() => {
    setColor((prev) => {
      if (prev === COLORS.green) {
        return COLORS.transparent;
      }

      return COLORS.green;
    });
  }, []);
  return (
    <div
      className={`Cell Cell--${color.toLowerCase()}`}
      onClick={onClickCell}
    ></div>
  );
};

export default Cell;
