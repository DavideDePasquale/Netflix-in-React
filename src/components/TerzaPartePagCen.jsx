import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class TerzaPartePagCen extends Component {
  state = {
    film1: []
  };

  getFilm = () => {
    fetch("https://www.omdbapi.com/?apikey=78694dd5&s=Scooby Doo")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore!");
        }
      })
      .then((film) => {
        console.log("Risposta json server", film);
        if (film.Search) {
          this.setState({ film1: film.Search.slice(0, 6) });
        } else {
          console.error("Nessun film trovato");
        }
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  componentDidMount() {
    this.getFilm();
  }

  render() {
    return (
      <>
        {/* Contenitore griglia */}
        <Row xs={1} sm={2} md={3} lg={3} xl={6} className="mb-4">
          {this.state.film1.map((film) => (
            <Col key={film.imdbID} className="mb-4 text-center px-1">
              <Card className="animazioneCard border-0 h-100">
                <Card.Img
                  src={film.Poster}
                  alt={film.Title}
                  className="img-fluid h-100"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
export default TerzaPartePagCen;
