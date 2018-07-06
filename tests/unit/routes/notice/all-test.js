import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | notice/all', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:notice/all');
    assert.ok(route);
  });
});
