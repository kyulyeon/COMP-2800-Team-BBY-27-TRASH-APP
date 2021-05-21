const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true},
    score: { type: number, required: true }
}, 
{
    collection: 'userScores'
}
);

const modelUser = mongoose.model('userScores', scoreSchema);

module.exports = modelUser;