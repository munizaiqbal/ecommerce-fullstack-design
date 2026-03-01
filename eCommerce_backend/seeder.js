const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const connectDB = require("./config/db");

dotenv.config();

const products = [
  {
    
    name: "T-shirt",
    price: 10.3,
    image: "/images/blueshirt.png",
    description: "T-shirts with multiple colors, for men",
    category: "Accessories",
    condition: "New",
    rating: 4,
  },
  {
   
    name: "Jeans Shorts",
    price: 9.99,
    image: "/images/shorts.png",
    description: "Jeans shorts for men blue color",
    category: "Accessories",
    condition: "New",
    rating: 4,
  },
  {
    
    name: "Jacket",
    price: 12.5,
    image: "/images/jacket.png",
    description: "Brown winter coat medium size",
     category: "Accessories",
    condition: "New",
      rating: 5,
  },
  {
   
    name: "Wallet",
    price: 20.0,
    image: "/images/blueWallet.png",
    description: "Blue wallet for men leather metarfial",
    category: "Accessories",
    condition: "New",
    rating: 4,
  },
  {
    
    name: "Jeans Bag",
    price: 35.0,
    image: "/images/bag.png",
    description: "Jeans bag for travel for men",
    category: "Accessories",
    condition: "New",
    rating: 4,
  },
  {
   
    name: "Watch",
    price: 30.5,
    image: "/images/watch.png",
    description: "Smart watch silver color modern",
    category: "Accessories",
    condition: "New",
    rating: 4,
  },
  {
    
    name: "Claypot",
    price: 12.0,
    image: "/images/claypot.png",
    description: "Claypot for cooking",
    category: "Accessories",
    condition: "Used",
    rating: 3,
  },
  {
    
    name: "Kettle",
    price: 20.5,
    image: "/images/kettle.png",
    description: "Brown winter coat medium size",
    category: "Accessories",
    condition: "New",
    rating: 5,
  },
  {
   
    name: "Camera",
    price: 15.0,
    image: "/images/camera.png",
    description: "Canon camera black, 100x zoom",
    category: "Cameras",
    brand: "Canon",
    condition: "New",
    rating: 4,
  },
  {
    
    name: "Hedphone",
    price: 18.5,
    image: "/images/headphone.png",
    description: "Headset for gaming with mic",
    category: "Headphones",
    condition: "New",
    rating: 4,
  },
  {
  
    name: "Blue Jacket",
    price: 15.0,
    image: "/images/blueJacket.png",
    description: "Headset for gaming with mic",
    category: "Accessories",
    condition: "Used",
    rating: 5,
  },
  {
   
    name: "Samsung",
    price: 80.0,
    image: "/images/mobile.png",
    description: "Headset for gaming with mic",
    category: "Smartphones",
    brand: "Sony",
    condition: "New",
    rating: 4.5,
  },
  {
   
    name: "Laptop",
    price: 50.5,
    image: "/images/laptop.png",
    description: "Headset for gaming with mic",
    category: "Laptops",
    brand: "Apple",
    condition: "Used",
    rating: 4.5,
  },
  {
    
    name: "Lamp",
    price: 20.0,
    image: "/images/lamp.png",
    description: "Headset for gaming with mic",
    category: "Accessories",
    condition: "New",
    rating: 4,
  },
  {
   
    name: "Coffee Machine",
    price: 35.5,
    image: "/images/coffeMachine.png",
    description: "Headset for gaming with mic",
    category: "Accessories",
    condition: "New",
    rating: 5,
  },
  {
    
    name: "Juice Machine",
    price: 30.0,
    image: "/images/juiceMachine.png",
    description: "Headset for gaming with mic",
    category: "Accessories",
    condition: "Used",
    rating: 4,
  },
];
const importData = async () => {
  try {
    await connectDB();

    await Product.deleteMany(); // clear old data

    await Product.insertMany(products);

    console.log("Data Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();


