import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Favourites = () => {
    const { favourites } = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Favourite Horrors</h1>

                    <span className="count-pill">
            {favourites.length} {favourites.length === 1 ? "Horror" : "Horrors"}
          </span>
                </div>

                {favourites.length > 0 ? (
                    <div className="movie-grid">
                        {favourites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} type="favourites" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No horrors in your list! Add some!</h2>
                )}
            </div>
        </div>
    );
};