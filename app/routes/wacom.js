import DS from 'ember-data';
import Ember from 'ember';
import Wacom from 'data-sheet-app/models/wacom';

var WacomRoute = Ember.Route.extend({
  model: function () {
    //return this.store.all('wacom');
    return Wacom;
  }
});

export default WacomRoute;
