import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cooperation/news', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cooperation/news');
    assert.ok(route);
  });
});
