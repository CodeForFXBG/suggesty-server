/**
* Suggestions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      required: true,
      unique: true,
      autoIncrement: true
    },

    description: {
      type: 'string',
      required: true
    },

    type: {
      type: 'string',
      enum: ['Traffic', 'Landscaping', 'Maintenance', 'Litter', 'Other'],
      defaultsTo: 'Other'
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

