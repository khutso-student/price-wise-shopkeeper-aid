const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/products');
const pricesRoutes = require('./routes/prices');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productsRoutes);
app.use('/api/prices', pricesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
