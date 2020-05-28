const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { 
    logErrors, 
    errorHandler, 
    wrapErrors 
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//Body parser
app.use(express.json());

//Routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

//Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});

// process.on('SIGINT', () => {
//     console.log('Señal que utiliza Nodemon => procces.exit()');
//     process.exit();
// });