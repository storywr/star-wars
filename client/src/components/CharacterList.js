import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';

class CharacterList extends Component {

  render() {

    return (
      <div>
        <PageHeader className="header2">Characters <small>May the Force be with you</small></PageHeader>
        <div className="dataContainter">
          <div className="adpdata">
            <tr>
              <ul>{this.props.characters.map(page =>
                <ul>{page.results.map(character =>
                <Link to={`/character/${character.name}`}><li>{character.name}</li></Link>
              )}</ul>
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
    characters: state.characters
  };
};

export default connect(mapStateToProps)(CharacterList);
