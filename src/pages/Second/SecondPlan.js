import React from "react";
import { PlanBox, TimeBox } from "../../style/common-style";

function SecondDayPlan(props) {
 return (
  <>
   <TimeBox>09:00 - 11:00</TimeBox>
   <PlanBox>
    광안리 아침바다 구경 <br />
    인생네컷 사진 와방방 포함 <br />
    시간뜨면 바다멍
   </PlanBox>
   <TimeBox>11:00 - 12:00</TimeBox>
   <PlanBox>할매재첩국에서 점심먹기 카페도</PlanBox>
   <TimeBox className="move">12:00 - 12:30</TimeBox>
   <PlanBox className="move">해운대 이동</PlanBox>
   <TimeBox>12:30 - 15:30</TimeBox>
   <PlanBox>해운대 - 송정 - 청사포 구경</PlanBox>
   <TimeBox className="move">15:30 - 16:30</TimeBox>
   <PlanBox className="move">청사포에서 광안리로 이동</PlanBox>
   <TimeBox>17:00 - 18:30</TimeBox>
   <PlanBox>왕초장 대방어or광어, 매운탕수제비</PlanBox>
   <TimeBox className="move">19:00 - </TimeBox>
   <PlanBox className="move">
    옵스 빵 사서 도보로 숙소 이동
    <br />
    땡기는것있으면 한다
   </PlanBox>
  </>
 );
}

export default SecondDayPlan;
