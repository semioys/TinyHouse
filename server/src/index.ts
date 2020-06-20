import express from 'express';
import bodyParser from 'body-parser';
import { listings } from './listings';

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Hello world!!');
});

app.get('/listings', (_req, res) => {
  return res.send(listings);
});

app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;

  for (let i = listings.length - 1; i >= 0; i--) {
    console.log(id)
    console.log(listings[i].id)
    if (listings[i].id == id) {
      return res.send(listings.splice(i, 1));
    }
  }
  
  return res.send('Failed to delete listing')
});

app.listen(PORT);

console.log(`[app]: http://localhost:${PORT}`);
