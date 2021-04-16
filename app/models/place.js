import Model, { attr } from '@ember-data/model';
import { format } from 'date-fns';

export default class PlaceModel extends Model {
  @attr title;
  @attr last_visited;
  @attr images;

  get formattedDate() {
    return format(new Date(this.last_visited), 'MMMM, yyyy');
  }
  get leadImage() {
    return this.images[0];
  }
}
