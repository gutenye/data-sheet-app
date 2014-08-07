import Ember from 'ember';

export default Ember.Handlebars.helpers('basename', function(value, options) {
  var array = value.split("/lernstift.data/");
  return array[1];
});
