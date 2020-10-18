import express, { json, request, response } from 'express';
import routes from './routes';

const app = express();
app.use(json());

app.get('/', (request, response) => {
  response.json({ message: 'Hello World' });
});

app.listen(3333, () => {
  console.log('🚀 Back-end GoBarber started');
});
