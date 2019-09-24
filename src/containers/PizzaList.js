import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  state = {
    pizzaList: [],
    editPizza: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({ pizzaList: pizzas}))
  }

  handleEditPizza = (event) => {
    console.log(event)
    //once edit button is clicked, send the pizza associated with that component into the pizza form
    // this.setState({...this.state({editPizza: })})
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            //render Pizza here
            this.state.pizzaList.map(pizza => (<Pizza pizza={pizza}/>)) }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
