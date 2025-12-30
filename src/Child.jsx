import { Component } from "react";
export default class Child extends Component
{   
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            My name is {this.props.ename} and my age is {this.props.age}
        </div>
    }
}