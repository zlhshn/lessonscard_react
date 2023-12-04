import React, { useState } from "react";
import ItemStyled from "../scss/item.module.scss";

const İtem = ({ language }) => {
  const { name, hour, image } = language;
  const [toggle, setToggle] = useState(true);
  const handleCardShow = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className={ItemStyled.card} onClick={handleCardShow}>
      <div className={ItemStyled["list-container"]}>
        {toggle ? (
          <img className={ItemStyled.img} src={image} alt={name} />
        ) : (
          <li className={ItemStyled.list}>{hour}</li>
        )}
        <h4 className={ItemStyled.name}>{name}</h4>
      </div>
    </div>
  );
};

export default İtem;
