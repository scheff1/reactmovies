import React from "react";
import { Movies } from '../components/Movies';
import { Search } from "../components/search";

class Main extends React.Component {
    state = {
        movies: [],
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=c9cda8a1&s=bojack')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    searchMovies = (str, type = "all") => {
        fetch(
            `https://www.omdbapi.com/?apikey=99bdc200&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    render() {
        const { movies, loading } = this.state;

        return (
        <main className="container content">
            < Search searchMovies={this.searchMovies} />
            {loading ? (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div> //- preloader
            ) : <Movies movies={this.state.movies}/>}
        </main>
        )
    }
}

export { Main };