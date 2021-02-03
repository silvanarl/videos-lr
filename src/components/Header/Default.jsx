import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <header>
                <ul className="header container">
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }} to="/">
                            Noticias
                        </Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }} to="/home">
                            Política
                        </Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }}>Sociedad</Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }}>Mundo</Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }}>Turismo</Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }}>Recetas</Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }}>Videojuego</Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }}>Tecnología</Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }}>Espectáculos</Link>
                    </li>
                    <li className="header-item">
                        <Link activeStyle={{ fontWeight: "bold" }}>Cine y Series</Link>
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
                    display: none;
                }

                .header::-webkit-scrollbar-track {
                    background: #252525; /* color of the tracking area */
                }

                .header::-webkit-scrollbar-thumb {
                    background-color: #000; /* color of the scroll thumb */
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
