import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <header>
                <ul className="header container">
                    <li className="header-item">
                        <Link to="/">Noticias</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/home">Política</Link>
                    </li>
                    <li className="header-item">
                        <Link>Sociedad</Link>
                    </li>
                    <li className="header-item">
                        <Link>Mundo</Link>
                    </li>
                    <li className="header-item">
                        <Link>Turismo</Link>
                    </li>
                    <li className="header-item">
                        <Link>Recetas</Link>
                    </li>
                    <li className="header-item">
                        <Link>Videojuego</Link>
                    </li>
                    <li className="header-item">
                        <Link>Tecnología</Link>
                    </li>
                    <li className="header-item">
                        <Link>Espectáculos</Link>
                    </li>
                    <li className="header-item">
                        <Link>Cine y Series</Link>
                    </li>
                </ul>
            </header>
            <style jsx="true">{`
                .header {
                    margin: 0 auto;
                    padding: 0;
                    justify-content: center;
                    list-style: none;
                    position: relative;
                    overflow-x: auto;
                    text-align: center;
                    white-space: nowrap;
                }
                header {
                    position: relative;
                }
                .header::-webkit-scrollbar {
                    width: 4px; /* width of the entire scrollbar */
                }

                .header::-webkit-scrollbar-track {
                    background: #252525; /* color of the tracking area */
                }

                .header::-webkit-scrollbar-thumb {
                    background-color: #333; /* color of the scroll thumb */
                }
                header:before {
                    width: 100vw;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    margin-left: -50vw;
                    background: #313131;
                    height: 100%;
                    content: "";
                    z-index: -1;
                }
                .header-item {
                    display: inline-block;
                    padding: 15px 13px;
                }
                .header-item a {
                    font-size: 12px;
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
};
export default Header; // importante <--
