import React, { Component } from "react"
import PropTypes from "prop-types"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

export default class checkout extends Component {
  static propTypes = {
    prop: PropTypes,
  }
  componentDidMount() {
    // Niklaus stripe test api
    this.stripe = window.Stripe("pk_test_4xaSUoCVcie6ZFB6R3GbHN51")
  }

  async redirectToCheckout(event) {
    event.preventDefault(event)
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_DjQJN2HJ1kkvI3", quantity: 4 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        BUY MY BOOK
      </button>
    )
  }
}
