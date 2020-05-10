import http from 'http';
import express from 'express';
const app = express();
app.get("/", (_request, response) => {
	console.log(Date.now() + " Ping Received");
	response.sendStatus(200);
});
app.listen(process.env.PORT || 3000);
// Up-time script
setInterval(() => {
	http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
import "./bot"
