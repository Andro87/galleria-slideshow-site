import React from "react";
import styles from "./Galleria.module.scss";
import { motion } from "framer-motion";
//
import Painting from "model/Painting";
//
interface Props {
    readonly painting: Painting;
    readonly onShowGallery: () => void;
}

export const Galleria: React.FunctionComponent<Props> = props => {
    const { painting, onShowGallery } = props;

    return (
        <motion.div
            className={styles.image_container}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { ease: "easeIn" }
            }}
            exit={{ opacity: 0 }}
        >
            <button
                type="button"
                title="close"
                className={styles.btn_close}
                onClick={() => onShowGallery()}
            >
                CLOSE
            </button>
            <img src={painting.images.gallery} alt="" />
        </motion.div>
    );
};
