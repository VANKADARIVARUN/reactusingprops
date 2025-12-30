let CardDetails = [{
    imgSrc:"https://tse4.mm.bing.net/th/id/OIP.wh9I5f28SsDkQ2R4c-KfNgHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    imgAlt:"Lake-Image",
    title:"Lakes",
    description:"Crystal clear lake"
},
{
    imgSrc:"https://tse4.mm.bing.net/th/id/OIP.-jkNBhFlaf23yHhhMOjC1gHaE-?cb=ucfimg2&ucfimg=1&w=730&h=491&rs=1&pid=ImgDetMain&o=7&rm=3",
    imgAlt:"Lake Img",
    title:"CrescentLake",
    description:"Crystal clear water"
},{
    imgSrc:"https://tse4.mm.bing.net/th/id/OIP.onSOqt1aNvWQ-EK7opzUPAHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=187&c=7&dpr=1.3&o=7&rm=3",
    imgAlt:"Lake Img",
    title:"CrescentLake",
    description:"Crystal clear water"
},{
    imgSrc:"https://tse2.mm.bing.net/th/id/OIP.ZCfDcm6ap60RyDQJQ59HegHaLG?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=280&c=7&dpr=1.3&o=7&rm=3",
    imgAlt:"Lake Img",
    title:"CrescentLake",
    description:"Crystal clear water"
}]
let hotelCards = [
  {
    id: 1,
    imgSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Ocean View Resort",
    description: "Sea-facing luxury stay",
    location: "Goa",
    pricePerNight: 6500,
    rating: 4.6,
    amenities: ["Pool", "WiFi", "Beach View"]
  },
  {
    id: 2,
    imgSrc: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    title: "Mountain Inn",
    description: "Peaceful stay in the hills",
    location: "Manali",
    pricePerNight: 4200,
    rating: 4.4,
    amenities: ["Heater", "Balcony", "WiFi"]
  },
  {
    id: 3,
    imgSrc: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    title: "City Palace Hotel",
    description: "Premium rooms in city center",
    location: "Bangalore",
    pricePerNight: 5800,
    rating: 4.5,
    amenities: ["Gym", "Parking", "Restaurant"]
  },
  {
    id: 4,
    imgSrc: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    title: "Royal Heritage",
    description: "Traditional luxury experience",
    location: "Jaipur",
    pricePerNight: 7200,
    rating: 4.7,
    amenities: ["Spa", "Pool", "Heritage View"]
  }
]; 
let foodCards = [
  {
    id: 1,
    imgSrc: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    title: "Cheese Pizza",
    description: "Loaded with extra cheese",
    category: "Italian",
    price: 299,
    rating: 4.5,
    isVeg: true
  },
  {
    id: 2,
    imgSrc: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "Veg Burger",
    description: "Crispy patty with veggies",
    category: "Fast Food",
    price: 179,
    rating: 4.3,
    isVeg: true
  },
  {
    id: 3,
    imgSrc: "https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=2048x2048&w=is&k=20&c=AtAY-5PW4eW6di6XadrfCKvyjgbPHg1SOLNBQXxRucA=",
    title: "Chicken Biryani",
    description: "Spicy and flavorful",
    category: "Indian",
    price: 349,
    rating: 4.7,
    isVeg: false
  },
  {
    id: 4,
    imgSrc: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    title: "Pasta",
    description: "Creamy white sauce pasta",
    category: "Italian",
    price: 259,
    rating: 4.4,
    isVeg: true
  }
]; 
let movieCards = [
  {
    id: 1,
    imgSrc: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    title: "Inception",
    description: "Mind-bending sci-fi",
    genre: ["Sci-Fi", "Thriller"],
    releaseYear: 2010,
    rating: 8.8,
    duration: "2h 28m"
  },
  {
    id: 2,
    imgSrc: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
    title: "Avengers",
    description: "Superhero action",
    genre: ["Action", "Fantasy"],
    releaseYear: 2012,
    rating: 8.0,
    duration: "2h 23m"
  },
  {
    id: 3,
    imgSrc: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    title: "Interstellar",
    description: "Space exploration drama",
    genre: ["Sci-Fi", "Drama"],
    releaseYear: 2014,
    rating: 8.6,
    duration: "2h 49m"
  },
  {
    id: 4,
    imgSrc: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    title: "Joker",
    description: "Psychological thriller",
    genre: ["Crime", "Drama"],
    releaseYear: 2019,
    rating: 8.5,
    duration: "2h 2m"
  }
]; 
let productCards = [
  {
    id: 1,
    imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "Smartphone",
    description: "128GB | 5G | AMOLED",
    brand: "Samsung",
    price: 28999,
    rating: 4.6,
    inStock: true
  },
  {
    id: 2,
    imgSrc: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    title: "Laptop",
    description: "16GB RAM | SSD",
    brand: "Dell",
    price: 68999,
    rating: 4.5,
    inStock: false
  },
  {
    id: 3,
    imgSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Headphones",
    description: "Noise Cancelling",
    brand: "Sony",
    price: 12999,
    rating: 4.4,
    inStock: true
  },
  {
    id: 4,
    imgSrc: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    title: "Smart Watch",
    description: "Fitness & Health Tracking",
    brand: "Apple",
    price: 41999,
    rating: 4.7,
    inStock: true
  }
]; 
export {hotelCards,foodCards,movieCards,productCards};