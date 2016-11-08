import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(business) {
      if (confirm('Are you sure you want to delete this business?')) {
        this.sendAction('destroyBusiness', business);
      }
    }
  }
});
