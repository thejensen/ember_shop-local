import Ember from 'ember';

export default Ember.Route.extend({


  actions: {
    saveBusiness(params) {
      var newBusiness = this.store.createRecord('business', params);
      newBusiness.save();
      this.transitionTo('categories', category);
    }
  }
});
