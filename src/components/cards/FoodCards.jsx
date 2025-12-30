import React from "react";
export default class FoodCards extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <>
        <div id="food">
            <img src={this.props.imgSrc} style={{width:"23vw",height:"20vw",objectFit:"cover"}}/>
            <h1>{this.props.title}</h1>
            <p>{this.props.desc}</p>
            <p>{this.props.cat}</p>
            <h3>{this.props.pri}</h3>
        </div>
        </>
    }
}