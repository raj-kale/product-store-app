import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import ProductRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); //allows us to accept json data in the req.body

app.use("/api/products", ProductRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on http://localhost: ' + PORT);
});


