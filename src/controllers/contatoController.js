const Contato = require('../models/ContatoModel');
exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    });
}

exports.register =  async (req, res) => {
    try{
        const contato = new Contato(req.body);
        await contato.register();
        if(contato.errors. length > 0) {
          req.flash('errors', contato.errors);
          req.session.save(() => res.redirect('back'));
          return;
        }
        req.flash('success', 'Contato Criado');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;

    } catch (e){
       return res.render('404')
    }
  
};

exports.editIndex = async function(req, res) {
    if(!req.params.id) return res.render('404');
    const user = await Contato.buscaPorId(req.params.id);
    if(!user) return res.render('404');
    res.render('contato', {
        contato: user
    });
};

exports.edit = async function(req, res) {
    if(!req.params.id) return res.render('404');
    
};