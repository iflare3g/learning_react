import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      vinile: 'Album1',
      mail: '',
      pagamento: 'Carta di credito',
      note: '',
      regalo: false,
      stato: ''
    };
    this.initialState = this.state;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const valore = target.type === 'checkbox' ? target.checked : target.value
    const prop = target.name;

    this.setState({
      [prop]: valore
    });
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({stato: "sent"}, () => window.setTimeout(this.clearForm, 3000));
  }
  clearForm(){
    this.setState(this.initialState);
    }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>

      <label htmlFor="vinile"> Seleziona un vinile </label>
      <select name="vinile" id="vinile" value={this.state.vinile} onChange={this.handleChange}>
        <option value="Album1">Album 1</option>
        <option value="Album2">Album 2</option>
        <option value="Album3">Album 3</option>
      </select>

      <label htmlFor="mail"> E-mail </label>
      <input
        type="email"
        id="mail"
        name="mail"
        value={this.state.mail}
        onChange={this.handleChange}
      />

      <fieldset>
        <legend>Modalità di pagamento</legend>
        <label>
          <input
            type="radio"
            name="pagamento"
            value="Carta di credito"
            onChange={this.handleChange}
            checked={this.state.pagamento === "Carta di credito"} />Credit Card
        </label>

        <label>
          <input
            type="radio"
            name="pagamento"
            value="Contrassegno"
            onChange={this.handleChange}
            checked={this.state.pagamento === "Contrassegno"} />Contrassegno
        </label>
      </fieldset>

      <label htmlFor="note"> Note </label>
      <textarea name="note" id="note" value={this.state.note} onChange={this.handleChange} />
      <label>
      <input
          name="regalo"
          type="checkbox"
          checked={this.state.regalo}
          onChange={this.handleChange} />
          Si tratta di un regalo
      </label>

      <input type="submit" value="Prenota" />
      <p className={"message " + this.state.stato}>
        Grazie per aver prenotato. <br />
        Riceverai una mail di conferma a breve.
      </p>
    </form>
    )
  }
}

export default App
