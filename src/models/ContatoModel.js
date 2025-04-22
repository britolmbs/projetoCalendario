const mongoose = require('mongoose');
const ContatoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

contato.prototype.register = function() {
    this.valida();
};
Contato.prototype.valida = function() {
    this.cleanUp();

    if(!validator.isEmail(this.body.email)) this.errors.push('Email invalido')
}

cleanUp() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
}

module.exports = Contato;