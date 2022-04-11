import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo
import MovieLogo from "assets/MovieLogo.svg";

// import background clouds
import Clouds from "components/Clouds.js";

function Login() {
  return (
    <>
      <Clouds className="flex py-4 md:py-16 justify-center bg-sky-100 h-screen">
        <div class="px-12 py-8 m-8 text-left bg-white shadow-lg rounded-md h-fit">
          <div class="flex justify-center items-center">
            <img class=" h-16 w-16" src={MovieLogo} alt="Movie Logo" />
          </div>
          <h3 class="text-2xl font-bold text-center mt-2">Inicio de sesión</h3>
          <hr />
          <form action="">
            <div class="mt-4">
              <div>
                <label class="block">Nombre de usuario</label>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Contraseña</label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="flex items-baseline justify-between gap-3">
                <button class="px-5 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 font-medium">
                  Iniciar sesión
                </button>
                <Link
                  to={"/register"}
                  id="link_register_from_login"
                  class="text-sm text-blue-600 hover:underline font-medium"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Clouds>
    </>
  );
}

export default Login;
