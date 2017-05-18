import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import '../film.css';

class FilmShow extends Component {

  render() {

    return (
      <div>
        <PageHeader className="filmHeader">{this.props.film.title} <small></small></PageHeader>
        <div className="filmContainer">
          <div className="characterData">
            <p>{this.props.film.opening_crawl}*</p>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    film: state.films.results.find(film => film.title == ownProps.routeParams.title)
  };
};


export default connect(mapStateToProps)(FilmShow);
