const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataFile = path.join(__dirname, '../data/products.json');

function readData() {
  const json = fs.readFileSync(dataFile, 'utf-8');
  return JSON.parse(json);
}

function writeData(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

router.get('/', (req, res) => {
  const products = readData();
  res.json(products);
});

router.post('/', (req, res) => {
  const products = readData();
  const newProduct = req.body;
  newProduct.id = Date.now().toString();
  products.push(newProduct);
  writeData(products);
  res.status(201).json(newProduct);
});

module.exports = router;
