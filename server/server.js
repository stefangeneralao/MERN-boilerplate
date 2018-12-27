import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient, ObjectId } from 'mongodb';
import uri from './dbConnectionString.json';

const app = express();
const port = 3001;
const client = new MongoClient(uri, { useNewUrlParser: true });

(async () => {
  await client.connect()
    .then(() => {
      console.log('Connected to MongoDB.');
    })
    .catch(() => {
      console.log('Failed to connect to MongoDB.');
    });
  const db = client.db('db');

  app.use(cors());
  app.use(bodyParser.json());

  app.get('/', (_req, res) => {
    res.sendStatus(200);
  });

  app.get('/notes', async (_req, res) => {
    db.collection('notes')
      .find({})
      .toArray((err, notes) => {
        if (err) {
          res.sendStatus(500);
        }
        console.log('notes', notes);
        res.status(200).send(notes);
      });
  });

  app.post('/note', (req, res) => {
    const { title } = req.body;
    if (!title) {
      res.status(400).send('Empty body');
      return;
    }
    db.collection('notes')
      .insertOne({
        title,
        items: [],
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  });

  app.post('/noteitem', (req, res) => {
    const { noteId, label } = req.body;
    db.collection('notes')
      .findOne({
        _id: new ObjectId(noteId),
      })
      .then((result) => {
        db.collection('notes')
          .updateOne(
            { _id: new ObjectId(result._id) },
            { $set: { items: [ ...result.items, { label, completed: false } ] } }
          )
          .then(() => {
            res.sendStatus(200);
            return;
          })
          .catch(() => {
            res.status(500).send('Database failure');
            return;
          });
      });
  })

  app.listen(port, () => {
    console.log(`Listening to port ${ port }.`);
  });
})();