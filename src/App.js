import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Forth from "./pages/Forth";
import Welcome from "./pages/Welcome";

function App() {
 return (
  <HashRouter>
   <Routes>
    <Route path="/" element={<Navigation />}>
     <Route index element={<Welcome />} />
     <Route path="first" element={<First />} />
     <Route path="second" element={<Second />} />
     <Route path="third" element={<Third />} />
     <Route path="forth" element={<Forth />} />
    </Route>
   </Routes>
  </HashRouter>
 );
}

export default App;
