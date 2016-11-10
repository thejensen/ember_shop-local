import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    update(business) {
      var params = {
        name: this.get('name'),
        hours: this.get('hours'),
        addr1: this.get('addr1'),
        addr2: this.get('addr2'),
        city: this.get('city'),
        state: this.get('state'),
        zip: this.get('zip'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        phone: this.get('phone'),
        image: this.get('image'),
        yearsInBusiness: this.get('yearsInBusiness'),
        description: this.get('description'),
        website: this.get('website')
      };
      this.set('isShowingModal', false);
      this.sendAction('update', business, params);
    },
    cancelBusinessForm() {
      this.set('isShowingModal', false);
    }
  }
});
