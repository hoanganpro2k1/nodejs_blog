import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import route from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes init
route(app);

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
