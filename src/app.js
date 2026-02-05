const express = require('express');

const app = express();
app.use(express.json());

const { config } = require('./configuration/config');
const PORT = config.service.port || 8080;
app.listen(PORT, () => {
    console.log(`Backend iniciado en el puerto: ${PORT}`);
});