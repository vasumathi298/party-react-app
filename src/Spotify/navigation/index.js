
import React from "react";
import { Link } from "react-router-dom";
import Login from "../login/index";
import CreateParty from "../create-party/index";
import Signup from "../signup/index";
import { useLocation } from "react-router-dom";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [active] = pathname.split("/");
    const links = ["login", "signup", "create-party", "join"];

    return (
        <div className="list-group">
            {links.map((link) => (
                <Link
                    to={`/Spotify/${link}`}
                    className={`list-group-item text-capitalize ${
                        active === link ? "active" : ""
                    }`}
                    key={link}
                >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
            ))}
        </div>
    );
};

export default NavigationSidebar;
