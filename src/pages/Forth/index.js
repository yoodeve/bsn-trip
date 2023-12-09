import React from "react";
import DayWrap from "../../components/Navigation/DayWrap";
import ForthDayPlan from "./ForthDayPlan";

function Forth(props) {
 return (
  <DayWrap date="4" day="12월 15일">
   <ForthDayPlan />
  </DayWrap>
 );
}

export default Forth;
