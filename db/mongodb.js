const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tortuga-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log(`MongoDB Connected..`))
.catch(err => console.log(err))