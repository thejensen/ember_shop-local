import Ember from 'ember';

export default Ember.Component.extend({
  updateBusinessForm: false,
  actions: {
    updateBusinessForm() {
      this.set('updateBusinessForm', true);
    },
    update(business) {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        hours: this.get('hours') ? this.get('hours') : "",
        addr1: this.get('addr1') ? this.get('addr1') : "",
        addr2: this.get('addr2') ? this.get('addr2') : "",
        city: this.get('city') ? this.get('city') : "Portland",
        state: this.get('state') ? this.get('state') : "OR",
        zip: this.get('zip') ? this.get('zip') : "",
        phone: this.get('phone') ? this.get('phone') : "",
        image: this.get('image') ? this.get('image') : "https://dummyimage.com/600x400/000/fff.png&text=??",
        yearsInBusiness: this.get('yearsInBusiness') ? this.get('yearsInBusiness') : "",
        description: this.get('description') ? this.get('description') : "",
        website: this.get('website') ? this.get('website') : ""
      };
      this.set('updateBusinessForm', false);
      this.sendAction('update', business, params);
    },
    cancelBusinessForm() {
      this.set('updateBusinessForm', false);
    }
  }
});
