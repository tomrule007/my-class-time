const express = require('express');
const bodyParser = require('body-parser');

const retrieveClasses = require('./lib/retrieveClasses');
const generateSchedule = require('./lib/generateSchedule');

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/api/generate', async (req, res) => {
  try {
    const userInput = req.body;
    const classes = await retrieveClasses();

    const retval = generateSchedule(userInput, classes);

    res.json({ success: true, data: retval });
  } catch (error) {
    res.json({ success: false, error });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
