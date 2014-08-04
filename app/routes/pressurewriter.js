import Pressure from 'data-sheet-app/models/pressure';
import Ember from 'ember';

var PressureWriterRoute = Ember.Route.extend({
  model: function (params) {
    return Pressure.findBy('id', params.writer_id);
  }
});

export default PressureWriterRoute;
