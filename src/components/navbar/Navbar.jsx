import { useState } from "react";
import { Link } from 'react-router-dom';
import "./navbar.scss";

function Navbar() {
    const [open, setOpen] = useState(false);

    const user = TextTrackCueList;

    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="FchrlfrEstate Logo" />
                    <span>FchrlfrEstate</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/agents">Agents</Link>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img src="/paril3.jpg" alt="" />
                        <span>Fachril Firmansyah</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/signin">Sign in</Link>
                        <Link to="/signup" className="register">
                            Sign up
                        </Link>
                    </>
                )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="Menu Icon" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/signin">Sign in</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
