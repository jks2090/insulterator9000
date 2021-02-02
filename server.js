const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const axios = require('axios')
const app = express()
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton', 'assload')

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('client/build'))

mongoose.connect(
<<<<<<< HEAD
    process.env.MONGODB_URI || "mongodb://localhost/insulterator9000",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
);

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});
=======
  process.env.MONGODB_URI || 'mongodb://localhost/insulterator9000',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)

const connection = mongoose.connection

connection.on('connected', () => {
  console.log('Mongoose successfully connected!')
})

connection.on('error', err => {
  console.log('Mongoose connection error: ', err)
})

axios
  .get('https://insult.mattbas.org/api//insult.json?who=sponge+bob', {})
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })

app.get('/api/config', (req, res) => {
  res.json({
    success: true
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})
>>>>>>> 8015bb1f5cceba01b14a848e9043abc11f26b4cc

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
