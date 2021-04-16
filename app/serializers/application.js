import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeFindAllResponse(store, type, payload) {
    return {
      data: payload.data.map((place) => {
        return {
          id: place._id,
          type: 'place',
          attributes: { ...place },
        };
      }),
    };
  }
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload._id,
        type: 'place',
        attributes: {
          ...payload,
        },
      },
    };
  }
}
