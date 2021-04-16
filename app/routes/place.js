import Route from '@ember/routing/route';

export default class PlaceRoute extends Route {
  model(params) {
    return this.store.findRecord('place', params.id);
  }
}
