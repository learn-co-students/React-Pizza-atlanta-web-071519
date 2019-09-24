import React from "react"

class PizzaForm extends React.Component{

  //form is a class component because we need to be able to change state

  render() {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={(event)=>this.props.changePizzaToppings(event)} className="form-control" placeholder="Pizza Topping" value={
                this.props.topping
              }/>
        </div>
        <div className="col">
          <select value={this.props.size} onChange={(event)=>this.props.changePizzaSize(event)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onClick={(event)=>{this.props.changeVegetarianStatus(event)}} checked={this.props.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onClick={(event)=>{this.props.changeVegetarianStatus(event)}} checked={this.props.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>


        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => {this.props.submitPizza()}}>Submit</button>
        </div>
      </div>

  )}
}

export default PizzaForm
