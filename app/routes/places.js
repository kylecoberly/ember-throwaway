import Route from '@ember/routing/route';

export default class PlacesRoute extends Route {
  model() {
    return this.store.findAll('place');
  }
}
