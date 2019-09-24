import React from "react"
import PizzaList from '../containers/PizzaList'
import PizzaForm from '../components/PizzaForm'

const Pizza = (props) => {
  // console.log(props)
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "yes" : "no"}</td>
      <td><button type="button" className="btn btn-primary" onClick={props.handleEditPizza}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
