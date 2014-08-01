import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DataSheetAppENV.locationType
});

Router.map(function() {
  this.resource('wacom', function () {
    this.resource('wacomwriter', {path: '/:wacom_id'});
  });
  this.resource('tablet', function () {
    this.resource('tabletwriter', {path: '/:tablet_id'});
  });
  this.resource('pressure', function () {
    this.resource('pressurewriter', {path: '/:pressure_id'});
  });
});

export default Router;
