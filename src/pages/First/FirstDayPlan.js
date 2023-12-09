import React from "react";
import { PlanBox, TimeBox } from "../../style/common-style";

function FirstDayPlan(props) {
 return (
  <>
   <TimeBox className="move">16:00 - </TimeBox>
   <PlanBox className="move">부산으로 출발</PlanBox>
   <TimeBox>22:00 -</TimeBox>
   <PlanBox>
    부산 도착
    <br />
    여건되면 광안리산책
   </PlanBox>
  </>
 );
}

export default FirstDayPlan;
