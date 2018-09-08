import * as React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaToppings from './PizzaToppings'
import Delivery from './Delivery'
import {loadPizzas, selectBase, selectSauce, selectToppings, 
  updateCostBase, updateCostSauce, updateCostToppings} from '../actions/pizza'


class PizzaContainer extends React.Component {
  state = {
    base: "",
    sauce: "",
    topping1: "",
    topping2: "",
    topping3: "",
    showDelivery: false
  }

  componentDidMount() {
    this.props.loadPizzas()
  }

  onChange = (event) => {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value 
      })
  }

  onSubmit = (event) => {
    if(this.state.base && this.state.sauce && (this.state.topping1 || this.state.topping2 || this.state.topping3)){
      event.preventDefault()

      this.props.selectBase(this.state.base)
      this.props.updateCostBase(this.props.pizza.bases
        .find(base => base.title===this.state.base).price)

      this.props.selectSauce(this.state.sauce)
      this.props.updateCostSauce(this.props.pizza.sauces
        .find(sauce => sauce.title===this.state.sauce).price)

      this.props.selectToppings([this.state.topping1, 
        this.state.topping2, this.state.topping3]
        .filter(topping => topping !== ""))
      this.props.updateCostToppings([this.state.topping1, 
        this.state.topping2, this.state.topping3]
        .filter(topping => topping !== "").length)
    
      this.setState({...this.state,
        showDelivery: true}
      )

    } else if (!this.state.base) {
        event.preventDefault()
        window.alert("Please choose a size for your pizza!")
    } else if (!this.state.sauce){
        event.preventDefault()
        window.alert("Please choose a sauce for your pizza")
    } else{
        event.preventDefault()
        window.alert("Please choose at least one topping")
    }

  }

  updatePizzaCost = () => {
    const totalCost = this.props.pizza.priceBase + this.props.pizza.priceSauce 
    + this.props.pizza.priceToppings + this.props.pizza.priceDelivery
    return totalCost.toFixed(2)
  }

  completeOrder = () => {

  }

  render() {
    return(
      <div className = "pizza-container">
        <h1>Welcome to NewAgePizza!</h1>
          <PizzaBase bases= {this.props.pizza.bases} onChange={this.onChange}/>
          <PizzaSauce sauces = {this.props.pizza.sauces} onChange={this.onChange}/>
        <p>Choose up to 3 toppings:</p>
          <PizzaToppings toppings = {this.props.pizza.toppings} 
            onChange={this.onChange} onSubmit={this.onSubmit}/>
          {this.state.showDelivery ? <Delivery/> : null}
          <p>Total cost: 	&euro; {this.updatePizzaCost()}</p>
          <Link to={"/order-complete"}>
            <button onClick={this.completeOrder}>Complete order</button>
          </Link>
      </div>)
  }  
}

const mapStateToProps = (state) => ({
  pizza: state.pizza
})


export default connect(mapStateToProps, {loadPizzas, selectBase, selectSauce, 
  selectToppings, updateCostBase, updateCostSauce, updateCostToppings})(PizzaContainer)