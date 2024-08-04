import Block from "./components/Blocks";
import Charts from "./components/Charts";

const CenterSection = () => {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col">
      <Block />
      <Charts />
    </div>
  );
};

export default CenterSection;
