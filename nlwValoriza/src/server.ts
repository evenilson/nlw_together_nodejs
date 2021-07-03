import express, { request, response } from "express";

const app = express();

app.get('/test', (request, response) => {
  return response.send("ola nlw");
})

app.post('/test-post', (request, response) => {
  return response.send("ola nlw post");
})

app.listen(3001, () => console.log('Server is running'));