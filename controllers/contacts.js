//get our database connection
const mongodb = require('../data/database');

//declare a variable
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts)  => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);

    });


};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: userId});
    result.toArray().then((contacts)  => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);

    });
//declare constant variable that connects to the database

};

module.exports = {
    getAll,
    getSingle
};