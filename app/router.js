import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  // rootUrl: this.route('home')
  beforeModel() {
    this.replaceWith('home');
  },
});

Router.map(function() {
  this.route('home');
  this.route('notice');
  this.route('cooperation');
  this.route('device');
  this.route('people');
  this.route('personal');
  this.route('login');
  this.route('register');
});

export default Router;
