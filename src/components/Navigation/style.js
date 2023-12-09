import { styled } from "styled-components";

export const TotalContainer = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
`;

export const NavigationContainer = styled.div`
 display: flex;
 justify-content: space-between;
 background-color: #1d5d9b;
 width: 100%;
 height: 60px;
`;

export const OutletContainer = styled.div`
 height: calc(100vh - 130px);
 overflow-y: auto;
 overflow-x: hidden;
`;

export const MenuBox = styled.div`
 border-right: 1px solid #fff;
 width: 100%;
 height: 60px;
 flex-grow: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 color: #fff;
 cursor: pointer;
 &.selected {
  background-color: #f4d160;
  color: #000;
  font-weight: 600;
  transition: all 0.3s ease;
 }
 &:last-child {
  border: unset !important;
 }
`;

export const Footer = styled.footer`
 width: 100%;
 height: 70px;
 padding: 10px 0;
 border-top: 1px solid #dbdbdb;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 0.6rem;
 background-color: #fff;
 position: fixed;
 bottom: 0;
 left: 0;
`;
