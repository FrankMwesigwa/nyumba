import express from 'express';
import { connect } from 'mongoose';
import { urlencoded, json } from 'body-parser';
import router from './routes';
import { mongoURI as db } from './config/keys';

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

connect(db, { useNewUrlParser: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('MongoDB successfully connected'))
  // eslint-disable-next-line no-console
  .catch(err => console.log(err));

app.use(router);
const port = process.env.PORT || 9000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
