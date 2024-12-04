import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap"; 
import { Link } from "react-router-dom";

class Gallery extends Component {
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
        this.setState({ movies: data.Search });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.movies); 
    const { movieName } = this.props;

    return (
      <div className="color p-3 ">
        <h2 className="text-white px-4">{`${movieName} series`}</h2>
        {this.state.movies.length > 0 ? (
          <Container fluid className="px-4">
            <Row>
              {this.state.movies.slice(0, 6).map((movie) => (
                
                <Col key={movie.imdbID} xs={12} sm={6} md={4} xl={2}>
                  <Image className="movie-poster" src={movie.Poster} alt={movie.Title} rounded fluid  />
                  <p className="text-white text-center">{movie.Title}</p>
                </Col>
                </Link>
              ))}
            </Row>
          </Container>
        ) : (
          <p className="text-white">Loading...</p> 
        )}
      </div>
    );
  }
}

export default Gallery;
