/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    nom: {
      type: 'string',
      required: true
    },
    prenom: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      encrypt: true
    },
    arrivals: {
      collection: 'arrival',
      via: 'owner'
    }
  },
  
  datastore: 'imperiatec',
  tableName: 'users'

};

