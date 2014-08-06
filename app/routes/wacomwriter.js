var WacomwriterRoute = Ember.Route.extend({
  model: function (params) {
    var writer = this.modelFor('wacom').findBy('id', params.writer_id);
    return writer;
  }
  //
  // setupController: function(controller, model) {
  //   controller.set('model', model);
  // }
});

export default WacomwriterRoute;
