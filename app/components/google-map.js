import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(business) {
      var map = this.get('map');
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(business.latitude, business.longitude),
        zoom: 15
      };
      map.findMap(container, options);
    }
  }
});
