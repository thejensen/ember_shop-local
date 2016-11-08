import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  businesses: DS.hasMany('business', {async: true})
});
