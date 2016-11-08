import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  hours: DS.attr(),
  addr1: DS.attr(),
  addr2: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zip: DS.attr(),
  phone: DS.attr(),
  image: DS.attr(),
  yearsInBusiness: DS.attr(),
  description: DS.attr(),
  website: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
