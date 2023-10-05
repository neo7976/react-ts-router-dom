import React, {FC} from "react";

export const Navbar: FC = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React + TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Список дел</a></li>
                    <li><a href="/">Информация</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;