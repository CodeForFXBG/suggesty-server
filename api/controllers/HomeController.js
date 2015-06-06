/**
 * SuggestionsController
 *
 * @description :: Server-side logic for managing suggestions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  index: function (req, res) {
		SuggestionFinder.findSuggestions(0, 0, function(suggestions){
			return res.view('homepage', {
				'suggestions': suggestions
				});
		});
  	}
};

