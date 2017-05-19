import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { fetchCharacters } from  './actions/characters.js'
import { fetchFilms } from  './actions/films.js'
import './App.css';

class App extends Component {

  componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.actions.fetchCharacters()
    }
    if (this.props.characters.length === 0) {
      this.props.actions.fetchFilms()
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><Link to="/">Star Wars</Link></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#"><Link to="/characters">Characters</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="/films">Films</Link></NavItem>
          </Nav>
        </Navbar>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {characters: state.characters, films: state.films, species: state.species, starships: state.starships}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchCharacters, fetchFilms }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
