const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const users = [
    {id: 1, name: "Umayer1", email: "jhon@example.com"},
    {id: 2, name: "Umayer2", email: "jhon@example.com"},
    {id: 3, name: "Umayer3", email: "jhon@example.com"},
    {id: 4, name: "Umayer4", email: "jhon@example.com"},
    {id: 5, name: "Umayer5", email: "jhon@example.com"},
]

app.get('/', (req, res) => {
  res.send(users)
})

app.get('/about', (req, res) => {
  res.send('Hello World ABOUT')
})

app.get('/product', (req, res) => {
  res.send('Hello World product')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
