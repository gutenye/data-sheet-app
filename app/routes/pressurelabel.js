var PressurelabelRoute = Ember.Route.extend({
  model: function (params) {
    return this.modelFor('pressurewriter').labels.findBy('id',params.labels_id);
  }
});

export default PressurelabelRoute;
