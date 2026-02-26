require('dotenv').config();
const express=require('express');
const connectDB=require('./config/db');
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
res.send('API is running')
})
const startServer = async () => {
  try {
    await connectDB();  // wait for DB connection
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);
startServer();