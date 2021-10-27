import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send("Hello world! from knightSarai")
})

app.listen("8080", () => console.log("App on port 8080"))
