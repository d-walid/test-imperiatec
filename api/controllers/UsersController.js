/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


  // Lister les utilisateurs.
  list: function(req, res) {
    Users.find({}).exec(function(error, users) {
      if(error) {
        res.send(500, {error: 'Erreur dans la fonction list des utilisateurs.'});
      }

      res.view('users/users', {users:users});
    });
  },


  // Page pour ajouter un utilisateur.
  add: function(req, res) {
    res.view('users/add')
  },


  // Créer un utilisateur.
  create: function(req,res) {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let email = req.body.email;
    let password = req.body.password;

    Users.create({
      nom:nom, 
      prenom:prenom, 
      email:email, 
      password:password
      }).exec(function(error) {
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction create des utilisateurs.'});
      }

      res.redirect('/users/list');
    });
  },


  // Supprimer un utilisateur.
  delete: function(req, res) {
    Users.destroy({ id : req.params.id }).exec(function(error){
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction delete des utilisateurs.'});
      }

      res.redirect('/users/list');
    });

    return false;
  },


  // Page pour éditer un utilisateur.
  edit: function(req,res) {
    Users.findOne({ id : req.params.id }).exec(function(error, users) {
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction edit des utilisateurs.'});
      }

      res.view('users/edit', {users:users});
    })
  },


  // Mettre à jour un utilisateur.
  update: function(req, res) {
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let email = req.body.email;
  let password = req.body.password;

  Users.update({id: req.params.id},
    {nom:nom, 
    prenom:prenom, 
    email:email, 
    password:password})
    .exec(function(error) {
    if (error) {
      res.send(500, {error: 'Erreur dans la fonction update des utilisateurs.'});
    }

    res.redirect('/users/list');
  });

  return false;
  },
  
};

