import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import uri from './dbConnectionString.json';
import notesRouter from './routes/notes';
import mongoose from 'mongoose';

// Fix warning: "(node:23061) DeprecationWarning: collection.findAndModify is deprecated."
mongoose.set('useFindAndModify', false);

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', notesRouter);

// Connect to MongoDB Cloud and start server
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('Failed to connect to MongoDB Cloud.');
  } else {
    console.log('Connected to MongoDB Cloud.');
    
    app.listen(port, () => {
      console.log(`Listening to port ${ port }.`);
    });
  }
});