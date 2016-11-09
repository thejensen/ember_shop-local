import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: "/"});
  this.route('categories', {path: "/categories/:category_id"});
  this.route('businesses', {path: "/businesses/:businesses_id"});
  this.route('faq');
  this.route('login');
  this.route('protected');
  this.route('app-confirmation');
  this.route('businessList');
});

export default Router;
