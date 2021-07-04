import express from 'express';
import routes from './routes/routes'

const app = express();
const port = 3000;

//server configuration
app.listen(port, () => {
  console.info(`Server started and listen to port: ${port}`);
})

app.get('/', (req, res) => {
  res.send('<h1>Main Route</h1>')
})

app.use('/api', routes)