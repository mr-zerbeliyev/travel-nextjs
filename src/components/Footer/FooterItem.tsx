import React from "react";

interface Props {
  title: string;
  items: string[];
}
const FooterItem: React.FC<Props> = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-xl font-poppins font-bold text-black pb-8">
        {title}
      </h3>
      {items.map((item) => (
        <p className="font-poppins text-lg font-medium text-category  pb-3">
          {item}
        </p>
      ))}
    </div>
  );
};

export default FooterItem;
