import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader, Carousel } from 'react-bootstrap';
import { fetchSpecies } from  '../actions/species.js'
import { fetchStarships } from  '../actions/starships.js'
import { fetchHomeworlds } from  '../actions/homeworlds.js'

class CharacterShow extends Component {

  constructor(props) {
    super(props);
    this.props.actions.fetchSpecies({speciesURL: this.props.character.species[0]})
    this.props.actions.fetchStarships({starshipsURL: this.props.character.starships[0]})
    this.props.actions.fetchHomeworlds({homeworldsURL: this.props.character.homeworld})
    this.state = {
      character: props.character,
    };
    this.props.actions.fetchSpecies({speciesURL: this.props.character.species[0]})
    this.props.actions.fetchStarships({starshipsURL: this.props.character.starships[0]})
    this.props.actions.fetchHomeworlds({homeworldsURL: this.props.character.homeworld})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      species: this.props.species,
      starships: this.props.starships,
      homeworlds: this.props.homeworlds
    });
  }

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
            <p>Skin Color: {this.props.character.skin_color}</p>
            <p>Species: {this.props.species.name}</p>
            <p>Average Lifespan: {this.props.species.average_lifespan}</p>
            <p>Language: {this.props.species.language}</p>
            <p>Starship: {this.props.starships.name}</p>
            <p>Homeworld: {this.props.homeworlds.name}</p><br></br>
            <p>*BBY = Before the Battle of Yavin, ABY = After the Battle of Yavin</p>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    character: state.characters.find(character => character.name == ownProps.routeParams.name),
    species: state.species,
    starships: state.starships,
    homeworlds: state.homeworlds
  };
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchSpecies, fetchStarships, fetchHomeworlds }, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CharacterShow);
