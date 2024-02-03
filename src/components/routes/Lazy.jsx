import React from "react";
import "../styles/Loading.css";
function Lazy() {
  return (
    <>
      <div className="route-lazy-parent h-screen flex justify-center items-center">
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp" alt="imglazy"/>
      </div>
    </>
  );
}

export default Lazy;