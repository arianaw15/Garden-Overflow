const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// } else {
//   app.use(express.static("client"));
// }
// Add routes, both API and view
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/garden-overflow");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});