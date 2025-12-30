import {Component} from "react";
export default class productCards extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div id="product_cards">
            <img src={this.props.imgSrc} style={{width:"350px",height:"250px"}}/>
            <h1>{this.props.title}</h1>
            <p>{this.props.desc}</p>
            <p>{this.props.brand}</p>
            <p>{this.props.price}</p>
            <p>{this.props.rat}</p>
        </div>
    }
}