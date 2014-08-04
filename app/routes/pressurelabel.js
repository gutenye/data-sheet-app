import Pressure from 'data-sheet-app/models/pressure';

var PressurelabelRoute = Ember.Route.extend({
  model: function (params) {
    return Pressure.findBy('id',params.labels_id);
  }
});

export default PressurelabelRoute;
