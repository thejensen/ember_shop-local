import Ember from 'ember';

export default Ember.Service.extend({
  businesses: [],

  add(params) {
    this.get('businesses').pushObject(params);
    console.log(this.get('businesses'));
  }
});
