import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY';
  return Ember.$.getJSON(url).then(function(responseJSON) {
    return responseJSON.results;
  });
 }
});
