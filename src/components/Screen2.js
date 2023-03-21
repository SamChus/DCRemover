import { useState } from "react";
import Card from "./Card";

const Screen2 = ({ value }) => {
  const [resultantString, setResultantString] = useState(value);
  const [text, setText] = useState(value);

  const handleClick = (index) => {
    const clickedChar = text[index];
    let newStr = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] === clickedChar && i !== index) {
        newStr += " ";
      } else {
        newStr += text[i];
      }
    }

    setText(newStr);
    
  };



  return (
    <div>
      <p>{text}</p>
      <br />
      {value &&
        value
          .split("")
          .map((character, index) => (
            <Card
              key={index}
              id={index}
              character={character}
              onclick={handleClick}
            />
          ))}
    </div>
  );
};

export default Screen2;
