import "./Navigation.scss";

import telegramIcon from "../../images/telegram-icon.png";

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <h3>Egor Gavrilov</h3>

                <ul className="navigation">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Work</a>
                    </li>
                </ul>

                <ul className="social">
                    <li>
                        <a href="https://t.me/egorkazabey">
                            <img src={telegramIcon} alt="" />
                        </a>
                    </li>
                    {/* <li>
                        <a href="">
                            <img src={telegramIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={telegramIcon} alt="" />
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
