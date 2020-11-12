import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/header.js";
import Image from "./components/Image/image.js";
import Footer from "./components/Footer/footer.js";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters
  };

  removeCharacter = id => {
    const characters = this.state.characters.filter(character => character.id !== id);
    this.setState({ characters: characters });
  };

  render() {
    return (
      <div>
        <Header/>
        {this.state.characters.map(character => (
          <Image
            removeCharacter={this.removeCharacter}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
        <Footer/>
      </div>
    );
  }
}

export default App;
