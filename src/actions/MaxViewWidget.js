export const TYPE_NAME = 'UI/MAX_VIEW_WIDGET';

export class MaxViewWidget {
  +type = TYPE_NAME;

  +payload;

  constructor (payload) {
    this.payload = payload;
  }

  plainAction () {
    return {
      type: this.type,
      payload: this.payload
    };
  }

  static typeName () {
    return TYPE_NAME;
  }
}
