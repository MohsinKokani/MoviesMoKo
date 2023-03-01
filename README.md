
# MoviesMoKo - React Movie Search App
MoviesMoKo is a React-based movie search app that allows users to search for movies using the Open Movie Database (OMDb) API. This app allows users to search for movies, view movie details.

## Installation
To run this app on your local machine, follow these steps:

1. Clone the repository to your local machine using the following command:
```
git clone https://github.com/MohsinKokani/MoviesMoKo.git
```
2. Install the necessary dependencies using the following command:
```
npm install
```
3. Start the app by running the following command:
```
npm start
```
4. Open your browser and navigate to http://localhost:3000/ to view the app.

## Usage
Once the app is running, you can start searching for movies by typing the movie name in the search bar and just pressing enter key. The app will display a list of movies that match your search query.

You can go further of previous with buttons to navigate through pages.

To view more details about a movie,just hover on the movie poster. This will flip the card and show you the details | Movie title and Type(movie/series).

## Technologies Used
* React
* HTML, CSS
* OMDb API

## API Endpoints
The MoviesMoKo app uses the Open Movie Database (OMDb) API to search for movies. 
The API has the following endpoints:

### Search Endpoint
Endpoint URL:
```
http://www.omdbapi.com/?apikey=<YOUR_API_KEY>&s=<MOVIE_TITLE>&page=<PAGE_NUMBER>

```
Parameters:
| Parameter  | Required  | Description |
| :----------- |:-----------:| -------------:|
| apikey        | Yes       | Your OMDb API key. |
| s          | Yes       | Movie title to search for. |
| page       | No        | Page number to return.| 

## Contributors
It is a very simple app created by Mohsin Kokani. If you find this project helpful, please consider giving it a star.