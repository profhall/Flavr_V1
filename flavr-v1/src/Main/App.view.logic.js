import React from 'react'
import App from './App.view.js'
import Flavors from "./data/veg_flavorbible"
export default class AppLogic extends React.Component {
  render() {
    return <App {...this.props} flavors={Flavors} />
  }
}