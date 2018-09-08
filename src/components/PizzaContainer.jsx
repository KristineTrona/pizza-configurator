import * as React from 'react'
import {connect} from 'react-redux';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaToppings from './PizzaToppings'
import {loadPizzas} from '../actions/pizza'


class PizzaContainer extends React.Component {

  componentDidMount() {
      this.props.loadPizzas()
    }

  render() {
    return(
      <div className = "pizza-container">
        <h1>Welcome to NewAgePizza!</h1>
        <h3>Choose your ingredients:</h3>
        <PizzaBase bases= {this.props.pizza.bases}/>
        <PizzaSauce sauces = {this.props.pizza.sauces}/>
        <PizzaToppings toppings = {this.props.pizza.toppings}/>
      </div>)
  }  
}

const mapStateToProps = (state) => ({
  pizza: state.pizza
})


export default connect(mapStateToProps, {loadPizzas})(PizzaContainer)