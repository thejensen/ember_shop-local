import Ember from 'ember';
// import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
//
// export default Ember.Route.extend(ApplicationRouteMixin);

export default Ember.Route.extend({
  actions: {
    transitionToAppConfirmation() {
      this.transitionTo('app-confirmation');
      console.log('hi, transitionToAppConfirmation is called but gdmt')
    }
  }
});
