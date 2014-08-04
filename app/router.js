import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DataSheetAppENV.locationType
});

Router.map(function() {
  this.resource('wacom', function () {
    this.resource('wacomwriter', {path: '/:writer_id'}, function () {
      this.resource('wacomlabel', {path: '/:labels_id'});
    });
  });
  this.resource('tablet', function () {
    this.resource('tabletwriter', {path: '/:writer_id'}, function () {
      this.resource('tabletlabel', {path: '/:labels_id'});
    });
  });
  this.resource('pressure', function () {
    this.resource('pressurewriter', {path: '/:writer_id'}, function () {
      this.resource('pressurelabel', {path: '/:labels_id'});
    });
  });
});

export default Router;
