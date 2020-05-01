const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	// res.send({ response: 'Server is up and running.' }).status(200);
	res.send('<h3>Welcome to Jorroch-Consulting experimental Node.js Backend-Server. It´s up and running.</h3>').status(200);
});

module.exports = router;
