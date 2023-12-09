import React from "react";
import {
 DayContainer,
 DayLabel,
 RoutineBox,
 RoutineItemHead,
} from "../../style/common-style";

function DayWrap({ date, day, children }) {
 return (
  <DayContainer>
   <DayLabel>
    {date}일차, {day}
   </DayLabel>
   <RoutineBox>
    <RoutineItemHead>시간</RoutineItemHead>
    <RoutineItemHead>일정</RoutineItemHead>
    {children}
   </RoutineBox>
  </DayContainer>
 );
}

export default DayWrap;
