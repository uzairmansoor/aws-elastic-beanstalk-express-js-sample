const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Congratulations! This deployment is done through CodePipeline on Elastic Beantsalk!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
