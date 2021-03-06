/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


  // Lister les utilisateurs.
  list: function(req, res) {
    User.find({}).exec(function(error, users) {
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

    User.create({
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
    User.destroy({ id : req.params.id }).exec(function(error){
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction delete des utilisateurs.'});
      }

      res.redirect('/users/list');
    });

    return false;
  },


  // Page pour éditer un utilisateur.
  edit: function(req,res) {
    User.findOne({ id : req.params.id }).exec(function(error, user) {
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction edit des utilisateurs.'});
      }

      res.view('users/edit', {user:user});
    })
  },

  // Page pour voir la liste d'arrivée d'un utilisateur.
  show: function(req,res) {
    User.findOne({ id : req.params.id }).populate('arrivals').exec(function(error, user) {
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction show des utilisateurs.'});
      }

      res.view('users/show', {user:user});
    })
  },


  // Mettre à jour un utilisateur.
  update: function(req, res) {
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let email = req.body.email;
  let password = req.body.password;

  User.update({id: req.params.id},
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

