import React, { useEffect, useState } from "react";
import axiosClient from "config/axios";

import CarouselContent from "components/CarouselContent";
// import background clouds
import Clouds from "components/Clouds.js";

function Home() {
  const [content, setContent] = useState([]);
  const [mediaType, setMediaType] = useState("all");

  useEffect(() => {
    axiosClient
      .get("/contenidos?mediaType=" + mediaType)
      .then((response) => {
        if (response.status === 200) {
          setContent(response.data.contenidos);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Clouds className="flex py-4 md:pt-4 px-16 justify-center bg-sky-100 h-screen">
        <div className=" px-4 lg:px-56 w-screen ">
          <CarouselContent
            headerTitle={"Top Movies and TV Shows"}
            content={content}
          />
        </div>
      </Clouds>
    </>
  );
}

export default Home;
