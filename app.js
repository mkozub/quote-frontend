const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Avangrid!");
});
 
module.exports.app = app;
