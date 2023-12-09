import React from "react";
import { PlanBox, TimeBox } from "../../style/common-style";

function ForthDayPlan(props) {
 return (
  <>
   <TimeBox className="move">09:00 - 09:30</TimeBox>
   <PlanBox className="move">
    서면으로 출발
    <br />
    혁철카 대동
   </PlanBox>
   <TimeBox>09:30 - 11:00</TimeBox>
   <PlanBox>
    부전시장 구경
    <br />
    부전시장공영주차장 주차
   </PlanBox>
   <TimeBox>11:00 - 12:00</TimeBox>
   <PlanBox>
    중식타임
    <br />
    메뉴 미정이
   </PlanBox>
   <TimeBox>12:00 - 14:00</TimeBox>
   <PlanBox>전리단길(전포 카페거리) 구경</PlanBox>
   <TimeBox className="move">14:20 - 15:00</TimeBox>
   <PlanBox className="move">
    다대포로 이동
    <br />
    혁철카 대동
   </PlanBox>
   <TimeBox>15:00 - 17:00</TimeBox>
   <PlanBox>마지막 카페타임</PlanBox>
   <TimeBox>17:00 - 18:00</TimeBox>
   <PlanBox>해지는 다대포 구경</PlanBox>
   <TimeBox>18:00 - 19:00</TimeBox>
   <PlanBox>석식시간이나 다대포는 먹을게 많지않음...어쩌지</PlanBox>
   <TimeBox className="move">19:00 - </TimeBox>
   <PlanBox className="move">잘가 여보 또와줭</PlanBox>
  </>
 );
}

export default ForthDayPlan;
