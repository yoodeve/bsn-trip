import React from "react";
import { PlanBox, TimeBox } from "../../style/common-style";

function ThirdDayPlan(props) {
 return (
  <>
   <TimeBox>09:00 - 09:30</TimeBox>
   <PlanBox>
    비오는 광안리 아침바다 구경 <br />은 퇴근시간을 피하기 위한 도구일뿐
   </PlanBox>
   <TimeBox className="move">09:30 - 10:30</TimeBox>
   <PlanBox className="move">41번타고 남포동 이동</PlanBox>
   <TimeBox>10:30 - 11:30</TimeBox>
   <PlanBox>국제시장 & 부평시장 구경(팥죽)</PlanBox>
   <TimeBox>11:30 - 12:30</TimeBox>
   <PlanBox>중식 메뉴 미정이</PlanBox>
   <TimeBox className="move">12:30 - 13:30</TimeBox>
   <PlanBox className="move">
    송도 이동
    <br />
    영심이찐빵 경유
   </PlanBox>
   <TimeBox>13:30 - 14:00</TimeBox>
   <PlanBox>송도해수욕장 구경</PlanBox>
   <TimeBox>14:00 - 16:00</TimeBox>
   <PlanBox>
    송도 앞 카페에서 커피
    <br />
    어쩌면 낮잠잘듯...
    <br />
    케이블카 구경하면서 시간보내기
   </PlanBox>
   <TimeBox className="move">16:00 - 16:40</TimeBox>
   <PlanBox className="move">중앙동 이동</PlanBox>
   <TimeBox>17:00 - 17:50</TimeBox>
   <PlanBox>중앙동 상짱 석식</PlanBox>
   <TimeBox>17:50 - 18:30</TimeBox>
   <PlanBox>남포동 트리축제 구경</PlanBox>
   <TimeBox className="move">18:30 - 19:40</TimeBox>
   <PlanBox className="move">
    숙소 도착
    <br /> 개인정비시간
   </PlanBox>
  </>
 );
}

export default ThirdDayPlan;
