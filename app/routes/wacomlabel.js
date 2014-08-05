var WacomlabelRoute = Ember.Route.extend({
  model: function (params) {
    return this.modelFor('wacomwriter').labels.findBy('id', params.labels_id);
  }
});

export default WacomlabelRoute;
