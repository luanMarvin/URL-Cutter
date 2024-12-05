import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import { router } from './controllers';
import path from 'path';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

// Configurações para o EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para capturar dados do formulário
app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos

app.use('/', router);

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
