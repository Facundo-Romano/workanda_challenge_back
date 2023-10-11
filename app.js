import express from 'express';
import routes from './src/routes/index.js';
import cors from 'cors';
import 'dotenv/config.js';
import { sequelize } from './src/database/config.js';

const app = express();
const port = process.env.PORT;

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


//Sequelize connection
sequelize.authenticate()
.then(() => {
	console.log('Db connected successfully')
})
.catch((err) => {
	console.log('Error connecting to db')
	throw new Error(err);		
});

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
  console.log('Connecting to db...');
});
