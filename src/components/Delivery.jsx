import * as React from 'react'
import {connect} from 'react-redux'
import {addTurboDelivery} from '../actions/pizza'


class Delivery extends React.Component {
  state = {
    turboDelivery: true
  }

  toggle = () => {
    this.setState({
      turboDelivery: !this.state.turboDelivery
    })
   this.props.addTurboDelivery(this.state.turboDelivery)
  }

  pizzaCost = ()  => {
    return this.props.pizza.priceBase+ this.props.pizza.priceSauce + this.props.pizza.priceToppings
  }

  render() {
    return(
      <div className = "delivery" >
        <form>
          <input className = "checkbox" type= "checkbox" onChange= {this.toggle}/>
          <label>
            <span> Add <strong> turbo drone </strong> delivery for</span><br/>  &euro; {(0.1 * this.pizzaCost()).toFixed(2)} <span> extra cost </span>
          </label>
        </form>
      </div>)
  }  
}

const mapStateToProps = (state) => ({
  pizza: state.pizza
})

export default connect(mapStateToProps, {addTurboDelivery})(Delivery)