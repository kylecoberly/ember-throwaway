import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /list', async function (assert) {
    await visit('/list');

    assert.equal(currentURL(), '/list');
    assert.equal(
      document.querySelectorAll('[data-test-place-listing]').length,
      2
    );
  });
});
