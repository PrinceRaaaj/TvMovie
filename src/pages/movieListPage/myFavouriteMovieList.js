import React from 'react'
import "./movieListPage.css"
import Card from "../../components/cards/cards"
import { useSelector } from "react-redux"

const MyFavouriteMovieListPage = () => {

    const favouriteMovies = useSelector(state => state.favouriteMovies)
    
    return (
        <div className="movie_group">
            <h2 className="list_title">My Favourite Movies</h2>
            <div className="movies_card">
                {
                    favouriteMovies.map(movie => <Card movie={movie} />)
                }
            </div>
        </div>
    );
};

export default MyFavouriteMovieListPage;