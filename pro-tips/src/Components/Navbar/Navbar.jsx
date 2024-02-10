// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.module.css';
import {Link} from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
        <div className={styles["logo-container"]}>
            <Link to={"/"}>
                <img
                    className={styles["logo"]}
                    src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"
                    alt="logo"
                />
            </Link>
        </div>
        <div className={styles["nav-links-container"]}>
            <ul>
                <h3>
                    <Link className={styles["link"]} to={"/contact"}>
                        Contact
                    </Link>
                </h3>
                <h3>
                    <Link className={styles["link"]} to={"/register"}>
                        Register
                    </Link>
                </h3>
            </ul>
        </div>
    </div>
);
}

export default Navbar
