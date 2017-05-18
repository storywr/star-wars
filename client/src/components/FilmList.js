import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';

class FilmList extends Component {

  render() {

    return (
      <div>
        <PageHeader className="header">Episodes <small>Lucas Films</small></PageHeader>
        <div className="dataContainter">
          <div className="adpdata">
            <tr>
              <ul>{this.props.films.map(film =>
                <Link to={`/film/${film.title}`}><li>{film.title}</li></Link>
            )}</ul>
            </tr>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    films: state.films.results
  };
};

export default connect(mapStateToProps)(FilmList);
