import express from 'express'
const app = express();
const { PORT } = process.env;

app.get('/', (req, res) => {
  res.send('Hello world!!')
});

app.listen(PORT)

console.log(`[app]: http://localhost:${PORT}`);
