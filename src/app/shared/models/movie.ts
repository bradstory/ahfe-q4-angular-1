export interface Movie {
    title:string;
    overview:string;
    poster_path:string;
    rating:number;
    release_date: number;
    vote_average:number;
    id:number;
    genres_ids:number[];
    genres: {
        id:number,
        name:string,
    }[];
    runtime: number;
    tagline: string;
    backdrop_path: string;
}
