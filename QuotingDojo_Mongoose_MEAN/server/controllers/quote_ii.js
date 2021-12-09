const {Model_ii_Model} = require('./../models/model_ii');

const Quote_ii = {
    landingPage : function(request, response){
        response.render('index');

    },
    saveQuote: function(request, response){
        const name = request.body.name;
        const quote = request.body.quote;

        const newQuote = {
            name,
            quote
        }
        Model_ii_Model
        .createQuote(newQuote)
        .then(result => {
            console.log('Si guardo', newQuote);
            response.redirect('/asdf/quotes');
        })
        .catch(err => {
            response.redirect('/');
        })
    },
    getQuotes: function(request, response){
        Model_ii_Model
            .getAllQuotes()
            .then(result => {
                console.log('TODOS LAS QUOTES', result)
                response.render('quotes',{quotes: result});
            })
            .catch(err =>{
                console.log('AL parecer no puedo obtener todas las´quotes');
            })
    }

    
}

module.exports = {Quote_ii};