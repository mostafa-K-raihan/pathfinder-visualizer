import Cell from "./Cell";
import "./Container.scss";
interface Props {}

export const Container = (props: Props) => {
  const cells = [...Array(1000).keys()];
  return (
    <div className="Container">
      {cells.map((i) => (
        <Cell key={`${i}`} />
      ))}
    </div>
  );
};
