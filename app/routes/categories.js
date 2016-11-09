import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('category', params.category_id);
  },

  actions: {
    saveBusiness(params) {
      console.log(params);
      var newBusiness = this.store.createRecord('business', params);
      var category = params.category;
      console.log(category);
      category.get('businesses').addObject(newBusiness);
      newBusiness.save().then(function() {
        return category.save();
      });
      this.transitionTo('categories', category);
    }
  }
});
