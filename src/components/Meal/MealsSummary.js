import React from "react";
import styles from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food ,Delivered to you</h2>
      <p>
        Choose your favourite from our broad section of available Meals and
        enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients,of course by
        experienced chefs!
      </p>
    </section>
  );
}

export default MealsSummary;
