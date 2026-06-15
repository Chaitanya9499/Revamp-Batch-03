const express = require('express');
const dotenv = require('dotenv');

const env = process.argv[2] || "devolopment";
dotenv.config({ path: '.env.${env}' });

const app = express();

const PORT = process.env.PORT;
const APP = process.env.APP;
	
app.get('/' , (req, res) => {
	res.send("Hello from NodeJs App" + APP);
});

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
       
});
