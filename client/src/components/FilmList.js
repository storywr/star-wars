import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../filmList.css';

class FilmList extends Component {

  render() {

    var episodes = this.props.films.sort(function(a, b) {
      return a.episode_id - b.episode_id
    })

    return (
      <div>
        <PageHeader className="header">Episodes <small>Lucas Films</small></PageHeader>
        <div className="filmListContainer">
          <div className="filmData">
            <tr>
              {episodes.map(film =>
                <Link to={`/film/${film.title}`}><p>Episode {film.episode_id}: {film.title}</p></Link>
            )}
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
