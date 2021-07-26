import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {
    const filmNodes = films.map((film) => {
        return (
            <>
            <ul>
                <li><a href ={film.url} ><Film name = {film.name} key = {film.id}/></a></li>
            </ul>
            
            </>
        )
    })
    return (
        <>
        {filmNodes}
        </>
    )
}

export default FilmList;