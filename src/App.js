import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pizzas: [],
      pizzaToEdit: []
    }
  }


  componentDidMount = () => {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then((pizzaData) => {
        this.setState({
          pizzas: pizzaData
        })
  })
  }

  editPizza = (e) => {
    console.log(e)
}

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaToEdit}/>
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
