import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cooperation/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cooperation/index');
    assert.ok(route);
  });
});
