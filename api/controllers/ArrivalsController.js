/**
 * ArrivalsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  

  // Lister les arrivées
  list: function(req, res) {
    Arrival.find({}).exec(function(error, arrivals) {
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction list des arrivées'});
      }

      res.view('arrivals/arrivals', {arrivals:arrivals});
    });
  },


  // Page pour ajouter une arrivée.
  add: function(req, res) {
    let userID = req.query.userid;
    res.view('arrivals/add', {userID:userID});
  },


  // Créer une arrivée.
  create: function(req, res) {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let arrival_date = req.body.arrival_date;
    let appointment = req.body.appointment;
    let email = req.body.email;
    let owner = req.body.owner;

    Arrival.create({
      nom:nom,
      prenom:prenom,
      arrival_date:arrival_date,
      appointment:appointment,
      email:email,
      owner:owner
      }).exec(function(error) {
        if (error) {
          res.send(500, {error: 'Erreur dans la fonction create des arrivées.'});
        }

        res.redirect('/arrivals/list');
      });
  },


  // Supprimer une arrivée.
  delete: function(req, res) {
    Arrival.destroy({ id : req.params.id }).exec(function(error) {
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction delete des arrivées.'});
      }

      res.redirect('/arrivals/list')
    });

    return false;
  },


  // Page pour éditer une arrivée.
  edit: function(req,res) {
    Arrival.findOne({ id : req.params.id }).exec(function(error, arrivals) {
      if (error) {
        res.send(500, {error: 'Erreur dans la fonction edit des arrivées.'});
      }

      res.view('arrivals/edit', {arrivals:arrivals})
    })
  },


  // Mettre à jour une arrivée.
  update: function(req, res) {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let arrival_date = req.body.arrival_date;
    let appointment = req.body.appointment;
    let email = req.body.email;

    Arrival.update({id: req.params.id},
      {nom:nom,
      prenom:prenom,
      arrival_date:arrival_date,
      appointment:appointment,
      email:email
      }).exec(function(error) {
        if (error) {
          res.send(500, {error: 'Erreur dans la fonction update des arrivées.'});
        }

        res.redirect('/arrivals/list');
      });

      return false;
  },
};

