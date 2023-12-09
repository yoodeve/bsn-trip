import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
 Footer,
 MenuBox,
 NavigationContainer,
 OutletContainer,
 TotalContainer,
} from "./style";
/** @jsxImportSource @emotion/react */

const menuList = [
 { menu: "Home", url: "/" },
 { menu: "First", url: "/first" },
 { menu: "Second", url: "/second" },
 { menu: "Third", url: "/third" },
 { menu: "Forth", url: "/forth" },
];

function Navigation() {
 const { pathname } = useLocation();
 const navigate = useNavigate();
 const moveToMenu = (url) => {
  navigate(url);
 };
 return (
  <>
   <TotalContainer>
    <NavigationContainer>
     {menuList.map((e) => (
      <MenuBox
       className={pathname === e.url && "selected"}
       onClick={() => {
        moveToMenu(e.url);
       }}
      >
       {e.menu}
      </MenuBox>
     ))}
    </NavigationContainer>
    <OutletContainer>
     <Outlet />
    </OutletContainer>
    <Footer>
     <span>모든 일정 유동적</span>
     <span>시간은 넉넉하게 계산했으므로 뜰 가능성 있음</span>
     <span>많이 걸으므로 쉬엄쉬엄 관광할 것</span>
     &copy;한유정 01067581457 janhold@naver.com
    </Footer>
   </TotalContainer>
  </>
 );
}

export default Navigation;
