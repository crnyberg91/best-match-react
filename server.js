const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));
require("./app/routing/apiRoutes.js")(app);



// app.get('/', (req, res) => res.send('Hello World!'));


app.listen(PORT, function() {
	console.log("app listening on: http://localhost" + PORT);
});
