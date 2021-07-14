import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A meal image"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
