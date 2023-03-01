import React, { useState, useEffect } from "react";
import Spinner from "./Components/Images/Spinner";
import MovieCard from "./Components/MovieCard";
import DarkModeToggle from "./Components/DarkModeToggle";
import './App.css';

const API_KEY=process.env.REACT_APP_API_KEY;
export default function App() {

  const [searched, setSearched] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(
    [
      {
        "Title": "The Amazing Spiderman 2 Webb Cut",
        "Year": "2021",
        "imdbID": "tt18351128",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
      },
      {
        "Title": "The Avengers",
        "Year": "2012",
        "imdbID": "tt0848228",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      },
      {
        "Title": "Santa Claus Is Comin' to Town",
        "Year": "1970",
        "imdbID": "tt0066327",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2NjMxMTU2Ml5BMl5BanBnXkFtZTcwNjg4NTYyMQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Pathaan",
        "Year": "2023",
        "imdbID": "tt12844910",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg"
      },
      {
        "Title": "Doraemon: New Nobita's Great Demon-Peko and the Exploration Party of Five",
        "Year": "2014",
        "imdbID": "tt3949650",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTU5NmNhOWUtM2FkNS00MGQ2LWE2YWItODhkNGEwOTMwZGNhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_SX300.jpg"
      },
      {
        "Title": "Jumanji: The Next Level",
        "Year": "2019",
        "imdbID": "tt7975244",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Sholay",
        "Year": "1975",
        "imdbID": "tt0073707",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGZiM2IwODktNTdiMC00MGU1LWEyZTYtOTk4NTkwYmJkNmI1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        "Title": "Titanic",
        "Year": "1997",
        "imdbID": "tt0120338",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
      },
      {
        "Title": "3 Idiots",
        "Year": "2009",
        "imdbID": "tt1187043",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        "Title": "M.S. Dhoni: The Untold Story",
        "Year": "2016",
        "imdbID": "tt4169250",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
      }
    ]
  );


  const fetchMovies = async (n) => {
    if (searched === '') return;
    if (!navigator.onLine) return;
    setLoading(true);
    await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searched}&page=${n}`)
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        }
        return { "Response": "False", "Error": "Movie not found!" };
      }).then((responseJson) => {
        if (responseJson.Response === 'False') {
          setMovies([]);
          return;
        }
        if (n === 1) document.querySelector('.prev').style.visibility = 'hidden';
        else document.querySelector('.prev').style.visibility = 'visible';
        if (Math.ceil(responseJson.totalResults / 10) === page) {
          document.querySelector('.next').style.visibility = 'hidden';
        }
        else {
          document.querySelector('.next').style.visibility = 'visible';
        }
        setMovies(responseJson.Search);
      }).catch((e) => {
        console.log("mohsin")
      })
    setLoading(false);
  }
  useEffect(() => {
    setPage(1)
    fetchMovies(1);
    // eslint-disable-next-line
  }, [searched]);
  useEffect(() => {
    fetchMovies(page);
    // eslint-disable-next-line
  }, [page]);

  const handleTyping = (e) => {
    if (e.keyCode === 13) {
      setSearched(e.target.value);
      e.target.blur();
    }
  }
  const changePage = (n) => {
    if (n === 1) document.querySelector('.prev').style.visibility = 'hidden';
    else document.querySelector('.prev').style.visibility = 'visible';
    setPage(n);
  }
  return (
    <>
      <nav>
        <div className="mainName">
          M
          <i className="fa-solid fa-magnifying-glass fa-xs"></i>
          viesMoKo
          <DarkModeToggle />
        </div>
        <input autoComplete="off" placeholder='Search...' type="text" onKeyUp={handleTyping} />
      </nav>
      {
        !navigator.onLine &&
        <h4>You are Offline</h4>
      }
      {
        navigator.onLine && searched !== '' && <h3>Results for - <span>{searched}</span></h3>
      }
      <div className="moviesArea">
        {
          loading && <Spinner />
        }
        {
          !loading &&
          movies?.length === 0 &&
          <h2>No Movies Found</h2>
        }
        {
          !loading &&
          movies?.map((movie, idx) => {
            return (
              <MovieCard key={idx} movie={movie} />
            )
          })
        }
      </div>
      <div className="prevNext">
        <i className="fa-solid fa-circle-arrow-left prev" onClick={() => { changePage(page - 1) }}></i>
        <i className="fa-solid fa-circle-arrow-right next" onClick={() => { changePage(page + 1) }}></i>
      </div>
    </>
  )
}