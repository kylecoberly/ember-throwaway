import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | places/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:places/index');
    assert.ok(route);
  });
});
