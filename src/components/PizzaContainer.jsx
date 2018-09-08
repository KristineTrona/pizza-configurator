import * as React from 'react'
import {connect} from 'react-redux';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaToppings from './PizzaToppings'


class PizzaContainer extends React.Component {

  componentDidMount() {
    }

  render() {
    return(
        <div className = "pizza-container">
          <h1>Welcome to NewAgePizza!</h1>
          <h3>Choose your ingredients:</h3>
          <PizzaBase/>
          <PizzaSauce/>
          <PizzaToppings/>
        </div>
      )
      }   
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, {})(PizzaContainer)