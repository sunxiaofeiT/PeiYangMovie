import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: '/',
  beforeModel() {
    this.transitionTo('home');
  },
});

Router.map(function() {
  this.route('home');
  this.route('notice', function() {
    this.route('index',{path:'/'});
    this.route('all');
    this.route('my');
  });
  this.route('cooperation', function() {
    this.route('activity');
    this.route('news');
    this.route('askdevice');
  });
  this.route('device', function() {
    this.route('camera');
    this.route('slr');
    this.route('stand');
    this.route('battery');
    this.route('light');
    this.route('stabilizer');
    this.route('live');
  });
  this.route('people', function() {
    this.route('manager');
    this.route('member');
  });
  this.route('personal');
  this.route('login');
  this.route('register');
});

export default Router;
