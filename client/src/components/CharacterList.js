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
              <ol>{this.props.characters.map(character =>
                <Link to={`/character/${character.name}`}><li>{character.name}</li></Link>
              )}</ol>
            </tr>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.results
  };
};

export default connect(mapStateToProps)(CharacterList);
