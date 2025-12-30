import {Component} from "react";
export default class MovieCards extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return<div id="Movie_cards">
            <img src={this.props.imgSrc} style={{width:"350px",height:"250px"}}/>
            <h1>{this.props.title}</h1>
            <p>{this.props.desc}</p>
            <p>{this.props.cat}</p>
            <p>{this.props.release}</p>
            <p>{this.props.rat}</p>
            <ul>
                {this.props.gen.map(data=><li style={{listStyleType:"none"}}>{data}</li>)}
            </ul>
            <h3>{this.props.pri}</h3>
        </div>
    }
}