const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

//1 /shout?name=John
app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCase = name.toUpperCase();
  res.send(upperCase);
});

//2 /fullname?firstname=supravat&lastname=sarkar
app.get('/fullname', (req, res) => {
  let { firstname, lastname } = req.query;
  res.send(`${firstname} ${lastname}`);
});

//3 /date?month=Jan&year=2024
app.get('/date', (req, res) => {
  let { month, year } = req.query;
  let date = `${month}, ${year}`;
  res.send(date);
});

//4 /greet?name=Tanay
app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greet = 'Namaste, ' + name + '!';
  res.send(greet);
});

//5 /adress?street=123+Kalitola+722202&city=Kolkata&state=West+Bengal
app.get('/address', (req, res) => {
  let { street, city, state } = req.query;
  let address = `${street}, ${city}, ${state}`;
  res.send(address);
});

//6 /email?username=john&domain=example.com
app.get('/email', (req, res) => {
  let { username, domain } = req.query;
  let email = `${username}@${domain}`;
  res.send(email);
});

// BD 1.2

// /total-distance?distance1=20&distance2=50
app.get('/total-distance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});

// /final-price?price=34&discount=10&tax=2
function calculateFinalPrice(price, discount, tax) {
  let priceAfterDiscount = price - (price * discount) / 100;
  let finalPrice = priceAfterDiscount + (priceAfterDiscount * tax) / 100;
  return finalPrice;
}
app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(calculateFinalPrice(price, discount, tax).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
