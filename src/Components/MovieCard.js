import React from "react";
import NullImg from "./Images/ComingSoon.JPG";
export default function MovieCard({ movie }) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="ribbon">
                        <span>{movie.Year}</span>
                    </div>
                    <img src={(movie.Poster !== 'N/A') ? movie.Poster : NullImg} alt="Avatar" style={{ width: "180px", height: "270px" }} />
                </div>
                <div className="flip-card-back">
                    <h4>Title : {movie.Title}</h4>
                    <p>Type : {movie.Type}</p>
                </div>
            </div>
        </div>
    )
}