import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Menu from "./components/Menu";
import Slick from "./components/Slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Menu />
                <Slick movieName="Batman" />
                <Slick movieName="Star Wars" />
                <Slick movieName="Harry Potter" />
              </>
            }
          />
          <Route
            path="/TvShows"
            element={
              <>
                <>
                  <Menu />
                  <Slick movieName="family guy" />
                  <Slick movieName="simpson" />
                  <Slick movieName="game of thrones" />
                </>
              </>
            }
          />
          <Route path="/details/:imdbId" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
