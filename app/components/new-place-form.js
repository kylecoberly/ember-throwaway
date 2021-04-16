import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewPlaceFormComponent extends Component {
  @tracked title = '';
  @tracked description = '';
  @tracked last_visited = '';
  @tracked images = [{ url: '' }];

  @action
  addPlace(event) {
    event.preventDefault();
    const newPlace = {
      title: this.title,
      description: this.description,
      last_visited: this.last_visited,
      images: this.images,
    };

    this.args.addPlace(newPlace);
  }

  @action
  addImage(event) {
    event.preventDefault();

    this.images = [...this.images, { url: '' }];
  }
}
