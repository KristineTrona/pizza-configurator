import * as React from 'react'
import {connect} from 'react-redux';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaToppings from './PizzaToppings'
import {loadPizzas, selectBase, updateCost} from '../actions/pizza'


class PizzaContainer extends React.Component {
  state = {
    base: "",
    sauce: "",
    topping: ""
  }

  onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value 
      })
  }

  onSubmitBase= (event) =>{
    event.preventDefault()
    this.props.selectBase(this.state.base)
    this.props.updateCost(this.props.pizza.bases.find(base => base.title===this.state.base).price)
  }


  componentDidMount() {
      this.props.loadPizzas()
    }

  render() {
    return(
      <div className = "pizza-container">
        <h1>Welcome to NewAgePizza!</h1>
        <PizzaBase bases= {this.props.pizza.bases} onChange={this.onChange} onSubmitBase={this.onSubmitBase}/>
        <PizzaSauce sauces = {this.props.pizza.sauces}/>
        <PizzaToppings toppings = {this.props.pizza.toppings}/>
        <p>Total cost: 	&euro; {this.props.pizza.price.toFixed(2)}</p>
      </div>)
  }  
}

const mapStateToProps = (state) => ({
  pizza: state.pizza
})


export default connect(mapStateToProps, {loadPizzas, selectBase, updateCost})(PizzaContainer)