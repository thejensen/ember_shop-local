import Ember from 'ember';

export default Ember.Service.extend({
  businesses: [],

  add(params) {
    this.set('businesses', params);
    console.log(this.get('businesses'));
  }
});
