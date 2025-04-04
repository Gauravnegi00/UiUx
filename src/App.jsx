import React from "react";
import UiUx from "./Component/Uiux";
import Chatbox from "./Component/Chatbox";
import LoginPage from "./Component/LoginPage";
import Marque from "./Component/Marque";
import ImgSlider from "./Component/ImgSlider";
const App = () => {
  return (
    <div>
      {/* <Chatbox/> */}
      {/* <LoginPage/> */}
      <UiUx />
      <Marque/>
      <ImgSlider/>
    </div>
  );
};

export default App;
