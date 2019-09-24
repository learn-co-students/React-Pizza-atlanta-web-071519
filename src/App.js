import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
state={
  pizzaList:[],
  formObject:{},
  topping: "",
  size:"small",
  vegetarian:false
}

componentDidMount = () => {
  fetch("http://localhost:3000/pizzas")
  .then(res=>res.json())
  .then(data=> {
    this.setState({pizzaList: data})
})
}

changePizzaToppings = (event) =>{
  this.setState({topping:event.target.value})
}

changePizzaSize= (event) =>{
  this.setState({size:event.target.value})
}

changeVegetarianStatus = (event) => {
  if(event.target.value==="Vegetarian"){
    this.setState({vegetarian: true})
  } else if(event.target.value==="Not Vegetarian") {
    this.setState({vegetarian: false})
  }
}

editPizza = (pizza) => {
  this.setState({formObject:pizza})
  this.setState({topping:pizza.topping})
  this.setState({size:pizza.size})
}

submitPizza = () => {
  const reqObj={
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
    "topping": this.state.topping,
    "size": this.state.size,
    "vegetarian": this.state.vegetarian
    })
  }

  fetch("http://localhost:3000/pizzas", reqObj)
  .then(res=>res.json())
  .then(data=>this.setState({pizzaList:[...this.state.pizzaList, data]}
    )
  )
}

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm submitPizza={this.submitPizza} vegetarian={this.state.vegetarian} changeVegetarianStatus={this.changeVegetarianStatus} size={this.state.size} changePizzaSize={this.changePizzaSize} topping={this.state.topping} changePizzaToppings={this.changePizzaToppings} pizza={this.state.formObject}/>
        <PizzaList editPizza={this.editPizza} pizzaList={this.state.pizzaList}/>
      </Fragment>
    );
  }
}

export default App;
