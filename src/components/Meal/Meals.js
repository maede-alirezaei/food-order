import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

function Meals(props) {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals onAdd={props.onAdd}/>
    </React.Fragment>
  );
}

export default Meals;
