/**
 * Arrivals.js
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
    arrival_date: {
      type: 'string',
      required: true
    },
    appointment: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
  },

  datastore: 'imperiatec',
  tableName: 'arrivals'

};

