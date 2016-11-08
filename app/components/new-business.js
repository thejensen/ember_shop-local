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
        addr1: this.get('addr1'),
        addr1: this.get('addr2'),
        city: this.get('city'),
        state: this.get('state'),
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
