import {Component} from "react";
import FoodCards from "./components/cards/FoodCards";
import {hotelCards,foodCards,movieCards,productCards} from "./data"
import Hotel from "./components/cards/Hotel";
import MovieCards from "./components/cards/MovieCards";
import ProductCards from "./components/cards/ProductCards";
export default class Cards extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <>
           {/* <div className="hotel_container">
             {
                 CardDetails.map(food=>{return <Cards imgSrc={food.imgSrc} imgAlt={food.imgAlt} title={food.title} desc={food.description}/>})
              } */}
               <h1 className="heading">Hotels</h1>
           <div className="hotel_container">
             {
                 hotelCards.map(food=>{return <Hotel imgSrc={food.imgSrc} title={food.title} desc={food.description} loc={food.location} price={food.pricePerNight}/>})
                }
           </div>
                <h1 className="heading" style={{marginTop:"2vw"}}>Food</h1>
          <div className="food_container">
             {
                 foodCards.map(food=>{return <FoodCards imgSrc={food.imgSrc} title={food.title} desc={food.description} cat={food.category} pri={food.price}/>})
                }
          </div>
                <h1 className="heading" style={{marginTop:"4vw"}}>Movies</h1>
          <div id="movie_container">
           {
               movieCards.map(food=>{return <MovieCards imgSrc={food.imgSrc} title={food.title} desc={food.description} gen={food.genre}  release={food. releaseYear} rat={food.rating}/>})
            }
          </div>
            <h1 className="heading" style={{marginTop:"4vw"}}>Electronic Gadgets</h1>
          <div id="product_container">
            {
                productCards.map(food=>{return <ProductCards imgSrc={food.imgSrc} title={food.title} desc={food.description} brand={food.brand}  price={food.price} rat={food.rating}/>})
            }
          </div>
           
        </>
        );
        }
}