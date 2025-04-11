import React, { useState, useEffect } from "react";
import UiUx from "./Component/Uiux";
import Marque from "./Component/Marque";
import ImgSlider from "./Component/ImgSlider";
import MobileUiUx from "./Component/MobileUiUx";
import WebsiteUiUx from "./Component/WebsiteUiUx";
import Prototype from "./Component/Prototype";
import Loader from "./Component/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UiUx />
          <Marque />
          <MobileUiUx />
          {/* <WebsiteUiUx /> */}
          {/* <Prototype /> */}
          {/* <ImgSlider /> */}
        </>
      )}
    </div>
  );
};

export default App;
