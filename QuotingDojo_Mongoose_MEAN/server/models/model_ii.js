// Require Mongoose
const mongoose = require('mongoose');

//create schema
const Model_ii_Schema = new mongoose.Schema({
    name:  { type: String, required: true},
    quote: { type: String, required: true},
}, {timestamps: true }); 

//create model
const Submodel = mongoose.model('submodel', Model_ii_Schema);
// create model methods (logic)
const Model_ii_Model = {
    createQuote: function(quote){
        return Submodel.create(quote);
    },
    getAllQuotes: function(){
        return Submodel.find();
    }
};


// exportar modelo
module.exports = {Model_ii_Model};
