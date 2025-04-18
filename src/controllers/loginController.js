const Login = require('../models/LoginModel')
exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {
    try{
    const login = new Login(req.body);
    await login.register();
    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(function() {
          return res.redirect('back');
        });
        return;
    }
    req.flash('success', 'Seu Usuario foi Criado com Sucesso');
    req.session.save(function() {
        return res.redirect('back');
    });

      return  res.send(login.errors);
    } catch(e){
       return  res.render('404');
    }
    };

    exports.login = async (req, res) => {
        try{
            const login = new Login(req.body);
            await login.login()

        } catch(e) {

        }
    };

  

