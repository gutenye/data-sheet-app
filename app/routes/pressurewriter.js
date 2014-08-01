import Pressure from 'data-sheet-app/models/pressure';

var PressureWriterRoute = Ember.Route.extend({
  model: function (params) {
    return Pressure.findBy('id', params.pressure_id);
  }
});

export default PressureWriterRoute;
