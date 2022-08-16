import React, { useState, useContext, useEffect, useCallback } from "react";
import styles from "./SlideShow.module.scss";
import { AnimatePresence } from "framer-motion";
//
import useEmblaCarousel from "embla-carousel-react";
import { Slide, SlideFooter, Galleria } from "components";
import { data } from "data/data";
import SlideShowContext from "contexts/SlideShowContext";
//
export const SlideShow: React.FunctionComponent = () => {
    const context = useContext(SlideShowContext);
    const [paintingPosition, setPaintingPosition] = context.slideIndex;
    const [showGallery, setShowGallery] = context.showGallery;
    const [emblaRef, emblaApi] = useEmblaCarousel({
        draggable: false,
        startIndex: paintingPosition
    });
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);

    //for the scroll bar

    const scrollLength = useCallback(() => {
        if (!emblaApi) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [emblaApi, setScrollProgress]);

    //for enabled/disabled the scroll btn in footer//

    useEffect(() => {
        if (!emblaApi) return;
        setNextBtnEnabled(emblaApi.canScrollNext());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        scrollLength();
    }, [emblaApi, paintingPosition, scrollLength]);

    //
    return (
        <>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {data.map((painting, index) => (
                            <Slide
                                key={index}
                                painting={painting}
                                onShowGallery={() => setShowGallery(true)}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.embla_progress}>
                    <div
                        className={styles.embla_progress_bar}
                        style={{
                            transform: `translateX(${scrollProgress}%)`
                        }}
                    ></div>
                </div>

                <SlideFooter
                    onPrev={() => {
                        emblaApi.scrollPrev();
                        setPaintingPosition(emblaApi.selectedScrollSnap());
                    }}
                    disabledPrev={!prevBtnEnabled}
                    onNext={() => {
                        emblaApi.scrollNext();
                        setPaintingPosition(emblaApi.selectedScrollSnap());
                    }}
                    disabledNext={!nextBtnEnabled}
                    painting={data[paintingPosition]}
                />
            </div>
            <AnimatePresence initial={false}>
                {showGallery && (
                    <Galleria
                        painting={data[paintingPosition]}
                        onShowGallery={() => setShowGallery(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
