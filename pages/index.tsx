import Head from "next/head";
import styles from "../styles/Home.module.scss";

import SlideShowContext from "contexts/SlideShowContext";
import { Header, Main } from "components";
import { useState } from "react";
//

//
export default function Home() {
    const open = useState(false);
    const slideIndex = useState(0);
    const showGallery = useState(false);

    const [gallery, setGallery] = showGallery;
    return (
        <SlideShowContext.Provider value={{ open, slideIndex, showGallery }}>
            <div
                className={`${styles.home_container} ${
                    gallery ? styles.home_container_background : null
                }`}
            >
                <Head>
                    <title>Frontend Mentor | Galleria slideshow</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/assets/favicon-32x32.png" />
                </Head>
                <Header />
                <Main />
            </div>
        </SlideShowContext.Provider>
    );
}
