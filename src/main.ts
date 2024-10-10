import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import { router } from './controllers';
dotenv.config(); 

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', router);  

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
