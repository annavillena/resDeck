//const express = require('./config/express.js')

// // Use env port or default
// const port = process.env.PORT || 5000;

// const app = express.init()
// app.listen(port, () => console.log(`Server now running on port ${port}!`));

const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 5000;

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`./client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(port, () => console.log('Server Started...'));