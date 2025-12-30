import {Component} from "react";
export default class Hotel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div id="hotel">
            <img src={this.props.imgSrc} style={{width:"350px",height:"250px"}}/>
            <h1>{this.props.title}</h1>
            <p>{this.props.desc}</p>
            <p>{this.props.cat}</p>
            <h3>{this.props.pri}</h3>
        </div>
    }
}