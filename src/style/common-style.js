import { styled } from "styled-components";

export const DayContainer = styled.div`
 width: 100%;
 height: calc(100% - 50px);
 display: flex;
 justify-content: flex-start;
 flex-direction: column;
 align-items: center;
`;

export const DayLabel = styled.p`
 font-size: 1.4rem;
 font-weight: 600;
 width: 100%;
 text-align: center;
`;

export const RoutineBox = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 1fr 2fr;
 border-collapse: collapse;
`;

export const RoutineItemHead = styled.div`
 box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
 background-color: #f4d160;
 padding: 1rem;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const TimeBox = styled.div`
 box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
 padding: 0.8rem;
 &.move {
  background-color: #ccc;
 }
`;

export const PlanBox = styled.div`
 box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
 padding: 0.8rem;
 &.move {
  background-color: #ccc;
 }
`;
