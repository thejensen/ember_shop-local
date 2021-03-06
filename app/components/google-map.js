import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(business) {
      this.$('.map-display').show();
      var container = this.$('.map-display')[0];
      console.log(this.$('.map-display')[0]);
      var options = {
        center: this.get('map').center(business.get('latitude'), business.get('longitude')),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});
