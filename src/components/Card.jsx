import CardStyled from "../scss/card.module.scss";
import data from "../data";
import Item from "./İtem";

const Card = () => {
  return (
    <div className={CardStyled["card-container"]}>
      <div className={CardStyled.cards}>
        {data.map((language, name) => (
          <Item language={language} key={name} />
        ))}
      </div>
    </div>
  );
};

export default Card;
