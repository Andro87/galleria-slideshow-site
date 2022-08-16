import React, { useContext } from "react";
import styles from "./Painting.module.scss";
import SlideShowContext from "contexts/SlideShowContext";
interface Props {
    readonly thumbnail: string;
    readonly name: string;
    readonly artist: string;
    readonly position?: number;
}
export const Painting: React.FunctionComponent<Props> = props => {
    const { thumbnail, name, artist, position } = props;
    const context = useContext(SlideShowContext);
    const [open, setOpen] = context.open;
    const [paintingPosition, setPaintingPosition] = context.slideIndex;
    return (
        <div
            className={styles.painting_container}
            onClick={() => {
                setOpen(true);
                setPaintingPosition(position);
            }}
        >
            <img src={thumbnail} alt={name} className={styles.image} />
            <div className={styles.painting_info}>
                <span> {name}</span>
                <p> {artist}</p>
            </div>
        </div>
    );
};
