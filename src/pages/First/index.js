import React from "react";
import DayWrap from "../../components/Navigation/DayWrap";
import FirstDayPlan from "./FirstDayPlan";

function First(props) {
 return (
  <DayWrap date="1" day="12월 12일">
   <FirstDayPlan />
  </DayWrap>
 );
}

export default First;
