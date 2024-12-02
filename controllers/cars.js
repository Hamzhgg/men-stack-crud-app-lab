const Car = require('../models/car');

// Display all cars
exports.index = async (req, res) => {
  const cars = await Car.find();
  res.render('cars/car-index', { cars });
};

// Show form to add a new car
exports.new = (req, res) => {
  res.render('cars/new');
};

// Create a new car
exports.create = async (req, res) => {
  try {
    await Car.create(req.body);
    res.redirect('/cars');
  } catch (error) {
    res.status(500).send('Error creating car: ' + error.message);
  }
};

// Show details of a specific car
exports.show = async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.render('cars/show', { car });
};

// Show form to edit a car
exports.edit = async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.render('cars/edit', { car });
};

// Update a car's details
exports.update = async (req, res) => {
  try {
    await Car.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/cars/${req.params.id}`);
  } catch (error) {
    res.status(500).send('Error updating car: ' + error.message);
  }
};

// Delete a car
exports.destroy = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.redirect('/cars');
  } catch (error) {
    res.status(500).send('Error deleting car: ' + error.message);
  }
};
