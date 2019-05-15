import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import dotenv from 'dotenv';
import router from './routes'

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(passport.initialize());
app.use('/api', router);

const port = process.env.PORT;

mongoose.Promise = global.Promise;
mongoose.connect( process.env.DATABASE_URL, { useNewUrlParser: true } );

app.listen(port, () => console.log(`Server up and running on port ${port} !`));