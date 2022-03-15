import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Watched Horrors</h1>

                    <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Horror" : "Horrors"}
          </span>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                        {watched.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} type="watched" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No horrors in your list! Add some!</h2>
                )}
            </div>
        </div>
    );
};