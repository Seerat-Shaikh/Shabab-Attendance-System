const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
//const app = express();
//const jwt = require('jsonwebtoken');



// middleware
app.use(express.static('public'));


// view engine
app.set('view engine', 'ejs');

//databse connection
const dbURI = 'mongodb+srv://data70:api107@cluster0.vk5gxdo.mongodb.net/Attendance';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err)); 

//routes
app.get('/api', (req, res) => {
    res.json({
        message: 'hi'
    });
});

//app.listen(3000, () => console.log('server started'));

app.use(authRoutes);
