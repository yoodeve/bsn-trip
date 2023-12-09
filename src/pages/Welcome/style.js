import { styled } from "styled-components";

export const WelcomeBox = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 div {
  width: 100%;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;
  background: linear-gradient(
   90deg,
   rgba(2, 0, 36, 1) 0%,
   rgba(94, 94, 190, 1) 35%,
   rgba(61, 169, 191, 1) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
 }
 @keyframes rotate_image {
  100% {
   transform: rotate(360deg);
  }
 }
`;
