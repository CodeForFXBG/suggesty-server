module.exports = {
	findSuggestions : function(latitude, longitude, callback){
    	Suggestions.find({}).exec(function findCB(err, found){
	      callback(found);
	    });
	}
};