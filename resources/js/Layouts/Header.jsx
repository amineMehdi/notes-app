import React, { useState } from "react";
import { TbNotebook } from "react-icons/tb";
import { Link } from "@inertiajs/inertia-react";
import { TbUserCircle } from "react-icons/tb";

function Header({ isLoggedIn, canLogin, canRegister }) {
    const [openMenu, setOpenMenu] = useState(false);

    const MenuItem = ({ children, href, className, method = 'get' }) => (
        <Link
            as="button"
            method={method}
            href={href}
            className={
                `px-4 py-2 hover:bg-pal-yellow-light hover:text-pal-gray hover:shadow-md transition duration-300 ease border border-transparent rounded-full ` +
                className
            }
        >
            {children}
        </Link>
    );

    const Menu = () => (
        <div className="absolute bg-white shadow-md rounded-lg p-4 flex flex-col right-4 -bottom-4 translate-y-full">
            {isLoggedIn && (
                <>
                    <MenuItem href={route("Home")}>
                        Home
                    </MenuItem>
                    <MenuItem href={route("Home")}>
                        Settings
                    </MenuItem>
                    <MenuItem href={route("logout")} method="post">
                        Logout
                    </MenuItem>
                </>
            )}
            {!isLoggedIn &&
             (
                <>
                    {canLogin && <MenuItem href={route("login")}>Login</MenuItem>}
                    {canRegister && <MenuItem href={route("register")}>Register</MenuItem>}
                </>
            )}
        </div>
    );
    return (
        <div className="relative flex justify-between items-center px-12 py-2 bg-gray-100 min-h-[7vh]">
            <Link href={route("Home")}>
                <div className="bg-pal-yellow-light rounded-full p-2 hover:shadow-md">
                    <TbNotebook size={60} color={"#000"} />
                </div>
            </Link>

            <div>
                <button onClick={() => setOpenMenu(!openMenu)}>
                    <TbUserCircle size={40} color={"#202020"} />
                </button>
            </div>
            {openMenu && <Menu />}
        </div>
    );
}

export default Header;
