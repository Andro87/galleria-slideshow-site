import React from "react";
import styles from "./Slide.module.scss";

//
import View from "svgrs/icon-view-image.svg";
import Painting from "model/Painting";
//
interface Props {
    readonly painting: Painting;
    readonly onShowGallery: () => void;
}

export const Slide: React.FunctionComponent<Props> = props => {
    const { painting, onShowGallery } = props;
    const medium = 670;
    return (
        <div className={styles.embla__slide}>
            <div className={styles.embla__slide_wrap}>
                <div className={styles.painting_img_container}>
                    <div className={styles.painting_img_wrap}>
                        <picture className={styles.painting_img}>
                            <div
                                className={styles.btn_view_image}
                                onClick={() => {
                                    onShowGallery();
                                }}
                            >
                                <span>
                                    <View />
                                </span>
                                VIEW IMAGE
                            </div>

                            <source
                                srcSet={painting.images.hero.large}
                                media={`(min-width:${medium}px)`}
                            />

                            <img src={painting.images.hero.small} alt="" />
                        </picture>
                    </div>
                    <div className={styles.painting_info}>
                        <h1>{painting.name}</h1>
                        <p>{painting.artist.name}</p>
                    </div>

                    <img
                        src={painting.artist.image}
                        alt=""
                        className={styles.artist_img}
                    />
                </div>
                <div className={styles.painting_description_container}>
                    <span>{painting.year}</span>
                    <p>{painting.description}</p>
                    <a href={painting.source}>GO TO SOURCE</a>
                </div>
            </div>
        </div>
    );
};
