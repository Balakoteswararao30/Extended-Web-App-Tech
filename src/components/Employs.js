import React, { Component } from 'react'
import axiom from 'axiom';
export default class Employs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         employs: [],
      };
    }
    componentDidMount(){
      axios.get("http://localhost:4000/employs")
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
