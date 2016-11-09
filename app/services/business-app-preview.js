import Ember from 'ember';

export default Ember.Service.extend({
  businesses: [],

  add(params) {
    this.set('businesses', params);
  }
});
