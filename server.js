const express = require("express");
const axios = require('axios');
const app = express();
const port = 3000;


axios.get(url)
    .then(res => {
      const data = res.data;
      const cityName = data.name;
      const temperature = data.main.temp;
    })

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});


app.get("/weather", (req, res) => {
  const city = req.query.city;
  res.render("index", { weather: null, error: null });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});