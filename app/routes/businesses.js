import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('business', params.businesses_id);
  },
  actions: {
    // debugger;
    update(business, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          business.set(key,params[key]);
        }
      });
      business.save();
      this.transitionTo('businesses', business);
    },
    destroyBusiness(business) {
      business.destroyRecord();
      this.transitionTo('index');
    }
  }
});
