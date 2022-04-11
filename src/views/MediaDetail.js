import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import background clouds
import Clouds from "components/Clouds.js";

function MediaDetail() {
  return (
    <>
      <Clouds className="flex py-4 md:py-16 justify-center bg-sky-100 h-screen">
        <div class="px-12 py-8 m-8 text-left bg-white shadow-lg rounded-md h-fit"></div>
      </Clouds>
    </>
  );
}

export default MediaDetail;
