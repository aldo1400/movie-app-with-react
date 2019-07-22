import React, { Component } from 'react';

import Movie from './Movie';

class MoviesList extends Component {
state={
  movies: [],
}

async componentDidMount() {
  try {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=63222e52f9045dc57b20e736f605be66&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const movies = await res.json();
    this.setState({
      movies: movies.results,
    });
  } catch (e) {
    console.log(e);
  }
}


render() {
  return (
    <div>
      {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
}
}


export default MoviesList;
