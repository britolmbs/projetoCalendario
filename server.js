require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifieldTopology: true, useFindAndModify: false})
.then(() => {
    app.emit('pronto');
})
.catch(e => console.log(e));
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middlewares');

app.use(helmet());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(flash());

app.set('view', path.resolve(__dirname, 'src', 'view'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto',  () => {
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
});
});

