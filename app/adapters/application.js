import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ember-practice/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://places-api-dev.herokuapp.com';
  headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${ENV.API_KEY}`,
  };
}
