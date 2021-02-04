import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-title">
                    {/* La República | Videos */}
                    <img src="https://cdn.larepublica.pe/images/content/default/logo-lr.svg" alt=""/>
                    </div>
                <ul className="header container">
                    <li className="header-item">
                        <NavLink activeClassName="active" exact to="/">
                            Noticias
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink activeClassName="active" exact to="/home">
                            Política
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink exact to="/" activeClassName="active">
                            Sociedad
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink exact to="/" activeClassName="active">
                            Mundo
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink exact to="/" activeClassName="active">
                            Turismo
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink exact to="/" activeClassName="active">
                            Recetas
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink exact to="/" activeClassName="active">
                            Videojuego
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink exact to="/" activeClassName="active">
                            Tecnología
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink exact to="/" activeClassName="active">
                            Espectáculos
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink exact to="/" activeClassName="active">
                            Cine y Series
                        </NavLink>
                    </li>
                </ul>
            </header>
            <style jsx="true">{`
                .header-title{
                    display: flex;
                    background-color: red;
                    color: #fff;
                    height: 75px;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                }
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
                .header {
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
                .header:before {
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
                    padding: 8px 13px;
                }
                .header-item a {
                    font-size: 12px;
                    color: #fff;
                    text-decoration: none;
                }
                .header-item a.active {
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};
export default Header; // importante <--
