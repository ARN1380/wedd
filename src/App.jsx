import React from "react";
import image from "./assets/react.svg";
import weddPic from "./assets/wedd.png";
import BackgroundVid from "./assets/unblur-trim.mp4";

const App = () => {
  // const [anything] = useSound(mySound)

  return (
    <div className="w-screen h-screen bg-blue-950 flex items-center justify-center flex-col">
      <div className="min-h-screen relative overflow-hidden">
        <video className="absolute left-0 top-0 w-full h-full object-cover" autoPlay >
          <source src={BackgroundVid} type="video/mp4" />
        </video>
        <div className="backdrop-blur-md backdrop-brightness-50 w-screen h-screen text-white flex items-center justify-center">
          <img className="h-[75vh] min-w-fit animate-fade" src={weddPic} alt="not found" />
        </div>
      </div>

      {/* <div className="max-w-96 backdrop-blur-sm z-10">
      </div> */}
    </div>
  );
};

export default App;
