import Controller from '@ember/controller';
import { action } from '@ember/object';
import ENV from 'ember-practice/config/environment';

export default class PlacesNewController extends Controller {
  @action
  addNew(newPlace) {
    fetch(`${ENV.API_BASE_URL}/places`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ENV.API_KEY}`,
      },
      body: JSON.stringify({
        title: newPlace.title,
        last_visited: new Date(newPlace.last_visited).getTime(),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const imageFetches = newPlace.images.map((place) => {
          return fetch(`${ENV.API_BASE_URL}/images`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${ENV.API_KEY}`,
            },
            body: JSON.stringify({
              place_id: response._id,
              url: place.url,
              alt: newPlace.title,
            }),
          });
        });

        return Promise.all(imageFetches);
      })
      .then(() => {
        this.transitionToRoute('places');
      });
  }
}
