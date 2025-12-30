import { Component } from "react";
export default class DefaultProps extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps={
        email:"saivarun123@gmail.com",
        gender:"M"
    }
    render(){
        console.log(this.props);
        console.log(this.props.email);
        return<div>{this.props.gender}</div>
    }
}