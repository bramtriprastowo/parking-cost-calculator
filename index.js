require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const routerApi = require('./src/routes/api');
const routerView = require('./src/routes/view');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/v1', routerApi);
app.use('/', routerView);

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => console.log(`Server: http://localhost:${PORT}`));