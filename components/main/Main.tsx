import React, { useContext } from "react";
import styles from "./Main.module.scss";
//
import { Thumbnail, SlideShow } from "components";
import SlideShowContext from "contexts/SlideShowContext";
//
export const Main: React.FunctionComponent = () => {
    const context = useContext(SlideShowContext);
    const [open, setOpen] = context.open;

    return (
        <main className={styles.main}>
            {!open ? <Thumbnail /> : <SlideShow />}
        </main>
    );
};
