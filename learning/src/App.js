import React, { Component } from 'react';

const Contatore = ({nome, valore}) => {
  return (
    <div className="counter">
      <h2>{nome}</h2>
      <p>{valore}</p>
    </div>
  )
}

const Pulsante = props =>
  <button onClick={props.onClick}> Add {props.incremento}</button>

class ComponentA extends Component{
  constructor(props){
    super(props);
    this.state = {contatore: 0};
    this.contatori = ["counterC", "CounterD"];
    this.pulsanti = React.Children.map(props.children, child =>
        React.cloneElement(child, {
          onClick: this.aggiorna.bind(this, child.props.incremento)
        })
    );
  }

  aggiorna(incremento){
    this.setState((prevState, props) => ({
      contatore: prevState.contatore + incremento
      })
    );
  }

render(){
    const contatori = this.contatori.map(contatore =>
      <Contatore key={contatore} nome={contatore} valore={this.state.contatore} />
    );

    return (
      <div>
        <h1>Component A</h1>
        <div>
          {this.pulsanti}
          {contatori}
        </div>
      </div>
    );
  }
}

const App = props => {
  return (
    <ComponentA>
      <Pulsante incremento={1} />
      <Pulsante incremento={3} />
      <Pulsante incremento={10} />
    </ComponentA>
  )
}

export default App
