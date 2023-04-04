import { useState } from "react";

function Detective() {
    const [sherlock, setSherlock] = useState("Психопат");

    const handlerClick = () => {
        setSherlock("Высокоактивный социопат");
    };

    return (
      <>
      <div>Шерлок - {sherlock}</div>
      <button onClick={handlerClick}>Узнать правду</button>
      </>
    );
  }
  
  export default Detective;