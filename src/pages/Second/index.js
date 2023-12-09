import React from "react";
import DayWrap from "../../components/Navigation/DayWrap";
import SecondDayPlan from "./SecondPlan";

function Second(props) {
 return (
  <DayWrap date="2" day="12월 13일">
   <SecondDayPlan />
  </DayWrap>
 );
}

export default Second;
