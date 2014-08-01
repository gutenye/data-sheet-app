import DS from 'ember-data';
import Ember from 'ember';
import Pressure from 'data-sheet-app/models/pressure';

var PressureRoute = Ember.Route.extend({
  model: function () {
    return Pressure;
  }
});

export default PressureRoute;
