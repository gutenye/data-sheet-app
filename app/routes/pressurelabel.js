import Pressure from 'data-sheet-app/models/pressure';

var PressurelabelRoute = Ember.Route.extend({
  model: function (params) {
    writer = Pressure.findBy('id',params.pressure_id);
    return writer.findBy('id',params.pressure_id_labels_id);
  }
});

export default PressurelabelRoute;
