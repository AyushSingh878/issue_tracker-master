const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ayushsingh4y:IRRWs0Ux3qGCh9MU@cluster0.xdciasq.mongodb.net/Issue?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('-->Connected to Database :: MongoDB<--');
});

module.export = db;
