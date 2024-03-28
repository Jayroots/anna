import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav >
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <NavLink  to="/">
                        <h2>Accueil</h2>
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/passions">
                        <h2>Passions</h2>
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/creations">
                        <h2>Creations</h2>
                    </NavLink>

                </li>

            </ul>

        </nav>
    );
};

export default NavBar;