/**
 * Csvtodatabase.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    actor1: {
      type: 'string'
    },
    actor2: {
      type: 'string'
    },
    actor3: {
      type: 'string'
    },
    production: {
      type: 'string'
    },
    release: {
      type: 'string'
    },
    locations: {
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

