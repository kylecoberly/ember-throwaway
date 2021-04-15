import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | place-listing', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PlaceListing
      @image="image.jpg"
      @title="Title"
    >
      <a data-test-link href="/places/1">More</a>
    </PlaceListing>
    `);

    assert.ok(
      /image\.jpg/.test(
        this.element
          .querySelector('[data-test-image-tile]')
          .getAttribute('style')
      )
    );

    assert.equal(
      this.element.querySelector('[data-test-title]').textContent,
      'Title'
    );

    assert.equal(
      this.element.querySelector('[data-test-link]').getAttribute('href'),
      '/places/1'
    );
  });
});
