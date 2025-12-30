import {Component} from "react";
import Child from "./Child";
import Cards from "./Cards";
import DefaultProps from "./DefaultProps";
export default class App extends Component{
  render(){
    return<>

    {/* <Child ename="Jnana" age={21}/>
    <Child ename="Sai" age={22}/>
    <Child ename="varun" age={23}/> */}

    {/* <Cards image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/5/8/0821fd59-ab1f-49a0-9d95-e596084e254a_dcd6f090-cd4e-4f76-95e0-6a7ee9e2b141.jpg" title="Pizza" loc="Kahiguda"/>
    <Cards image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/9/21/c26a0f78-8086-4ada-b068-14c18d1cc619_dac4551a-ff0e-4d16-a7fc-655f4e46e7ed.jpg" title="Biriyani" loc="Madhapur"/>
    <Cards image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/9/21/2424aeed-5a58-49cc-8160-c4314de90f95_88a5ee43-9e7a-41dc-b5ac-250a0919c660.jpg" title="Snacks" loc="KPHB"/> */}

    {/* {CardDetails.map(res=><Cards imgSrc={res.imgSrc} imgAlt={res.imgAlt} title = {res.title} description = {res.description}/>)} */}
       <Cards/>
      <DefaultProps mobile={9398433412} user="saivarun"/>
     </>
  
  }
}
