let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();
let port = 7500;

 mongoose.connect("mongodb://localhost/contributors", { useNewUrlParser: true });

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require("./controllers/routes.js")(app);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})