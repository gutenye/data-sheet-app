import Tablet from 'data-sheet-app/models/tablet';
import Ember from 'ember';

var TabletlabelRoute = Ember.Route.extend({
  model: function (params) {
    return Tablet.findBy('id', params.writer_id);
  }
});

export default TabletlabelRoute;
