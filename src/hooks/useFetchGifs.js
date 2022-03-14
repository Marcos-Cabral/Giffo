import { useState, useEffect } from "react";
import { getGifsByCategory } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    console.log(category);
    useEffect(() => {
        getGifsByCategory(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category]);


    return state;
}
