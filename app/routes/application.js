import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      inventory: this.get('store').findAll("inventory")
    })
  }
});
