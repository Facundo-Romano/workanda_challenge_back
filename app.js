import express from 'express';
import routes from './src/routes/index.js';
import cors from 'cors';
import 'dotenv/config.js';

const app = express();
const port = 3000;

const allowedOrigins = ['https://example.com', 'http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  }
};

//CORS options
app.use(cors(corsOptions));
app.options('*', cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//Routes
app.use('/', routes);


app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
