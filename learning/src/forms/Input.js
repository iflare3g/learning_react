import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {nome: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      nome: e.target.value
    });
  }

render(){
    return(
      <div>
        <label htmlFor="nome"> Inserisci il tuo nome </label>
        <input
          type="text"
          id="nome"
          placeholder="Nome"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <p>{this.state.nome}</p>
      </div>
    )
  }
}

export default Input
