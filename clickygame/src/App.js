import React, { Component } from "react";
import Jleaguecard from "./Components/jleaguecard";
import characters from "./jLeague.json";
import Wrapper from "./Components/Wrapper";
import Nav from "./Components/Nav";
import Jumbotron from "./Components/Jumbotron";

class App extends Component {
  state = {
    characters: characters.map(character => ({ ...character, clicked: false })),
    score: 0,
    topScore: 0
  }

  handleClick = character => {
    console.log(character)
    let { score, topScore, characters } = this.state;

    if (character.clicked === true) {
      topScore = score > topScore ? score : topScore;
      this.setState({
        characters: characters.map(character => ({ ...character, clicked: false })),
        score: 0,
        topScore: topScore
      }, () => { this.shuffleArray(this.state.characters) })
    } else if (character.clicked === false) {

      this.setState({
        score: score + 1
      })
      character.clicked = true;

      this.shuffleArray(characters)
    }
  }

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({
      characters: array
    })
  }

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
        >

        </Nav>
        <Jumbotron></Jumbotron>

        <Wrapper>


          {this.state.characters.map(character => (
            <Jleaguecard
              character={character}
              onClick={this.handleClick}
              id={character.id}
              image={character.image}
              name={character.name}
            />
          ))}



        </Wrapper>

      </div>
    )
  }
}

export default App;