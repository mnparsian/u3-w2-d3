import React, { Component } from "react";
import { Container } from "react-bootstrap"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TvShows extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { movieName } = this.props; 
    fetch(`http://www.omdbapi.com/?apikey=20845d71&s=${movieName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch movies");
        }
      })
      .then((data) => {
        if (data.Search) {
          this.setState({ movies: data.Search });
        } else {
          throw new Error("No movies found");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { movieName } = this.props;

    const sliderSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="color p-3">
        <h2 className="text-white px-4">{`${movieName} Series`}</h2>
        {this.state.movies.length > 0 ? (
          <Container fluid className="px-4">
            <Slider {...sliderSettings}>
              {this.state.movies.map((movie) => (
                <div key={movie.imdbID} className="px-2">
                  {movie.Poster !== "N/A" ? (
                    <img
                      className="movie-poster"
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  ) : (
                    <div
                      className="no-poster"
                      style={{
                        width: "100%",
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#333",
                        borderRadius: "8px",
                      }}
                    >
                      <p className="text-white">No Poster Available</p>
                    </div>
                  )}
                  <p className="text-white text-center mt-2">{movie.Title}</p>
                </div>
              ))}
            </Slider>
          </Container>
        ) : (
          <p className="text-white px-4">Loading...</p> 
        )}
      </div>
    );
  }
}

export default TvShows;
