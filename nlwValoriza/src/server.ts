import express, { request, response } from "express";

const app = express();

app.get('/test', (request, response) => {
  return response.send("ola nlw");
})

app.listen(3001, () => console.log('Server is running'));