import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalval] = useState("");
  const onButtonClick = (buttonOnName) => {
    if (buttonOnName === "C") {
      setCalval("");
    } else if (buttonOnName === "=") {
      const finalRes = eval(calVal);
      setCalval(finalRes);
    } else {
      const newValue = calVal + buttonOnName;
      setCalval(newValue);
    }

    console.log(buttonOnName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1 className={styles.heading}>Calculator</h1>
        <Display calVal={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
