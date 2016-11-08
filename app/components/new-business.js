import Ember from 'ember';

export default Ember.Component.extend({
  addNewBusiness: false,
  actions: {
    businessFormShow() {
      this.set('addNewBusiness', true);
    },

    saveBusiness() {
      var params = {
        name: this.get('name'),
        hours: this.get('hours'),
        address1: this.get('addr1'),
        address2: this.get('addr2'),
        city: this.get('city'),
        state: parseInt(this.get('state')),
        zip: this.get('zip'),
        phone: this.get('phone'),
        image: this.get('image'),
        yearsInBusiness: this.get('yearsInBusiness'),
        description: this.get('description'),
        website: this.get('website'),
        category: this.get('category')
      };
      this.set('addNewBusiness', false);
      this.sendAction('saveBusiness', params);
    }
  }
});
