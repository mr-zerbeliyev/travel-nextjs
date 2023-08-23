import React from "react";

interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  return (
    <button className="px-[26px] py-[18px]  bg-btnYellow rounded-[10px] text-white text-lg shadow-button">
      {title}
    </button>
  );
};

export default Button;
