const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


sequelize.sync().then(() => {
    app.listen(PORT, () => 
        console.log(`Now listening at https://localhost:${PORT}`))
    });