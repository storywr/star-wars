import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';

class CharacterShow extends Component {

  render() {

    return (
      <div>
        <PageHeader className="header">Characters <small>May the force be with you all</small></PageHeader>
        <div className="dataContainter">
          <div className="characterData">
            <h4>{this.props.character.name}</h4>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    character: state.characters.find(character => character.name == ownProps.routeParams.name)
  };
};


export default connect(mapStateToProps)(CharacterShow);
