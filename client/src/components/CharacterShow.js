import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';

class CharacterShow extends Component {

  render() {

    return (
      <div>
        <PageHeader className="header">{this.props.character.name} <small></small></PageHeader>
        <div className="dataContainer">
          <div className="characterData">
            <p>Birth Year: {this.props.character.birth_year}*</p>
            <p>Eye Color: {this.props.character.eye_color}</p>
            <p>Height: {this.props.character.height} cm</p>
            <p>Mass: {this.props.character.mass} kg</p>
            <p>Skin Color: {this.props.character.skin_color}</p><br></br>
            <p>*BBY = Before the Battle of Yavin, ABY = After the Battle of Yavin</p>
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
