import React from "react";
import image from "./assets/react.svg";
import weddPic from "./assets/wedd-comp.jpg";
import BackgroundVid from "./assets/unblur-trim.mp4";

const App = () => {
  

  return (
    <div className="w-screen h-screen bg-blue-950 flex items-center justify-center flex-col">
      <div className="min-h-screen relative overflow-hidden">
        <video className="absolute left-0 top-0 w-full h-full object-cover" autoPlay muted >
          <source src={BackgroundVid} type="video/mp4" />
        </video>
        <div className="backdrop-blur-md backdrop-brightness-50 w-screen h-screen text-white flex items-center justify-center">
          <img className="h-full py-20 px-4 min-w-fit animate-fade" src={weddPic} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default App;
