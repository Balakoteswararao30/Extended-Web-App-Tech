import React, { Component } from "react";

export default class Map extends Component{
    constructor (){
        super()
        this.state={
            num:[10,20,30,40,50,60]
        }
    }
    render()
    {
       return this.state.num.filter((data)=>{
            return <h1>{data}</h1>
        });
    }
}
