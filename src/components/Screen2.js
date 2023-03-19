import { useState } from "react";
import Card from "./Card";

const Screen2 = ({ value }) => {
  const [resultantString, setResultantString] = useState(value);
  console.log(resultantString);

  const handleClick = (char) => {

    const newStr = removeDuplicates(resultantString, char);
    setResultantString(newStr);
  };

  const removeDuplicates = (str, char)  => {
    const arr = str.split("");
    const charIndex = arr.indexOf(char);

    for (let i = charIndex + 1; i < arr.length; i++) {
      if (arr[i] === char && i !== arr.indexOf(char)) {
        arr.splice(i, 1);
        // console.log(arr);

        // break;
      }
    }
    return arr.join("");
  }

  return (
    <div>
      <p>{resultantString}</p>
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
