/**
 * SuggestionsController
 *
 * @description :: Server-side logic for managing suggestions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  index: function (req, res) {
		var suggestions = SuggestionFinder.findSuggestions(0, 0);
    	return res.view('homepage', {
			'suggestions': suggestions
		});
  	}
};

