import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    saveBusiness() {
      this.set('isShowingModal', false);
      this.set('name', "");
      this.set('hours', "");
      this.set('addr1', "");
      this.set('addr2', "");
      this.set('phone', "");
      this.set('zip', "");
      this.set('yearsInBusiness', "");
      this.set('description', "");
      this.set('website', "");
    },
    cancel() {
      this.toggleProperty('isShowingModal');
    }
  }
});
