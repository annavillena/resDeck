const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    UserRouter = require('../routes/UserRouter'),
    exampleRouter = require('../routes/examples.server.routes');
    fileUpload = require('express-fileupload');
    cors = require('cors');

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    app.use(cors());

    app.use(fileUpload());

    // Upload Endpoint
    app.post('/upload', (req, res) => {
        if (req.files === null) {
            return res.status(400).json({ msg: 'No file uploaded' });
        }

        const file = req.files.file;

        file.mv(`./client/src/uploads/${file.name}`, err => {
            if (err) {
            console.error(err);
            return res.status(500).send(err);
            }

            res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
        });
    });

    // app.get('/next', (req, res) => {
    //     fs.readdirSync(req.folderPath).forEach(file => {
    //         console.log(file);
    //     });
    // });

    // add a router
    app.use('/api/users', UserRouter);
    app.use('/api/example', exampleRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

