import React from "react";
import styles from "./Thumbnail.module.scss";
import { motion } from "framer-motion";
//
import { Painting } from "components";
import { thumbnailAnimation } from "motion/framer";
//
export const Thumbnail: React.FunctionComponent = () => {
    return (
        <motion.div
            className={styles.thumbnail_container}
            variants={thumbnailAnimation}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.group_wrap}>
                <Painting
                    thumbnail="./assets/starry-night/thumbnail.jpg"
                    name="Starry Night"
                    artist="Vincent Van Gogh"
                    position={0}
                />
                <Painting
                    thumbnail="./assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg"
                    name="The Storm on the Sea of Galilee"
                    artist="Rembrandt"
                    position={4}
                />
                <Painting
                    thumbnail="./assets/lady-with-an-ermine/thumbnail.jpg"
                    name="Lady with an Ermine"
                    artist="Leonardo da Vinci"
                    position={8}
                />
                <Painting
                    thumbnail="./assets/the-boy-in-the-red-vest/thumbnail.jpg"
                    name="The Boy in the Red Vest"
                    artist="Paul Cézanne"
                    position={11}
                />
            </div>
            <div className={styles.group_wrap}>
                <Painting
                    thumbnail="./assets/girl-with-pearl-earring/thumbnail.jpg"
                    name="Girl with a Pearl Earring"
                    artist="Johannes Vermeer"
                    position={1}
                />
                <Painting
                    thumbnail="./assets/the-great-wave-off-kanagawa/thumbnail.jpg"
                    name="The Great Wave off Kanagawa"
                    artist="Hokusai"
                    position={5}
                />
                <Painting
                    thumbnail="./assets/the-night-cafe/thumbnail.jpg"
                    name="The Night Café"
                    artist="Vincent Van Gogh"
                    position={9}
                />
                <Painting
                    thumbnail="./assets/arnolfini-portrait/thumbnail.jpg"
                    name="Arnolfini Portrait"
                    artist="Jan van Eyck"
                    position={12}
                />
            </div>
            <div className={styles.group_wrap}>
                <Painting
                    thumbnail="./assets/guernica/thumbnail.jpg"
                    name="Guernica"
                    artist="Pablo Picasso"
                    position={2}
                />
                <Painting
                    thumbnail="./assets/van-gogh-self-portrait/thumbnail.jpg"
                    name="Van Gogh Self-portrait"
                    artist="Vincent Van Gogh"
                    position={6}
                />
                <Painting
                    thumbnail="./assets/mona-lisa/thumbnail.jpg"
                    name="Mona Lisa"
                    artist="Leonardo da Vinci"
                    position={13}
                />
            </div>
            <div className={styles.group_wrap}>
                <Painting
                    thumbnail="./assets/penitent-magdalene/thumbnail.jpg"
                    name="Penitent Magdalene"
                    artist="Artemisia Gentileschi"
                    position={3}
                />

                <Painting
                    thumbnail="./assets/the-sleeping-gypsy/thumbnail.jpg"
                    name="The Sleeping Gypsy"
                    artist="Henri Rousseau"
                    position={7}
                />
                <Painting
                    thumbnail="./assets/the-basket-of-apples/thumbnail.jpg"
                    name="The Basket of Apples"
                    artist="Paul Cézanne"
                    position={10}
                />
                <Painting
                    thumbnail="./assets/the-swing/thumbnail.jpg"
                    name="The Swing"
                    artist="Jean-Honoré Fragonard"
                    position={14}
                />
            </div>
        </motion.div>
    );
};
