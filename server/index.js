import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const port = process.env.PORT || 9001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/nyumba', { useNewUrlParser: true } );

app.use('/api', router);

app.listen(port,() => {
  console.log(`App Server Running at ${port}`);
});
