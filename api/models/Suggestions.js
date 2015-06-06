/**
* Suggestions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {
      type: 'string',
      require: true,
      unique: true
    },

    description: {
      type: 'string',
      required: true
    },

    latitude: {
      type: 'float',
      required: true
    },

    longitude: {
      type: 'float',
      required: true
    }
  }
};
