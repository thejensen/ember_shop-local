import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      businesses: this.store.findAll('business'),
      categories: this.store.findAll('category')
    });
  }
});
