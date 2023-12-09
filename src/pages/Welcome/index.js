import React, { useEffect, useState } from "react";
import { WelcomeBox } from "./style";

function Welcome(props) {
 return (
  <WelcomeBox>
   <div>
    유징이의 도시 부산에 오신것을
    <br />
    환영합니다.
   </div>
  </WelcomeBox>
 );
}

export default Welcome;
