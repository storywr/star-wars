import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { fetchCharacters } from  './actions/characters.js'
import './App.css';

class App extends Component {

  componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.actions.fetchCharacters()
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
            <NavItem eventKey={1} href="#"><Link to="/characters">Character List</Link></NavItem>
          </Nav>
        </Navbar>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {characters: state.characters}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchCharacters }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
