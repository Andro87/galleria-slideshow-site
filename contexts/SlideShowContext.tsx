import React from "react";
import { createContext } from "react";

interface Props {
    readonly open: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    readonly slideIndex: [number, React.Dispatch<React.SetStateAction<number>>];
    readonly showGallery: [
        boolean,
        React.Dispatch<React.SetStateAction<boolean>>
    ];
}

const SlideShowContext = createContext<Props>({
    open: [false, open => void open],
    slideIndex: [0, slideIndex => void slideIndex],
    showGallery: [false, showGallery => void showGallery]
});

export default SlideShowContext;
