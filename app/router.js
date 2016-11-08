import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: "/"});
  this.route('categories', {path: "/categories/:category_id"});
  this.route('businesses', {path: "/categories/:category_id/businesses/:businesses_id"});
});

export default Router;
