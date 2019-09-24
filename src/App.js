import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaList: [], 
    topping: "", 
    size: "", 
    isVeg: false, 
    editClicked: false, 
    editPizza: null,
  }

  sizeVal = (event) => {
    this.setState({size: event.target.value})
  }

  toppingVal = (event) => {
    this.setState({topping: event.target.value})
  }

  vegVal = (event) => {
    event.target.value === 'Vegetarian' ? this.setState({isVeg: true}) : this.setState({isVeg: false})
  }

  handleSubmit = (event) => {
  //  event.target.parentNode.parentNode.reset()
  
    if(this.state.editClicked === false){
      const reqObj = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          topping: this.state.topping, 
          size: this.state.size, 
          vegetarian: this.state.isVeg
        })
      }

      fetch('http://localhost:3000/pizzas', reqObj)
      .then(response => response.json())
      .then(data => {
        this.setState({pizzaList: [...this.state.pizzaList, data]})
      })
    } else {
      const reqObj ={
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          topping: "", 
          size: "",
          vegetarian: ""
        })
      }

      fetch(`http://localhost:3000/pizzas/${this.state.editPizza.id}`, reqObj)
    }
  }

  handleEdit = (pizza) => {
    this.setState({editClicked: true})
    this.setState({editPizza: pizza})
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(response => response.json())
    .then(data => {
      this.setState({pizzaList: data})
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm sizeVal={this.sizeVal} toppingVal={this.toppingVal} vegVal={this.vegVal} handleSubmit={this.handleSubmit} editPizza={this.state.editPizza} editClicked={this.state.editClicked}/>
        <PizzaList pizzaList={this.state.pizzaList} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
