import React, { useContext } from "react";
import styles from "./Header.module.scss";
//
import SlideShowContext from "contexts/SlideShowContext";
//
export const Header: React.FunctionComponent = () => {
    const context = useContext(SlideShowContext);
    const [open, setOpen] = context.open;

    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>
                <img src="./assets/logo.svg" alt="galleria" />
            </a>

            <button
                type="button"
                title="slide show"
                className={styles.btn_slide_show}
                onClick={() => {
                    setOpen(!open);
                    console.log(open);
                }}
            >
                {!open ? "START SLIDESHOW" : "STOP SLIDESHOW"}
            </button>
        </header>
    );
};
