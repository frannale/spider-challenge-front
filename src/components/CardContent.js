import React, { useEffect, useState } from "react";

function CardContent(props) {
  return (
    <>
      <div className=" flex flex-col bg-white rounded-lg p-4 w-60 ">
        <img className=" rounded-md h-64" src={props.content.poster} />
        <p className="text-lg font-semibold text-purple-900 mt-2 px-2 h-12 ">
          {props.content.nombre}
        </p>
        <p className="text-md font-semibold text-gray-600 mt-1 px-2 ">
          {props.content.tipo}
        </p>
        <p className="text-md font-semibold text-black mt-1 px-2 ">
          {" no olvides genero xD"}
        </p>
      </div>
    </>
  );
}

export default CardContent;
