import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/"><img className="logo" src={logo}/></Link>
                    </div>

                    {(toggleMenu || screenWidth > 700) && (
                    <ul className="nav-links">
                        <li>
                            <Link to="/">To-Watch List</Link>
                        </li>

                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>

                        <li>
                            <Link to="/favourites">Favourites</Link>
                        </li>

                        <li>
                            <Link to="/add" className="btn btn-main">
                                Add
                            </Link>
                        </li>
                    </ul>
                    )}
                    <button onClick={toggleNav} className="btn-burger">
                        <i className="fa-fw fa fa-bars"></i>
                    </button>
                </div>
            </div>

        </header>
    );
};