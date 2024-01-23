import { Button } from "antd";

const CustomBtn = ({ text, icon }) => {
  return (
    <>
      <Button
        type="primary"
        className="h-12 px-16 bg-green-700 text-black border border-1 border-black rounded-full text-md donwnloadBtn"
      >
        {text}
        <span className="text-black mx-2">{icon}</span>
      </Button>
    </>
  );
};

export default CustomBtn;
