// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/swiggy-restaurants', async (req, res) => {
  try {
    const swiggyUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.113645&lng=72.8697339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

    const response = await axios.get(swiggyUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0', // Prevents Swiggy from blocking you as a bot
        'Accept': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Swiggy data:', error.message);
    res.status(500).json({ error: 'Failed to fetch Swiggy data' });
  }
});

app.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});


app.get('/swiggy-menu', async (req, res) => {
  const { restaurantId } = req.query;

  if (!restaurantId) {
    return res.status(400).json({ error: 'Missing restaurantId query parameter' });
  }

  const menuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.113645&lng=72.8697339&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

  try {
    const response = await axios.get(menuUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Swiggy menu:', error.message);
    res.status(500).json({ error: 'Failed to fetch Swiggy menu data' });
  }
});

app.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});
