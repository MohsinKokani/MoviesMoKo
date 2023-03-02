let searched = "";
let page = 1;
let loading = false;
let movies = [];
function handleTyping(event) {
    // console.log(event)
    if (event.keyCode === 13) {
        let movieArea = document.querySelector('.moviesArea');
        movieArea.innerHTML='<img src="assets/LoadingGif.gif" alt="Loading"/>';
        searched = event.target.value;
        page = 1;
        fetchMovies(page);
        event.target.blur();
    }
}
const changePage = (n) => {
    if (n === 1) document.querySelector('.prev').style.visibility = 'hidden';
    else document.querySelector('.prev').style.visibility = 'visible';
    page = n;
}
let lightArr = ['--lightBG', '--lightTextColor', '--lightColor1', '--lightColor2', '--lightColor3', '--lightColor4']
let lightColor = ['#fbff87', '#333333', '#F44336', '#ffe100', '#db7120', '#2196F3']
let darkArr = ['--darkBG', '--darkTextColor', '--darkColor1', '--darkColor2', '--darkColor3', '--darkColor4']
let darkColor = ['#9000ff', '#FFFFFF', '#FF4081', '#ffe100', '#8BC34A', '#ffe100']


function toggle() {
    let root = document.querySelector(':root');
    let rootStyle = getComputedStyle(root);
    if (rootStyle.getPropertyValue('--lightBG').trim() === '#fbff87') {
        //light mode to dark
        for (let i = 0; i < lightArr.length; i++) {
            const lightProp = lightArr[i];
            const lightValue = lightColor[i];
            const darkProp = darkArr[i];
            const darkValue = darkColor[i];
            let tmp;
            root.style.setProperty(lightProp, darkValue);
            root.style.setProperty(darkProp, lightValue);
            tmp = lightColor[i];
            lightColor[i] = darkColor[i];
            darkColor[i] = tmp;
        }
    }
    else {
        for (let i = 0; i < lightArr.length; i++) {
            const lightProp = lightArr[i];
            const lightValue = lightColor[i];
            const darkProp = darkArr[i];
            const darkValue = darkColor[i];
            let tmp;
            root.style.setProperty(lightProp, lightValue);
            root.style.setProperty(darkProp, darkValue);
            tmp = lightColor[i];
            lightColor[i] = darkColor[i];
            darkColor[i] = tmp;
        }
    }
}

const fetchMovies = async (n) => {
    if (searched === '') return;
    // if (!navigator.onLine) return;
    loading = (true);
    await fetch(`https://www.omdbapi.com/?apikey=db35262f&s=${searched}&page=${n}`)
        .then((Response) => {
            if (Response.ok) {
                return Response.json();
            }
            return { "Response": "False", "Error": "Movie not found!" };
        }).then((responseJson) => {
            if (responseJson.Response === 'False') {
                movies = [];
                document.querySelector('.moviesArea').innerHTML="No movies found";
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
            movies = (responseJson.Search);
            updateMoviesArea();
        }).catch((e) => {
            console.log(e)
        })
    loading = (false);
}
function updateMoviesArea() {
    let movieArea = document.querySelector('.moviesArea');
    let newMoviesArea = document.createElement('div');
    newMoviesArea.className = 'moviesArea'
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        let card = document.createElement('div');
        card.className = "flip-card"
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="ribbon">
                        <span>${movie.Year}</span>
                    </div>
                    <img src=${(movie.Poster!='N/A')?movie.Poster:"assets/ComingSoon.JPG"} style=" width: 180px; height: 270px" }} />
                </div>
                <div class="flip-card-back">
                    <h4>Title : ${movie.Title}</h4>
                    <p>Type : ${movie.Type}</p>
                </div>
            </div>
        `;
        newMoviesArea.appendChild(card);
    }
    movieArea.innerHTML = newMoviesArea.innerHTML;
}
const prevclick = () => {
    let movieArea = document.querySelector('.moviesArea');
    movieArea.innerHTML='<img src="assets/LoadingGif.gif" alt="Loading"/>';
    page-=1;
    if (page === 1) document.querySelector('.prev').style.visibility = 'hidden';
    else document.querySelector('.prev').style.visibility = 'visible';
    fetchMovies(page);
}
const nextclick = () => {
    let movieArea = document.querySelector('.moviesArea');
    movieArea.innerHTML='<img src="assets/LoadingGif.gif" alt="Loading"/>';
    page+=1;
    fetchMovies(page);
}