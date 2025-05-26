const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataFile = path.join(__dirname, '../data/prices.json');

function readData() {
  const json = fs.readFileSync(dataFile, 'utf-8');
  return JSON.parse(json);
}

function writeData(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

router.get('/', (req, res) => {
  const prices = readData();
  res.json(prices);
});

router.post('/', (req, res) => {
  const prices = readData();
  const newPrice = req.body;
  newPrice.id = Date.now().toString();
  prices.push(newPrice);
  writeData(prices);
  res.status(201).json(newPrice);
});

module.exports = router;
