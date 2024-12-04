import { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log("Params:", params.imdbId);

  const [movie, setMovie] = useState(null); 

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=20845d71&i=${params.imdbId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch movie");
        }
      })
      .then((data) => {
        setMovie(data); 
        console.log("movieObj", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.imdbId]);

  return (
    <Container fluid>
      <Row className="justify-content-center my-4">
        <Col xs={12} md={8}>
          {movie ? ( 
            <>
              <Image fluid src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"} alt={movie.Title} />
              <h1>{movie.Title}</h1>
              <p>{movie.Plot}</p>
              <p>
                <strong>Director:</strong> {movie.Director}
              </p>
              <p>
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p>
                <strong>Year:</strong> {movie.Year}
              </p>
            </>
          ) : (
            <p>Loading...</p> 
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
