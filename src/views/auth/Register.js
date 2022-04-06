import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div class="flex  py-4 md:py-16 justify-center bg-sky-100 h-screen">
        <div class="px-12 py-8 m-8 text-left bg-white shadow-lg rounded-md h-fit">
          <div class="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-20 h-20 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center">Registrarse</h3>
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
              <div class="mt-4">
                <label class="block">Reingrese contraseña</label>
                <input
                  type="password"
                  placeholder="Reingrese contraseña"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="flex items-baseline justify-between gap-2">
                <button class="px-5 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 font-medium">
                  Crear usuario
                </button>
                <Link
                  to={"/login"}
                  id="link_login_from register"
                  class="text-sm text-blue-600 hover:underline font-medium"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
