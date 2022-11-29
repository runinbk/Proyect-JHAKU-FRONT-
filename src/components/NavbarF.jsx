import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavbarF = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            Jhaku-Panaderia
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Jhaku-Panaderia
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/UserPage"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Usuarios
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link
                        to="/UserPage"
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        Usuarios
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/EmployPage"
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        Empleados
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ventas
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link
                        to="/ClientPage"
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        Clientes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ProductPage"
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        Productos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/OrderPage"
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        Pedidos
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <button class="btn btn-success" type="submit">
                  LogOut
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
