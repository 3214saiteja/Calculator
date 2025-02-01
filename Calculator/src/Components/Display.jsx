import styles from "./Display.module.css";
const Display = ({ calVal, display }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={calVal}
      readOnly
      onChange={display}
    ></input>
  );
};
export default Display;
