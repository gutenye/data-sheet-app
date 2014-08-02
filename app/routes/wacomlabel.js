import Wacom from 'data-sheet-app/models/wacom';

var WacomlabelRoute = Ember.Route.extend({
  model: function (params) {
    return Wacom.findBy('id', params.writer_id);
  }
});

export default WacomlabelRoute;
