/*interface Painting {
    readonly img_large: string;
    readonly img_small: string;
    readonly painting_name: string;
    readonly artist_name: string;
    readonly artist_img: string;
    readonly year: number;
    readonly description: string;
    readonly source: string;
}

export default Painting;
*/

interface Artist {
    readonly image: string;
    readonly name: string;
}

interface Hero {
    readonly small: string;
    readonly large: string;
}

interface Image {
    readonly thumbnail: string;
    readonly hero: Hero;
    readonly gallery: string;
}

interface Painting {
    readonly id: number;
    readonly name: string;
    readonly year: number;
    readonly description: string;
    readonly source: string;
    readonly artist: Artist;
    readonly images: Image;
}

export default Painting;
