import React, { Component } from "react";
import './App.css';
import Wrapper from "./components/Wrapper/wrapper.js";
import Header from "./components/Header/header.js";
import Image from "./components/Image/image.js";
import Footer from "./components/Footer/footer.js";
import characters from "./characters.json";
import skullImage from "./components/skull.png";

class App extends Component {
  state = {
    characters: characters.map((character) =>{

      character.clicked = false;
      return character;
    } ),
    message: "Pick a character to begin!",
    score: 0,
    gameOver: false
  };

  shuffleArray = array => {
    let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

  randomizeCharacter = id => {
    let characters = [...this.state.characters];
    let character = characters.find( x => x.id === id);
    let score = this.state.score;
    let gameOver = this.state.gameOver;
    

    if(character){
      if(character.clicked){
        gameOver = true;
      }
      else{
        characters = characters.map( x => {
          if(x.id === character.id){
            x.clicked = true;
          }
          return x;
        });
        score += 1;
      }

    }

    if(!gameOver)
      characters = this.shuffleArray([...characters]);
    this.setState({ gameOver: gameOver, characters: characters, score: score, message: `${gameOver === true ? "Game Over - " : ""} Score: ${score}` });
  };

  render() {

    const gamePanel = this.state.gameOver === true ? (<div><img src={skullImage} alt="skull" id="skull"></img></div>):
        this.state.characters.map(character => (
          <Image
            randomizeCharacter={this.randomizeCharacter}
            id={character.id}
            name={character.name}
            image={character.image}
            key={character.id}
          />
        ));

    return (
      <Wrapper>
        <Header message={this.state.message}/>
        {gamePanel}
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
