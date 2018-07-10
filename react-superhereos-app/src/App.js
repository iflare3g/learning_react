import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import {getAll, sendSuperheroToTheServer, deleteSuperheroFromTheServer} from './utils/network';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { superheroes: [], error: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleSubmit(data){
    if(data.error === false){
      const superhero = { id: data.id, name: data.value.trim() };
      const superheroes = [...this.state.superheroes, superhero];
      this.setState({ superheroes });
      sendSuperheroToTheServer(superhero).catch(this.handleError);
    }
  }

  handleDelete(id) {
    let superheroes = this.state.superheroes;
    superheroes = superheroes.filter(superhero => superhero.id !== id);
    this.setState({ superheroes });
    deleteSuperheroFromTheServer(id).catch(this.handleError);
  }

  handleError(error) {
    this.setState({ error: `Error: ${error.message}`}, () =>
      setTimeout(() => this.setState({ error: ''}), 3000)
    );
  }

  componentDidMount(){
    getAll()
      .then(data => {
        this.setState({ superheroes: data })
      })
      .catch(this.handleError);
  }

  render() {
    let message;
    if (this.state.error) {
      message = <span>{this.state.error}</span>
    }

    return (
      <div>
        <div>
          <h1>React Superheroes App</h1>
          <Form onSubmit={this.handleSubmit} />
          <p>{message}</p>
        </div>
        <div>
          <List onDelete={this.handleDelete} listItems={this.state.superheroes} />
        </div>
      </div>
    )
  }

}

export default App;
