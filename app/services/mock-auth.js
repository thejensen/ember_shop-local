import Ember from 'ember';

export default Ember.Service.extend({
  users: [],

  add(params) {
    console.log(params);
    this.set('users', params);
  }
});
