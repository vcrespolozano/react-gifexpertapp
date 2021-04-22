import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const { data:images, loading } = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            { loading ? <p>Loading</p>:null }
            {
                images.map( (gif) => {
                    return <GifGridItem key={gif.id} title={gif.title} img={gif.url} />;
                })
            }
        </>
    )
}
