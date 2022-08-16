import React from "react";
import styles from "./SlideFooter.module.scss";
//
import Prev from "svgrs/icon-back-button.svg";
import Next from "svgrs/icon-next-button.svg";
//
import Painting from "model/Painting";

//
interface Props {
    readonly onPrev: () => void;
    readonly onNext: () => void;
    readonly painting: Painting;
    readonly disabledPrev: boolean;
    readonly disabledNext: boolean;
}

//
export const SlideFooter: React.FunctionComponent<Props> = props => {
    const { onPrev, onNext, painting, disabledPrev, disabledNext } = props;

    return (
        <div className={styles.slide_footer}>
            <div className={styles.slide_footer_wrap}>
                <div className={styles.slide_info}>
                    <h2>{painting.name}</h2>
                    <p>{painting.artist.name}</p>
                </div>
                <div className={styles.btn_wrap}>
                    <button
                        type="button"
                        title="prev"
                        className={styles.btn}
                        onClick={() => onPrev()}
                        disabled={disabledPrev}
                    >
                        <Prev />
                    </button>
                    <button
                        type="button"
                        title="next"
                        className={styles.btn}
                        onClick={() => onNext()}
                        disabled={disabledNext}
                    >
                        <Next />
                    </button>
                </div>
            </div>
        </div>
    );
};
