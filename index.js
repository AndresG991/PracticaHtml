import express from "express"

const app = express();

app.use(express.static("public"));

app.listen(8080, console.log("http://127.0.0.1:8080"));