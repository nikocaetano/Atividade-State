import React, { Component } from "react";

class App extends Component{
  state = {
    nome: 'Nikolas',
    idade: 24,
    comidaFavorita:'Bife a parmegiana',
    musicas: ['Can I Have This Dance', 'I Was Here', 'Hero']
  }
  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
      </div>
    )
  }
  
}

export default App;

// Crie uma class component 


// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)


//Bônus
// Adicione uma imagem da sua fruta favorita via import