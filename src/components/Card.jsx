import CardStyled from "../scss/card.module.scss";
import data from "../data";
import Item from "./İtem";
import { useState } from "react";

const Card = () => {
  const [lesson, setLesson] = useState(data);

  return (
    <div className={CardStyled["card-container"]}>
      <div>
        <p className={CardStyled.size}>{lesson.length} Lessons Today</p>
      </div>
      <div className={CardStyled.cards}>
        {lesson.map((language, index) => (
          <Item lesson={language} key={index} />
        ))}
      </div>
      <div>
        <button onClick={() => setLesson([])}>Clear All</button>
      </div>
    </div>
  );
};

export default Card;
