import Ember from 'ember';

export default Ember.Component.extend({
  mockAuth: Ember.inject.service(),

  actions: {
    signUp() {
      var params = {
        email: this.get('email'),
        password: this.get('password'),
      };
      this.get('mockAuth').add(params);
      this.set('addBusinessButton', true);
      console.log('ugh');
    }
  }
});
