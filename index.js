const express = require('express');
const app = express();
const PORT = process.env.PORT
const monggose = require('./database/database');
const authRoute = require('./routes/authRoute');
const workoutRoute = require('./routes/workoutRoute');
const goalRoute = require('./routes/goalRoute');
const adminRoute = require('./routes/adminRoute');
const { verifyToken , checkAdmin } = require('./middleware/authMiddleware')
const cookieparser = require('cookie-parser');
const dotenv = require('dotenv');


dotenv.config();

app.use(cookieparser())
app.use(express.json())

// api end points
app.use('/',authRoute);
app.use('/workout', verifyToken ,workoutRoute);
app.use('/goal', verifyToken ,goalRoute);
app.use('/admin', verifyToken , checkAdmin ,adminRoute);

app.listen(PORT,(req,res) =>{
    console.log(`Server is running om this port ${PORT}`);    
}) 