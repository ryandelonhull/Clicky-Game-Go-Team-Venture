import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Footer from "./components/Footer";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters
  };

  removeCharacter = id => {
    const characters = this.state.characters.filter(character => character.id !== id);
    this.serState({ characters: characters });
  };

  render() {
    return (
      <div>
        <Header/>
        <Image/>
        <Footer/>
      </div>
    );
  }
}

export default App;
