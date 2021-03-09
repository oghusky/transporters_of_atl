require("dotenv").config();
const express = require("express"),
  app = express(),
  path = require("path"),
  expressLayouts = require("express-ejs-layouts"),
  PORT = process.env.PORT || 3000;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ejs setup
app.set("view engine", "ejs");

// import routes
const landingRoutes = require("./routes/landingRoutes");

// use routes
app.use("/", landingRoutes);

// port to listen on
app.listen(PORT, () => {
  console.log('http://localhost:3000')
})