import React from "react";
import DayWrap from "../../components/Navigation/DayWrap";
import ThirdDayPlan from "./ThirdDayPlan";

function Third(props) {
 return (
  <DayWrap date="3" day="12월 14일">
   <ThirdDayPlan />
  </DayWrap>
 );
}

export default Third;
