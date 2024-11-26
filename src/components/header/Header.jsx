import React from "react";
import "./Header.scss";
import photo from "../../images/photo.png";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="right-side">
                    <p>
                        Hello, I’m Egor, <h1>Front-End Developer</h1>
                        based in Czech Republic.
                    </p>
                    <button>Resume</button>
                </div>
                <div className="left-side">
                    <img src={photo} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
