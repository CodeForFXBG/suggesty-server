/**
 * SuggestionsController
 *
 * @description :: Server-side logic for managing suggestions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  index: function (req, res) {
    	return res.view('homepage', {
			    "id": "0001",
			    "latitude": 38.3018,
			    "longitude": -77.4708,
			    "description": "This is the first suggestion, you guys should be able to see it",
			    "createdAt": "2015-06-06T17:53:15.448Z",
			    "updatedAt": "2015-06-06T17:53:15.448Z"
		});
  	}
};

