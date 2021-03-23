/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /*
  *** ROUTES USERS. ***
  */

  // Route de listing.
  'users/list': {
    controller: 'UsersController',
    action: 'list'
  },

  // Route d'ajout.
  'users/add': {
    controller: 'UsersController',
    action: 'add'
  },

  // Route pour créer.
  'users/create': {
    controller: 'UsersController',
    action: 'create'
  },

  // Route pour supprimer.
  '/users/delete/:id' : {
    controller: 'UsersController',
    action: 'delete',
  },

  // Route pour éditer.
  '/users/edit/:id' : {
    controller: 'UsersController',
    action: 'edit',
  },

  // Route pour mettre à jour.
  '/users/update/:id' : {
    controller: 'UsersController',
    action: 'update',
  },


  /*
  *** ROUTES ARRIVALS. ***
  */
  
  // Route de listing.
  'arrivals/list' : {
    controller: 'ArrivalsController',
    action: 'list',
  },
  
  // Route d'ajout.
  'arrivals/add' : {
    controller: 'ArrivalsController',
    action: 'add'
  },

  // Route pour créer.
  'arrivals/create' : {
    controller: 'ArrivalsController',
    action: 'create'
  },

  // Route pour supprimer.
  '/arrivals/delete/:id' : {
    controller: 'ArrivalsController',
    action: 'delete'
  },

  // Route pour éditer.
  '/arrivals/edit/:id' : {
    controller: 'ArrivalsController',
    action: 'edit'
  },

  // Route pour mettre à jour.
  '/arrivals/update/:id' : {
    controller: 'ArrivalsController',
    action: 'update'
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
