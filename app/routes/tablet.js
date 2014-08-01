import DS from 'ember-data';
import Ember from 'ember';
import Tablet from 'data-sheet-app/models/tablet';

var TabletRoute = Ember.Route.extend({
  model: function () {
    return Tablet;
  }
});

export default TabletRoute;
