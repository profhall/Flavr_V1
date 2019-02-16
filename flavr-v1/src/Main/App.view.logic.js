import React from 'react'
import App from './App.view.js'
import Flavors from './data/veg_flavorbible'


export default class AppLogic extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures : [],
      // flavors: Flavors
      flavors: Object.values(Flavors)
      // flavors: Object.entries(Flavors)
    };
    console.log(this.state.flavors)



  }
  render() {
    return <App {...this.props} flavors={this.state.flavors} />
  }
}