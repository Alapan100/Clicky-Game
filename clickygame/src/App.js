import React, { Component } from "react";
import Jleaguecard from "./Components/jleaguecard";
import characters from "./jLeague.json";
import Wrapper from "./Components/Wrapper"; 

class App extends Component {
  state = {
      characters
    }

   render() {
     return (
         <Wrapper>
             {this.state.characters.map(character => (
                 <Jleaguecard
                 id={character.id}
                 image={character.image}
                 name={character.name}  
                 />
             ))}
         </Wrapper>

     )
   }
 }

 export default App