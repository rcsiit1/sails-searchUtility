/**
 * Csvtodatabase.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    address: {
      type: 'string'
    },
    lat: {
      type: 'number'
    },
    long: {
      type: 'number'
    },

  },
  datastore: 'mongodb'

};

