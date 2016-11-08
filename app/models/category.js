import DS from 'ember-data';

export default DS.Model.extend({
  categoryName: DS.attr(),
  businesses: DS.hasMany('business', {async: true})
});
