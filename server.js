const express = require('express');
const methodOverride = require('method-override');
const connectDB = require('./config/database');
const carsController = require('./controllers/cars');
require('dotenv').config();

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Database connection
connectDB();

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/cars', carsController.index);
app.get('/cars/new', carsController.new);
app.post('/cars', carsController.create);
app.get('/cars/:id', carsController.show);
app.get('/cars/:id/edit', carsController.edit);
app.put('/cars/:id', carsController.update);
app.delete('/cars/:id', carsController.destroy);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
