import React, { Component } from 'react';

export default class SwitchCase extends Component
{
    constructor(){
        super()
        this.state = {
            choice :"+"
        };
    };
    render(){
            let a=10;
            let b=50;
            let c;
            let msg;
            switch (this.state.choice){
                    case "+":
                    c=a+b;
                    msg =<h1>Addition of two numbers is {c}</h1>
                    break;
                    case 2:
                    c=a-b;
                    msg =<h1>Addition of two numbers is {c}</h1>
                    break;
                    case 3:
                    c=a*b;
                    msg =<h1>Addition of two numbers is {c}</h1>
                    break;
                    case 4:
                    c=a%b;
                    msg =<h1>Addition of two numbers is {c}</h1>
                    break;
                    default:
                        msg =<h1>invalid choice</h1>
            }
            return msg;
    }     
};