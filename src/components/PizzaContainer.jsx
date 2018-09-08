import * as React from 'react'
import {connect} from 'react-redux';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaToppings from './PizzaToppings'
import {loadPizzas, selectBase, selectSauce, selectToppings, 
  updateCostBase, updateCostSauce, updateCostToppings} from '../actions/pizza'


class PizzaContainer extends React.Component {
  state = {
    base: "",
    sauce: "",
    topping1: "",
    topping2: "",
    topping3: ""
  }

  onChange = (event) => {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value 
      })
  }

  onSubmitBase= (event) =>{
    event.preventDefault()
    this.props.selectBase(this.state.base)
    this.props.updateCostBase(this.props.pizza.bases
      .find(base => base.title===this.state.base).price)
  }

  onSubmitSauce= (event) =>{
    event.preventDefault()
    this.props.selectSauce(this.state.sauce)
    this.props.updateCostSauce(this.props.pizza.sauces
      .find(sauce => sauce.title===this.state.sauce).price)
  }

  onSubmitToppings= (event) =>{
    event.preventDefault()
    this.props.selectToppings([this.state.topping1, this.state.topping2, this.state.topping3]
      .filter(topping => topping !== ""))
    this.props.updateCostToppings([this.state.topping1, this.state.topping2, this.state.topping3]
      .filter(topping => topping !== "").length)
    console.log(this.props.pizza.topping)
  }

  updateTotalCost = () => {
    const totalCost = this.props.pizza.priceBase + this.props.pizza.priceSauce + this.props.pizza.priceToppings
    return totalCost.toFixed(2)
  }

  componentDidMount() {
      this.props.loadPizzas()
    }

  render() {
    return(
      <div className = "pizza-container">
        <h1>Welcome to NewAgePizza!</h1>
        <PizzaBase bases= {this.props.pizza.bases} onChange={this.onChange} onSubmitBase={this.onSubmitBase}/>
        <PizzaSauce sauces = {this.props.pizza.sauces} onChange={this.onChange} onSubmitSauce={this.onSubmitSauce}/>
        <PizzaToppings toppings = {this.props.pizza.toppings} onChange={this.onChange} onSubmitToppings={this.onSubmitToppings}/>
        <p>Total cost: 	&euro; {this.updateTotalCost()}</p>
      </div>)
  }  
}

const mapStateToProps = (state) => ({
  pizza: state.pizza
})


export default connect(mapStateToProps, {loadPizzas, selectBase, selectSauce, 
  selectToppings, updateCostBase, updateCostSauce, updateCostToppings})(PizzaContainer)