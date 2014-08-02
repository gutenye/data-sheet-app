import Tablet from 'data-sheet-app/models/tablet';

var TabletlabelRoute = Ember.Route.extend({
  model: function (params) {
    return Tablet.findBy('id', params.tablet_id);
  }
});

export default TabletlabelRoute;
